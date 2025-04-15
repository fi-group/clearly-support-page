// Wait until the HTML document is fully loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    // --- Product Configuration ---
    const PRODUCTS = ['3d', 'bim', 'hub', 'projects'];
    const DEFAULT_PRODUCT = 'projects';

    // --- Get DOM Elements ---
    const productTabs = document.querySelectorAll('.product-tabs .tab-link');
    const productContents = document.querySelectorAll('.main-content .product-content');
    const pageContainer = document.querySelector('.page-container');

    /**
     * Switches the visible content based on the selected product ID.
     * Updates tab appearances and stores the selection in localStorage.
     * @param {string} selectedProductId - The product ID (e.g., '3d', 'bim').
     */
    function switchProductContent(selectedProductId) {
        // Validate selectedProductId exists in our list, otherwise use default
        const validProductId = PRODUCTS.includes(selectedProductId) ? selectedProductId : DEFAULT_PRODUCT;

        // 1. Update Tab Active State
        productTabs.forEach(tab => {
            if (tab.dataset.product === validProductId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // 2. Show/Hide Content Sections
        productContents.forEach(content => {
            if (content.dataset.product === validProductId) {
                content.style.display = 'block'; // Show matching content
            } else {
                content.style.display = 'none'; // Hide other content
            }
        });

        // 3. Store the valid selection in localStorage
        try {
            localStorage.setItem('selectedProduct', validProductId);
        } catch (e) {
            console.warn("LocalStorage not available. Product selection will not persist.", e);
        }

        // 4. Optional: Add product-specific class to page container for global styling
        if (pageContainer) {
            // Remove any existing product classes first
            PRODUCTS.forEach(prodId => pageContainer.classList.remove(`product-${prodId}`));
            // Add the new class
            pageContainer.classList.add(`product-${validProductId}`); // e.g., product-3d, product-bim
        }
    }

    // --- Event Listeners ---

    // Add click listeners to all product tabs
    productTabs.forEach(tab => {
        // Ensure the tab has a valid product dataset attribute
        if (tab.dataset.product) {
            tab.addEventListener('click', (event) => {
                const productId = event.target.dataset.product;
                switchProductContent(productId);
            });
        }
    });

    // --- Initialization ---

    // Determine the initial product to display when the page loads
    let initialProduct = DEFAULT_PRODUCT;
    try {
        const storedProduct = localStorage.getItem('selectedProduct');
        // Check if a valid product preference is stored
        if (storedProduct && PRODUCTS.includes(storedProduct)) {
            initialProduct = storedProduct;
        } else {
            // If nothing stored or invalid, set the default in localStorage
            localStorage.setItem('selectedProduct', initialProduct);
        }
    } catch (e) {
        console.warn("LocalStorage not available for retrieving initial product.", e);
        // Will visually default to DEFAULT_PRODUCT if localStorage failed
    }

    // Apply the initial state on page load
    switchProductContent(initialProduct);

});