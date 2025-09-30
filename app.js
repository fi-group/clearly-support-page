// --- 1. CONSTANTS and GLOBALS ---
const CLIENT_ID = "2ptu70q0dmba7o1ustv95h4tsf";
const REDIRECT_URI = "https://support.clearly.app";
const ADMIN_EMAIL = "support@futureinsight.nl";
const COGNITO_USER_POOL_DOMAIN = "auth.clearly.app";
const OAUTH_TOKEN_ENDPOINT = `https://${COGNITO_USER_POOL_DOMAIN}/oauth2/token`;

const LANGUAGES = ['en', 'nl'];
const DEFAULT_LANGUAGE = 'en';
let isContentLoading = false;

// --- 2. AUTHENTICATION FUNCTIONS ---
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

function generateRandomString(length) {
    const p = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let t = '';
    for (let i = 0; i < length; i++) {
        t += p.charAt(Math.floor(Math.random() * p.length));
    }
    return t;
}
async function sha256(plain) {
    const e = new TextEncoder().encode(plain);
    return window.crypto.subtle.digest('SHA-256', e);
}

function base64urlencode(buf) {
    let s = '';
    const b = new Uint8Array(buf);
    for (let i = 0; i < b.byteLength; i++) {
        s += String.fromCharCode(b[i]);
    }
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
async function generateCodeChallenge(v) {
    const h = await sha256(v);
    return base64urlencode(h);
}

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
async function initiateLogin() {
    const verifier = generateRandomString(128);
    sessionStorage.setItem('pkce_code_verifier', verifier);
    const challenge = await generateCodeChallenge(verifier);
    const url = `https://${COGNITO_USER_POOL_DOMAIN}/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=openid+profile+email&code_challenge=${challenge}&code_challenge_method=S256&prompt=login`;
    window.location.href = url;
}
async function exchangeCodeForTokens(code, verifier) {
    const body = new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        code,
        redirect_uri: REDIRECT_URI,
        code_verifier: verifier
    });
    try {
        const response = await fetch(OAUTH_TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body
        });
        if (!response.ok) {
            throw new Error('Token exchange failed');
        }
        const data = await response.json();
        const decodedToken = decodeJwt(data.id_token);
        if (decodedToken && decodedToken.email === ADMIN_EMAIL) {
            localStorage.setItem('accessToken', data.access_token);
            localStorage.setItem('idToken', data.id_token);
            showNotification("You are currently logged in with the Support account.", 'success');
        } else {
            showNotification("Only Future Insight admins can use 'Admin Login'.", 'error');
            setTimeout(() => {
                handleLogout();
            }, 500);
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

function updateLoginUI() {
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const editorLink = document.getElementById('editor-link');
    if (!loginButton || !logoutButton) return;
    if (localStorage.getItem('idToken')) {
        loginButton.style.display = 'none';
        logoutButton.style.display = 'block';
        if (editorLink && isUserAdmin()) {
            editorLink.style.display = 'inline-block';
        }
    } else {
        loginButton.style.display = 'block';
        logoutButton.style.display = 'none';
        if (editorLink) {
            editorLink.style.display = 'none';
        }
    }
}


// --- 3. SEARCH FUNCTIONALITY ---
const SEARCH_INDEX = [
    { product: '3d', page: 'faq', lang: 'en' }, { product: '3d', page: 'versions', lang: 'en' },
    { product: 'bim', page: 'faq', lang: 'en' }, { product: 'bim', page: 'versions', lang: 'en' },
    { product: 'hub', page: 'faq', lang: 'en' }, { product: 'hub', page: 'versions', lang: 'en' },
    { product: 'projects', page: 'faq', lang: 'en' }, { product: 'projects', page: 'versions', lang: 'en' },
    { product: '3d', page: 'faq', lang: 'nl' }, { product: '3d', page: 'versions', lang: 'nl' },
    { product: 'bim', page: 'faq', lang: 'nl' }, { product: 'bim', page: 'versions', lang: 'nl' },
    { product: 'hub', page: 'faq', lang: 'nl' }, { product: 'hub', page: 'versions', lang: 'nl' },
    { product: 'projects', page: 'faq', lang: 'nl' }, { product: 'projects', page: 'versions', lang: 'nl' },
];
const searchCache = {};

async function buildSearchCache() {
    for (const item of SEARCH_INDEX) {
        const filePath = `./content/${item.lang}/${item.product}/${item.page}.md`;
        try {
            const response = await fetch(filePath);
            if (response.ok) {
                searchCache[filePath] = await response.text();
            }
        } catch (error) {
            console.error(`Could not fetch ${filePath} for search cache.`, error);
        }
    }
}

function searchContent(query) {
    if (!query || query.length < 2) {
        return [];
    }
    const results = [];
    const lowerCaseQuery = query.toLowerCase();
    for (const item of SEARCH_INDEX) {
        const filePath = `./content/${item.lang}/${item.product}/${item.page}.md`;
        const content = searchCache[filePath];
        if (content) {
            const lowerCaseContent = content.toLowerCase();
            const matchIndex = lowerCaseContent.indexOf(lowerCaseQuery);
            if (matchIndex > -1) {
                const startIndex = Math.max(0, matchIndex - 30);
                const endIndex = Math.min(content.length, matchIndex + 70);
                let snippet = content.substring(startIndex, endIndex);
                const regex = new RegExp(query, 'gi');
                snippet = snippet.replace(regex, (match) => `<strong>${match}</strong>`);
                results.push({
                    product: item.product,
                    page: item.page,
                    lang: item.lang,
                    title: `${item.product.toUpperCase()} - ${item.page.toUpperCase()} (${item.lang.toUpperCase()})`,
                    url: `/${item.product}/${item.page}.html`,
                    snippet: `...${snippet}...`
                });
            }
        }
    }
    return results;
}

function displaySearchResults(results, query) {
    const container = document.getElementById('search-results-container');
    if (!container) return;
    if (results.length === 0) {
        container.innerHTML = '';
        return;
    }
    const encodedQuery = encodeURIComponent(query);
    container.innerHTML = results.map(result => `
        <a href="${result.url}?lang=${result.lang}#search=${encodedQuery}" class="search-result-item">
            <div class="search-result-title">${result.title}</div>
            <div class="search-result-snippet">${result.snippet}</div>
        </a>
    `).join('');
}

function getHighlightTermFromURL() {
    if (window.location.hash && window.location.hash.startsWith('#search=')) {
        const term = window.location.hash.substring(8);
        return decodeURIComponent(term);
    }
    return null;
}

function scrollToAndHighlight(term) {
    const container = document.getElementById('markdown-content');
    if (!container || !term) return;
    const regex = new RegExp(`(${term})`, 'gi');
    const elements = container.querySelectorAll('p, li, td, h1, h2, h3, h4');
    let targetElement = null;
    for (const el of elements) {
        if (el.textContent.toLowerCase().includes(term.toLowerCase())) {
            el.innerHTML = el.innerHTML.replace(regex, `<span class="highlight-search">$1</span>`);
            targetElement = el.querySelector('.highlight-search');
            break;
        }
    }
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        setTimeout(() => {
            targetElement.style.backgroundColor = 'transparent';
        }, 2000);
    }
}

// --- 4. PAGE LOGIC & UI ---
function getPageInfoFromURL() {
    const pathParts = window.location.pathname.split('/').filter(part => part && !part.endsWith('.html'));
    if (pathParts.length === 0) {
        return {
            product: null,
            pageType: 'home'
        };
    }
    const product = pathParts[0];
    const pageName = window.location.pathname.split('/').pop().replace('.html', '');
    const pageType = ['documentation', 'versions', 'faq'].includes(pageName) ? pageName : 'home';
    return {
        product,
        pageType
    };
}

function getCurrentLanguage() {
    try {
        const storedLang = localStorage.getItem('language');
        return LANGUAGES.includes(storedLang) ? storedLang : DEFAULT_LANGUAGE;
    } catch (e) {
        return DEFAULT_LANGUAGE;
    }
}

function setActiveLanguageLink(lang) {
    document.querySelectorAll('.language-switcher a').forEach(link => {
        link.classList.toggle('active', link.dataset.lang === lang);
    });
}

function toggleFeedbackContent(lang) {
    document.querySelectorAll('.feedback-lang').forEach(div => {
        div.style.display = (div.dataset.lang === lang) ? 'block' : 'none';
    });
}

function toggleContactContent(lang) {
    document.querySelectorAll('.contact-list').forEach(div => {
        div.style.display = (div.dataset.lang === lang) ? 'block' : 'none';
    });
}

function updateUIText(lang) {
    document.querySelectorAll('[data-lang-text-en]').forEach(el => {
        const text = el.getAttribute(`data-lang-text-${lang}`);
        if (text) {
            el.textContent = text;
        }
    });
    document.querySelectorAll('[data-lang-placeholder-en]').forEach(el => {
        const placeholder = el.getAttribute(`data-lang-placeholder-${lang}`);
        if (placeholder) {
            el.placeholder = placeholder;
        }
    });
}
async function loadMarkdownContent() {
    const container = document.getElementById('markdown-content');
    if (!container || isContentLoading) return;
    isContentLoading = true;
    const {
        product,
        pageType
    } = getPageInfoFromURL();
    const currentLanguage = getCurrentLanguage();
    if (!product || !pageType) {
        isContentLoading = false;
        return;
    }
    const filePath = `../content/${currentLanguage}/${product}/${pageType}.md`;
    container.innerHTML = '<p>Loading...</p>';
    try {
        const response = await fetch(filePath, {
            cache: 'no-cache'
        });
        if (!response.ok) throw new Error(`Could not fetch ${filePath}`);
        const markdownText = await response.text();
        if (typeof marked === 'undefined') throw new Error("Marked.js library is not loaded.");
        container.innerHTML = marked.parse(markdownText);
        const termToHighlight = getHighlightTermFromURL();
        if (termToHighlight) {
            scrollToAndHighlight(termToHighlight);
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }
    } catch (error) {
        console.error('Error loading content:', error);
        container.innerHTML = `<p style="color: red;">Error loading content.</p>`;
    } finally {
        isContentLoading = false;
    }
}

function updateProductPageUI() {
    const { product, pageType } = getPageInfoFromURL();
    if (!product) return;
    let productName = product.charAt(0).toUpperCase() + product.slice(1);
    if (product === 'bim') productName = 'BIM';
    if (product === '3d') productName = '3D-City';
    let pageTypeName = pageType.charAt(0).toUpperCase() + pageType.slice(1);
    if (pageType === 'faq') pageTypeName = 'FAQ';
    document.title = `Clearly ${productName} - ${pageTypeName}`;
    const productTitleEl = document.getElementById('product-title');
    if (productTitleEl) productTitleEl.textContent = `Clearly.${productName}`;
    const pageMainTitleEl = document.getElementById('page-main-title');
    if (pageMainTitleEl) pageMainTitleEl.textContent = `${pageTypeName} - ${productName}`;
    document.querySelectorAll('.product-nav li').forEach(li => {
        li.classList.remove('active');
    });
    const activeNav = document.getElementById(`nav-${pageType}`);
    if (activeNav) activeNav.classList.add('active');
}

// --- 5. MAIN INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const langFromURL = urlParams.get('lang');
    if (langFromURL && LANGUAGES.includes(langFromURL)) {
        localStorage.setItem('language', langFromURL);
        history.replaceState(null, '', window.location.pathname + window.location.hash);
    }

    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    if (loginButton) loginButton.addEventListener('click', initiateLogin);
    if (logoutButton) logoutButton.addEventListener('click', handleLogout);
    
    const code = urlParams.get('code');
    const codeVerifier = sessionStorage.getItem('pkce_code_verifier');
    if (code && codeVerifier) {
        exchangeCodeForTokens(code, codeVerifier);
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    updateLoginUI();

    const langLinks = document.querySelectorAll('.language-switcher a');
    langLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedLang = event.target.dataset.lang;
            localStorage.setItem('language', selectedLang);
            setActiveLanguageLink(selectedLang);
            toggleFeedbackContent(selectedLang);
            toggleContactContent(selectedLang);
            updateUIText(selectedLang);
            if (document.querySelector('.page-container-new')) {
                loadMarkdownContent();
            }
        });
    });

    const searchBar = document.querySelector('.home-search-bar');
    if (searchBar) {
        buildSearchCache();
        searchBar.addEventListener('input', () => {
            const query = searchBar.value;
            const results = searchContent(query);
            displaySearchResults(results, query);
        });
        document.addEventListener('click', (event) => {
            const container = document.getElementById('search-results-container');
            if (container && !container.contains(event.target) && event.target !== searchBar) {
                container.innerHTML = '';
            }
        });
    }

    const currentLanguage = getCurrentLanguage();
    setActiveLanguageLink(currentLanguage);
    toggleFeedbackContent(currentLanguage);
    toggleContactContent(currentLanguage);
    updateUIText(currentLanguage);

    if (document.querySelector('.page-container-new')) {
        updateProductPageUI();
        loadMarkdownContent();
    }
});