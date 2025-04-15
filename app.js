// File: app.js

// Wait until the HTML document is fully loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    // --- Product Configuration ---
    const PRODUCTS = ['3d', 'bim', 'hub', 'projects']; // Your product IDs
    const DEFAULT_PRODUCT = 'projects'; // Set your default product

    // --- Get DOM Elements ---
    const productTabs = document.querySelectorAll('.product-tabs .tab-link');
    const productContents = document.querySelectorAll('.main-content .product-content');
    const pageContainer = document.querySelector('.page-container'); // Optional: for global styles

    // --- Determine Current Page Type ---
    // Derives page type from URL path. Adjust if your URLs differ.
    function getPageType() {
        const path = window.location.pathname;
        // Check for subdirectories first
        if (path.includes('/FAQ/')) return 'faq';
        if (path.includes('/VERSIONS/')) return 'versions';
        if (path.includes('/KNOWN_ISSUES/')) return 'known_issues';
        // Add checks for /CONTACT/, /UPDATES/ etc. if needed
        // Check for home page (at root or named home.html)
        if (path.endsWith('home.html') || path.endsWith('/') || path === '') return 'home';
        // Fallback if no match (e.g., root index might be home)
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
        if (!container) {
            console.error(`Markdown container not found for product ${productId} on page ${pageType}`);
            return;
        }

        // Determine the correct base path for the content file
        // If the current HTML page is at the root (like home.html), path is 'content/...'
        // If the current HTML page is in a subdirectory (like FAQ/faq.html), path is '../content/...'
        const isRootPage = (window.location.pathname.endsWith('home.html') || window.location.pathname.endsWith('/'));
        const basePath = isRootPage ? '' : '../'; // Go up one level if not root
        const filePath = `${basePath}content/${productId}/${pageType}.md`;

        // Display a loading message
        container.innerHTML = '<p>Loading...</p>';

        try {
            // Fetch the Markdown file content
            const response = await fetch(filePath);

            // Check if the fetch was successful
            if (!response.ok) {
                // If file not found (404) or other error, display an error message
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
     * Updates tab appearances, stores the selection, and triggers markdown loading.
     * @param {string} selectedProductId - The product ID (e.g., '3d', 'bim').
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
                loadMarkdownContent(validProductId, currentPageType, markdownContainer);
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
        // Use stored product if it's valid and exists in our PRODUCTS list
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

    // Call the switch function initially to display the correct product content
    switchProductContent(initialProduct);

}); // End of DOMContentLoaded