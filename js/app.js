import { loadContent } from "./routes/render.js";

// Initialize the page load based on the current URL
function init() {
    // Load the content based on the current URL when the page is first loaded
    loadContent(window.location.pathname);

    // Optionally, you can listen to `popstate` event to handle browser back/forward navigation
    window.addEventListener('popstate', (event) => {
        loadContent(window.location.pathname);
    });
}


// Start the app
init();