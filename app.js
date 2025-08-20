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

    const PRODUCTS = ['3d', 'bim', 'hub', 'projects'];
    const DEFAULT_PRODUCT = 'projects';
    
    // --- Get DOM Elements ---
    const productTabs = document.querySelectorAll('.product-tabs .tab-link');
    const productContents = document.querySelectorAll('.main-content .product-content');
    const pageContainer = document.querySelector('.page-container');
    const langLinks = document.querySelectorAll('.lang-link');
    const scrollableArea = document.querySelector('.scrollable-area');

    function getPageType() {
        const path = window.location.pathname;
        if (path.includes('/FAQ/')) return 'faq';
        if (path.includes('/VERSIONS/')) return 'versions';
        if (path.includes('/CONTACT/')) return 'contact';
        if (path.endsWith('index.html') || path.endsWith('/') || path === '') return 'home';
        return 'home';
    }
    const currentPageType = getPageType();

    /**
     * Helper function to get the current language from localStorage.
     * Returns the stored language, or the default if none is found.
     */
    function getCurrentLanguage() {
        try {
            const storedLang = localStorage.getItem('language');
            return LANGUAGES.includes(storedLang) ? storedLang : DEFAULT_LANGUAGE;
        } catch (e) {
            console.warn("LocalStorage not available for retrieving language.", e);
            return DEFAULT_LANGUAGE;
        }
    }

    /**
     * Sets the active class on the correct language link
     */
    function setActiveLanguageLink(lang) {
        langLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.lang === lang) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Fetches Markdown content from a file, converts it to HTML,
     * and injects it into the specified container element.
     * @param {string} productId - The product ID (e.g., '3d').
     * @param {string} pageType - The page type (e.g., 'faq').
     * @param {HTMLElement} container - The DOM element to inject HTML into.
     */
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

    /**
     * Toggles the visibility of homepage content based on the selected language.
     * This function only runs for the index.html page.
     * @param {string} lang - The language to display.
     * @param {string} productId - The currently active product tab ID.
     */
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

    /**
     * Toggles the visibility of hardcoded feedback content.
     * @param {string} lang - The language to display.
     */
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

    /**
     * Toggles the visibility of hardcoded contact content.
     */
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

    /**
     * Switches the visible product content section.
     * This is the universal function for all pages.
     */
    function loadContent(selectedProductId) {
        if (isContentLoading) return;

        const validProductId = PRODUCTS.includes(selectedProductId) ? selectedProductId : DEFAULT_PRODUCT;

        // Always update the backgroundVideo reference when switching
        backgroundVideo = document.querySelector(`.product-content[data-product="${validProductId}"] video`);

        // Remove old scroll listener before re-adding
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

                    // For 3D and Projects, attach scroll listener
                    if ((validProductId === '3d' || validProductId === 'projects'|| validProductId === 'hub' || validProductId === 'bim') && scrollableArea) {
                        scrollableArea.addEventListener('scroll', animateVideoOnScroll);

                        // Spacer logic
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

    
    /**
     * Switches the language, saves the preference, and reloads the page.
     * @param {string} lang - The language to switch to ('en' or 'nl').
     */
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
    
    /**
     * Animates the video's playback based on the scroll position.
     * Updates the target video time.
     */
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
    
    /**
     * Smoothly updates the video's current time towards the target time.
     * Uses requestAnimationFrame for a smooth, non-jerky animation.
     */
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
    
    // --- Event Listeners ---
    
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

    // --- Initialization ---

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

    loadContent(initialProduct);
});