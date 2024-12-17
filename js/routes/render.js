import { createNav, attachNavEventListeners } from "../components/navigation.js";

async function loadContent(url) {
    const app = document.getElementById("app");
    const content = document.createElement("div");
    content.id = "content";

    // Reset app content and reinitialize navigation
    app.innerHTML = createNav();
    app.appendChild(content);
    attachNavEventListeners();

    const path = url || window.location.pathname;

    // Route Handlers (Static Routes)
    const routeHandlers = {
        "/": async () => {
            const { Home } = await import("../pages/home.js");
            Home();
        },
        // "/profile": async () => {
        //     const { displayProfile } = await import("../pages/profile.js");
        //     content.innerHTML = `<div id="profile-section"></div>`;
        //     displayProfile();
        // },
        // "/feed": async () => {
        //     const { displayFeed } = await import("../pages/feed.js");
        //     content.innerHTML = `<div id="feed-section"></div>`;
        //     displayFeed();
        // },
        // "/search": async () => {
        //     const { displaySearch } = await import("../pages/search.js");
        //     content.innerHTML = `<div id="search-section"></div>`;
        //     displaySearch();
        // },
        // "/create": async () => {
        //     const { createEventForm } = await import("../pages/events.js");
        //     content.innerHTML = `<div class="create-section" id="create-section"></div>`;
        //     createEventForm();
        // },
        // "/place": async () => {
        //     const { createPlaceForm } = await import("../pages/places.js");
        //     content.innerHTML = `<h1>Create Place</h1><div class="create-place-section id="create-place-section"></div>`;
        //     createPlaceForm();
        // },
        // "/settings": async () => {
        //     const { displaySettings } = await import("../pages/settings.js");
        //     content.innerHTML = `<h1>Settings</h1><div id="settings"></div>`;
        //     displaySettings();
        // },
        // "/places": async () => {
        //     const { displayPlaces } = await import("../pages/places.js");
        //     content.innerHTML = `<h1>Places</h1><div id="places"></div>`;
        //     displayPlaces();
        // },
        // "/events": async () => {
        //     const { displayEvents } = await import("../pages/events.js");
        //     content.innerHTML = `<h1>Events</h1><div id="events"></div><div class="pagination" id="pagination"></div>`;
        //     displayEvents(1);
        // },
        // "/login": async () => {
        //     const { displayAuthSection } = await import("../pages/auth.js");
        //     content.innerHTML = `<div id="auth-section"></div>`;
        //     displayAuthSection();
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