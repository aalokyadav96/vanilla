import { createNav, attachNavEventListeners } from "../components/navigation.js";

async function loadContent(url) {
    const app = document.getElementById("app");
    app.innerHTML = ""; // Clear previous content

    // Create Main Content Section
    const main = document.createElement("main");
    main.id = "content"; // Page content will load here

    // Create Footer
    const footer = document.createElement("footer");
    const footerText = document.createElement("p");
    footerText.textContent = "© 2024 My SPA Platform";
    footer.appendChild(footerText);

    // Append all sections to the app container
    app.appendChild(createNav());
    app.appendChild(main);
    app.appendChild(footer);

    attachNavEventListeners();

    // Load initial page content (e.g., homepage)
    const path = url || window.location.pathname;
    await renderPageContent(path, main);
}

async function renderPageContent(path, contentContainer) {
    // Route Handlers (Static Routes)
    const routeHandlers = {
        "/": async () => {
            const { Home } = await import("../pages/home.js");
            contentContainer.innerHTML = ""; // Clear previous page content
            Home(contentContainer);
        },
        // "/login": async () => {
        //     const { displayAuthSection } = await import("../pages/auth.js");
        //     contentContainer.innerHTML = "";
        //     displayAuthSection(contentContainer);
        // },
    };

    // // Dynamic Routes (Pattern Matching)
    // const dynamicRoutes = [
    //     {
    //         pattern: /^\/user\/([\w-]+)$/,
    //         handler: async (matches) => {
    //             const { displayUserProfile } = await import("../pages/profile.js");
    //             await displayUserProfile(matches[1]);
    //         },
    //     },
    //     {
    //         pattern: /^\/event\/([\w-]+)$/,
    //         handler: async (matches) => {
    //             const { displayEvent } = await import("../pages/events.js");
    //             try {
    //                 await displayEvent(matches[1]);
    //             } catch {
    //                 content.innerHTML = `<h1>Event Not Found</h1>`;
    //             }
    //         },
    //     },
    //     {
    //         pattern: /^\/place\/([\w-]+)$/,
    //         handler: async (matches) => {
    //             const { displayPlace } = await import("../pages/places.js");
    //             try {
    //                 await displayPlace(matches[1]);
    //             } catch {
    //                 content.innerHTML = `<h1>Place Not Found</h1>`;
    //             }
    //         },
    //     },
    // ];

    // Match static routes
    const handler = routeHandlers[path];
    if (handler) {
        await handler();
    } else {
        // // Match dynamic routes
        // for (const route of dynamicRoutes) {
        //     const matches = path.match(route.pattern);
        //     if (matches) {
        //         await route.handler(matches);
        //         return;
        //     }
        // }
        // // If no route matches, show 404
        content.innerHTML = `<h1>404 Not Found</h1>`;
    }
}

function navigate(url) {
    history.pushState(null, "", url);
    loadContent(url);
}

// Listen for browser navigation (back/forward)
window.addEventListener("popstate", async () => {
    await loadContent(window.location.pathname);
});

// Initial Render
async function renderPage() {
    await loadContent(window.location.pathname);
}

export { navigate, renderPage, loadContent };