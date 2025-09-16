// -------------- Login/Logout Start --------------
// --- Part 1: Global Constants & Variables ---

const CLIENT_ID = "2ptu70q0dmba7o1ustv95h4tsf";
const REDIRECT_URI = "https://support.clearly.app"; // CHNAGE WITH PROD
const ADMIN_EMAIL = "support@futureinsight.nl";

const COGNITO_USER_POOL_DOMAIN = "auth.clearly.app";
const OAUTH_TOKEN_ENDPOINT = `https://${COGNITO_USER_POOL_DOMAIN}/oauth2/token`;

// --- Part 2: Authentication Helper Functions ---

function decodeJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("Failed to decode JWT:", e);
        return null;
    }
}

function isUserAdmin() {
    const idToken = localStorage.getItem('idToken');
    if (!idToken) return false;
    const decodedToken = decodeJwt(idToken);
    return decodedToken && decodedToken.email === ADMIN_EMAIL;
}

function generateRandomString(length) { const p = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; let t = ''; for (let i = 0; i < length; i++) { t += p.charAt(Math.floor(Math.random() * p.length)); } return t; }
async function sha256(plain) { const e = new TextEncoder().encode(plain); return window.crypto.subtle.digest('SHA-256', e); }
function base64urlencode(buf) { let s = ''; const b = new Uint8Array(buf); for (let i = 0; i < b.byteLength; i++) { s += String.fromCharCode(b[i]); } return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, ''); }
async function generateCodeChallenge(v) { const h = await sha256(v); return base64urlencode(h); }

function showNotification(message, type = 'success') {
    const popup = document.getElementById('notification-popup');
    const messageEl = document.getElementById('notification-message');
    const closeBtn = document.getElementById('notification-close');
    if (!popup || !messageEl || !closeBtn) return;
    messageEl.textContent = message;
    popup.className = type;
    const hideNotification = () => popup.classList.add('hidden');
    closeBtn.onclick = hideNotification;
    setTimeout(hideNotification, 5000);
}


// --- Part 3: Authentication Core Logic ---

async function initiateLogin() {
    const verifier = generateRandomString(128);
    sessionStorage.setItem('pkce_code_verifier', verifier);
    const challenge = await generateCodeChallenge(verifier);
    const url = `https://${COGNITO_USER_POOL_DOMAIN}/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=openid+profile+email&code_challenge=${challenge}&code_challenge_method=S256&prompt=login`;
    window.location.href = url;
}

async function exchangeCodeForTokens(code, verifier) {
    const body = new URLSearchParams({ grant_type: 'authorization_code', client_id: CLIENT_ID, code, redirect_uri: REDIRECT_URI, code_verifier: verifier });
    try {
        const response = await fetch(OAUTH_TOKEN_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
        if (!response.ok) { throw new Error('Token exchange failed'); }
        const data = await response.json();
        const decodedToken = decodeJwt(data.id_token);

        if (decodedToken && decodedToken.email === ADMIN_EMAIL) {
            localStorage.setItem('accessToken', data.access_token);
            localStorage.setItem('idToken', data.id_token);
            showNotification("You are currently logged in with the Support account.", 'success');
        } else {
            localStorage.clear();
            sessionStorage.clear();
            showNotification("Only Future Insight admins can use 'Admin Login'.", 'error');
        }
    } catch (e) {
        console.error('Token exchange error:', e);
        showNotification("An error occurred during login. Please try again.", 'error');
    } finally {
        updateLoginUI();
    }
}

function handleLogout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    const url = `https://${COGNITO_USER_POOL_DOMAIN}/logout?client_id=${CLIENT_ID}&logout_uri=${encodeURIComponent(REDIRECT_URI)}`;
    window.location.href = url;
}

// Update UI based on login state
function updateLoginUI() {
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const editorLink = document.getElementById('editor-link'); // Get the new link
    
    if (!loginButton || !logoutButton || !editorLink) return;

    if (localStorage.getItem('idToken')) {
        loginButton.style.display = 'none';
        logoutButton.style.display = 'block';

        // Check if the user is the admin to show the "Editor" link
        if (isUserAdmin()) {
            editorLink.style.display = 'inline-block';
        } else {
            editorLink.style.display = 'none';
        }

    } else {
        loginButton.style.display = 'block';
        logoutButton.style.display = 'none';
        editorLink.style.display = 'none';
    }
}


// --- Part 4: Main Application Logic ---
function getPageType() {
    const path = window.location.pathname;
    if (path.includes('/FAQ/')) return 'faq';
    if (path.includes('/VERSIONS/')) return 'versions';
    if (path.includes('/CONTACT/')) return 'contact';
    if (path.endsWith('index.html') || path.endsWith('/') || path === '') return 'home';
    return 'home';
}

function getCurrentLanguage() {
    try {
        const storedLang = localStorage.getItem('language');
        return LANGUAGES.includes(storedLang) ? storedLang : DEFAULT_LANGUAGE;
    } catch (e) {
        console.warn("LocalStorage not available for retrieving language.", e);
        return DEFAULT_LANGUAGE;
    }
}
// -------------- Login/Logout End --------------


// Add constants for languages and a default language
const LANGUAGES = ['en', 'nl'];
const DEFAULT_LANGUAGE = 'en';

// Variables for video scrubbing animation
let currentVideoTime = 0;
let targetVideoTime = 0;
let isAnimating = false;
let backgroundVideo = null;

// Flag to prevent multiple content loads at once
let isContentLoading = false;

// Wait until the HTML document is fully loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // ========== Part 1: Original Application Setup ============
    // ==========================================================

    const PRODUCTS = ['3d', 'bim', 'hub', 'projects'];
    const DEFAULT_PRODUCT = 'projects';

    // --- Get DOM Elements ---
    const productTabs = document.querySelectorAll('.product-tabs .tab-link');
    const productContents = document.querySelectorAll('.main-content .product-content');
    const langLinks = document.querySelectorAll('.lang-link');
    const scrollableArea = document.querySelector('.scrollable-area');
    
    // --- Original Functions ---

    function getPageType() {
        const path = window.location.pathname;
        if (path.includes('/FAQ/')) return 'faq';
        if (path.includes('/VERSIONS/')) return 'versions';
        if (path.includes('/CONTACT/')) return 'contact';
        if (path.endsWith('index.html') || path.endsWith('/') || path === '') return 'home';
        return 'home';
    }
    const currentPageType = getPageType();

    function getCurrentLanguage() {
        try {
            const storedLang = localStorage.getItem('language');
            return LANGUAGES.includes(storedLang) ? storedLang : DEFAULT_LANGUAGE;
        } catch (e) {
            console.warn("LocalStorage not available for retrieving language.", e);
            return DEFAULT_LANGUAGE;
        }
    }

    function setActiveLanguageLink(lang) {
        langLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.lang === lang) {
                link.classList.add('active');
            }
        });
    }

    async function fetchMarkdownContent(productId, pageType, container) {
        if (!container || isContentLoading) {
            return;
        }

        isContentLoading = true;
        const currentLanguage = getCurrentLanguage();
        const isRootPage = (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/'));
        const basePath = isRootPage ? '' : '../';
        const filePath = `${basePath}content/${currentLanguage}/${productId}/${pageType}.md`;

        container.innerHTML = '<p>Loading...</p>';

        try {
            const response = await fetch(filePath, {
                cache: 'no-cache'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} loading ${filePath}`);
            }

            const markdownText = await response.text();

            if (typeof marked === 'undefined') {
                throw new Error("Marked.js library is not loaded. Please include it in your HTML.");
            }

            container.innerHTML = marked.parse(markdownText);

        } catch (error) {
            console.error('Error loading or parsing Markdown content:', error);
            container.innerHTML = `<p style="color: red; font-weight: bold;">Error loading content.</p><p style="color: #666; font-size: 0.9em;">Could not load: ${filePath}<br/>${error.message}</p>`;
        } finally {
            isContentLoading = false;
        }
    }

    function toggleHomePageContent(lang, productId) {
        const productContentDiv = document.querySelector(`.product-content[data-product="${productId}"]`);
        if (!productContentDiv) return;

        const allContentDivs = productContentDiv.querySelectorAll('.home-content-lang');
        allContentDivs.forEach(div => {
            if (div.dataset.lang === lang) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
    }

    function toggleFeedbackContent(lang) {
        const feedbackDivs = document.querySelectorAll('.feedback-lang');
        feedbackDivs.forEach(div => {
            if (div.dataset.lang === lang) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
    }

    function toggleContactContent(lang) {
        const contactDivs = document.querySelectorAll('.contact-list');
        contactDivs.forEach(div => {
            if (div.dataset.lang === lang) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
    }

    function loadContent(selectedProductId) {
        if (isContentLoading) return;

        const validProductId = PRODUCTS.includes(selectedProductId) ? selectedProductId : DEFAULT_PRODUCT;

        backgroundVideo = document.querySelector(`.product-content[data-product="${validProductId}"] video`);

        if (scrollableArea) {
            scrollableArea.removeEventListener('scroll', animateVideoOnScroll);
        }

        productTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.product === validProductId);
        });

        productContents.forEach(contentDiv => {
            const isMatch = contentDiv.dataset.product === validProductId;
            contentDiv.style.display = isMatch ? 'block' : 'none';

            if (isMatch) {
                if (currentPageType === 'home') {
                    const currentLanguage = getCurrentLanguage();
                    toggleHomePageContent(currentLanguage, validProductId);

                    if ((validProductId === '3d' || validProductId === 'projects'|| validProductId === 'hub' || validProductId === 'bim') && scrollableArea) {
                        scrollableArea.addEventListener('scroll', animateVideoOnScroll);

                        const scrollableContent = document.querySelector(`.product-content[data-product="${validProductId}"] .scrollable-content`);
                        const scrollbarSpacer = document.querySelector('.video-scrub-spacer');
                        if (scrollableContent && scrollbarSpacer) {
                            if (scrollableContent.scrollHeight <= window.innerHeight) {
                                scrollbarSpacer.style.height = '150vh';
                            } else {
                                scrollbarSpacer.style.height = '0';
                            }
                        }
                    }
                } else {
                    const markdownContainer = contentDiv.querySelector('.markdown-container');
                    if (markdownContainer) {
                        fetchMarkdownContent(validProductId, currentPageType, markdownContainer);
                    }
                }
            }
        });

        try {
            localStorage.setItem('selectedProduct', validProductId);
        } catch (e) {
            console.warn("LocalStorage not available. Product selection will not persist.", e);
        }
    }
    
    function switchLanguage(lang) {
        try {
            localStorage.setItem('language', lang);
        } catch (e) {
            console.warn("LocalStorage not available for saving language preference.", e);
        }
        
        setActiveLanguageLink(lang);
        toggleFeedbackContent(lang);
        toggleContactContent(lang);

        if (currentPageType === 'home') {
            loadContent(localStorage.getItem('selectedProduct'));
        } else {
            loadContent(localStorage.getItem('selectedProduct'));
        }
    }
    
    function animateVideoOnScroll() {
        if (!backgroundVideo) return;
        if (!scrollableArea) return;

        const scrollHeight = scrollableArea.scrollHeight - scrollableArea.clientHeight;
        const scrollPosition = scrollableArea.scrollTop;

        if (backgroundVideo.duration && scrollHeight > 0) {
            const duration = backgroundVideo.duration;
            targetVideoTime = (scrollPosition / scrollHeight) * duration;
        }

        if (!isAnimating) {
            updateVideoTime();
        }
    }
    
    function updateVideoTime() {
        isAnimating = true;
        currentVideoTime += (targetVideoTime - currentVideoTime) * 0.1;
        backgroundVideo.currentTime = Math.max(0, Math.min(backgroundVideo.duration, currentVideoTime));

        if (Math.abs(targetVideoTime - currentVideoTime) > 0.01) {
            window.requestAnimationFrame(updateVideoTime);
        } else {
            isAnimating = false;
        }
    }

    // ==========================================================
    // ========== Part 2: Authentication Logic Setup ============
    // ==========================================================

    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');

    if (loginButton) loginButton.addEventListener('click', initiateLogin);
    if (logoutButton) logoutButton.addEventListener('click', handleLogout);

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const codeVerifier = sessionStorage.getItem('pkce_code_verifier');

    if (code && codeVerifier) {
        exchangeCodeForTokens(code, codeVerifier);
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    updateLoginUI(); 

    // ==========================================================
    // ===== Part 3: Combined Initialization & Event Listeners ====
    // ==========================================================

    // --- Original Event Listeners ---
    productTabs.forEach(tab => {
        if (tab.dataset.product) {
            tab.addEventListener('click', (event) => {
                loadContent(event.target.dataset.product);
            });
        }
    });

    langLinks.forEach(link => {
        if (link.dataset.lang) {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const selectedLang = event.target.dataset.lang;
                switchLanguage(selectedLang);
            });
        }
    });

    // --- Original Initialization ---
    let initialProduct = DEFAULT_PRODUCT;
    try {
        const storedProduct = localStorage.getItem('selectedProduct');
        if (storedProduct && PRODUCTS.includes(storedProduct)) {
            initialProduct = storedProduct;
        } else {
            localStorage.setItem('selectedProduct', initialProduct);
        }
    } catch (e) {
        console.warn("LocalStorage not available for retrieving initial product.", e);
    }
    
    const currentLanguage = getCurrentLanguage();
    setActiveLanguageLink(currentLanguage);
    toggleFeedbackContent(currentLanguage);
    toggleContactContent(currentLanguage);

    loadContent(initialProduct);
});