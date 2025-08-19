// Wait until the HTML document is fully loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    const PRODUCTS = ['3d', 'bim', 'hub', 'projects'];
    const DEFAULT_PRODUCT = 'projects'; 
    
    // --- Get DOM Elements ---
    const productTabs = document.querySelectorAll('.product-tabs .tab-link');
    const productContents = document.querySelectorAll('.main-content .product-content, .scrollable-area .product-content');
    const pageContainer = document.querySelector('.page-container');

    // Derives page type from URL path. Adjust if your URLs differ.
    function getPageType() {
        const path = window.location.pathname;
        // Check for subdirectories first
        if (path.includes('/FAQ/')) return 'faq';
        if (path.includes('/VERSIONS/')) return 'versions';
        if (path.includes('/COMMUNITY/')) return 'community'; 
        if (path.includes('/CONTACT/')) return 'contact';   
        // Check for home page (at root or named index.html)
        if (path.endsWith('index.html') || path.endsWith('/') || path === '') return 'home';
        // Fallback if no match
        return 'home';
    }
    const currentPageType = getPageType();

    /**
     * Fetches Markdown content from a file, converts it to HTML,
     * and injects it into the specified container element.
     * @param {string} productId - The product ID (e.g., '3d').
     * @param {string} pageType - The page type (e.g., 'faq').
     * @param {HTMLElement} container - The DOM element to inject HTML into.
     */
    async function loadMarkdownContent(productId, pageType, container) {
        // Exit if the container element doesn't exist on the page
        // (e.g., on community page which might not load markdown)
        if (!container) {
            // console.log(`No markdown container found for product ${productId} on page ${pageType}. Skipping markdown load.`);
            return;
        }

        // Determine the correct base path for the content file
        const isRootPage = (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/'));
        const basePath = isRootPage ? '' : '../'; // Go up one level if not root
        const filePath = `${basePath}content/${productId}/${pageType}.md`;

        // Display a loading message
        container.innerHTML = '<p>Loading...</p>';

        try {
            // Fetch the Markdown file content WITH cache control
            // *** THIS IS THE UPDATED LINE ***
            const response = await fetch(filePath, { cache: 'no-cache' });

            // Check if the fetch was successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} loading ${filePath}`);
            }

            // Get the text content of the file
            const markdownText = await response.text();

            // Check if Marked.js library is loaded
            if (typeof marked === 'undefined') {
                throw new Error("Marked.js library is not loaded. Please include it in your HTML.");
            }

            // Convert Markdown text to HTML using Marked.js
            container.innerHTML = marked.parse(markdownText);

        } catch (error) {
            // Display error message in the container if fetching/parsing fails
            console.error('Error loading or parsing Markdown content:', error);
            container.innerHTML = `<p style="color: red; font-weight: bold;">Error loading content.</p><p style="color: #666; font-size: 0.9em;">Could not load: ${filePath}<br/>${error.message}</p>`;
        }
    }

    /**
     * Switches the visible product content section based on the selected product ID.
     */
    function switchProductContent(selectedProductId) {
        // Ensure the selected product ID is valid, otherwise use the default
        const validProductId = PRODUCTS.includes(selectedProductId) ? selectedProductId : DEFAULT_PRODUCT;

        // 1. Update Tab Active State
        productTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.product === validProductId);
        });

        // 2. Show the correct product content section and hide others
        productContents.forEach(contentDiv => {
            const isMatch = contentDiv.dataset.product === validProductId;
            contentDiv.style.display = isMatch ? 'block' : 'none';

            // If this is the section being shown, load its Markdown content
            if (isMatch) {
                // Find the specific container within this product section
                const markdownContainer = contentDiv.querySelector('.markdown-container');
                // Load content only if the container exists
                if (markdownContainer) {
                    loadMarkdownContent(validProductId, currentPageType, markdownContainer);
                }
            }
        });

        // 3. Store the valid selection in localStorage
        try {
            localStorage.setItem('selectedProduct', validProductId);
        } catch (e) {
            console.warn("LocalStorage not available. Product selection will not persist.", e);
        }

        // 4. Optional: Add product-specific class to page container for styling hooks
        if (pageContainer) {
            PRODUCTS.forEach(prodId => pageContainer.classList.remove(`product-${prodId}`));
            pageContainer.classList.add(`product-${validProductId}`);
        }
    }

    // --- Event Listeners ---

    // Add click event listeners to all product tabs
    productTabs.forEach(tab => {
        // Check if the tab has the data-product attribute
        if (tab.dataset.product) {
            tab.addEventListener('click', (event) => {
                // When clicked, switch content to the product specified in data-product
                switchProductContent(event.target.dataset.product);
            });
        }
    });

    // --- Initialization ---

    // Determine the initial product to show when the page first loads
    let initialProduct = DEFAULT_PRODUCT; // Start with the default
    try {
        const storedProduct = localStorage.getItem('selectedProduct');
        // Use stored product if it's valid and exists in PRODUCTS list
        if (storedProduct && PRODUCTS.includes(storedProduct)) {
            initialProduct = storedProduct;
        } else {
            // If no valid product stored, store the default one
            localStorage.setItem('selectedProduct', initialProduct);
        }
    } catch (e) {
        console.warn("LocalStorage not available for retrieving initial product.", e);
        // Will visually default to DEFAULT_PRODUCT if localStorage fails
    }

    // Call the switch function initially only if product tabs exist on the page
    // This prevents errors on pages without product switching
    if (productTabs.length > 0 && productContents.length > 0) {
    switchProductContent(initialProduct);
    }

}); 
