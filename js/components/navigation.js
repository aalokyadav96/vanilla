// Navigation Component
import { state } from "../state/state.js";
import { navigate } from "../routes/render.js";
import { logout } from "../services/auth.js";

function createNav() {
    const isLoggedIn = Boolean(state.token);

    const navItems = [
        { href: '/', label: 'Home' },
    ];

    // Create Header
    const header = document.createElement("header");
    header.className = "navbar";

    // Navbar Container
    const navbarContainer = document.createElement("div");
    navbarContainer.className = "navbar-container";

    // Logo
    const logoDiv = document.createElement("div");
    logoDiv.className = "logo";

    const logoLink = document.createElement("a");
    logoLink.href = "/";
    logoLink.className = "logo-link";
    logoLink.textContent = "Show Saw";
    logoDiv.appendChild(logoLink);

    // Navigation Menu
    const nav = document.createElement("nav");
    nav.className = "nav-menu";

    const ul = document.createElement("ul");
    ul.className = "nav-list";

    // Render Nav Items
    navItems.forEach((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.href;
        a.className = "nav-link";
        a.textContent = item.label;
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Create Dropdown for 'Create' Menu
    const createDropdown = document.createElement("li");
    createDropdown.className = "dropdown";

    const createButton = document.createElement("button");
    createButton.className = "dropdown-toggle";
    createButton.id = "create-menu";
    createButton.setAttribute("aria-haspopup", "true");
    createButton.setAttribute("aria-expanded", "false");
    createButton.textContent = "Create";

    const dropdownMenu = document.createElement("div");
    dropdownMenu.className = "dropdown-menu";
    dropdownMenu.setAttribute("aria-label", "Create Menu");

    const createLinks = [
        { href: "/create", text: "Eva" },
        { href: "/place", text: "Loca" },
    ];

    createLinks.forEach(link => {
        const a = document.createElement("a");
        a.href = link.href;
        a.className = "dropdown-item";
        a.textContent = link.text;
        dropdownMenu.appendChild(a);
    });

    createDropdown.appendChild(createButton);
    createDropdown.appendChild(dropdownMenu);
    ul.appendChild(createDropdown);

    // Auth Button or Profile Dropdown
    if (isLoggedIn) {
        const profileDropdown = document.createElement("li");
        profileDropdown.className = "dropdown";

        const profileToggle = document.createElement("div");
        profileToggle.className = "profile-dropdown-toggle";
        profileToggle.tabIndex = 0;

        const profileImage = document.createElement("img");
        profileImage.src = `/userpic/thumb/${state.user || 'default'}.jpg`;
        profileImage.alt = "Profile Picture";
        profileImage.className = "profile-image";

        profileToggle.appendChild(profileImage);

        const profileMenu = document.createElement("div");
        profileMenu.className = "profile-dropdown-menu";

        const profileLink = document.createElement("a");
        profileLink.href = "/profile";
        profileLink.className = "dropdown-item";
        profileLink.textContent = "Profile";

        const settingsLink = document.createElement("a");
        settingsLink.href = "/settings";
        settingsLink.className = "dropdown-item";
        settingsLink.textContent = "Settings";

        const logoutButton = document.createElement("button");
        logoutButton.className = "dropdown-item logout-btn";
        logoutButton.textContent = "Logout";

        profileMenu.appendChild(profileLink);
        profileMenu.appendChild(settingsLink);
        profileMenu.appendChild(logoutButton);

        profileDropdown.appendChild(profileToggle);
        profileDropdown.appendChild(profileMenu);
        ul.appendChild(profileDropdown);
    } else {
        const loginLi = document.createElement("li");
        const loginButton = document.createElement("button");
        loginButton.className = "btn auth-btn";
        loginButton.textContent = "Login";
        loginLi.appendChild(loginButton);
        ul.appendChild(loginLi);
    }

    // Append All Elements
    nav.appendChild(ul);
    navbarContainer.appendChild(logoDiv);
    navbarContainer.appendChild(nav);
    header.appendChild(navbarContainer);

    return header;
}



function attachNavEventListeners() {
    // Event Listener Helpers

    const handleNavigation = (e, href) => {
        e.preventDefault();
        navigate(href);
    };

    const toggleElement = (selector, className) => {
        const element = document.querySelector(selector);
        element?.classList.toggle(className);
    };

    const closeElement = (selector, className) => {
        const element = document.querySelector(selector);
        element?.classList.remove(className);
    };

    // Attach Event Listeners

    // Login button
    document.querySelector('.auth-btn')?.addEventListener('click', () => navigate('/login'));

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => handleNavigation(e, link.getAttribute('href')));
    });

    // Mobile menu toggle
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    mobileMenuIcon?.addEventListener('click', () => {
        const isExpanded = mobileMenuIcon.getAttribute('aria-expanded') === 'true';
        mobileMenuIcon.setAttribute('aria-expanded', !isExpanded);
        toggleElement('.nav-list', 'active');
    });

    // Close mobile menu on navigation
    document.querySelectorAll('.nav-list .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            closeElement('.nav-list', 'active');
            mobileMenuIcon.setAttribute('aria-expanded', 'false');
        });
    });

    // Create dropdown toggle
    const createToggle = document.getElementById('create-menu');
    createToggle?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleElement('.dropdown-menu', 'show');
    });

    // Profile dropdown toggle
    const profileToggle = document.querySelector('.profile-dropdown-toggle');
    profileToggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleElement('.profile-dropdown-menu', 'show');
    });

    // Close profile dropdown on outside click
    document.addEventListener('click', () => closeElement('.profile-dropdown-menu', 'show'));

    // Keyboard accessibility for profile dropdown
    profileToggle?.addEventListener('keydown', (e) => {
        if (['Enter', ' '].includes(e.key)) {
            toggleElement('.profile-dropdown-menu', 'show');
            e.preventDefault();
        }
    });

    // Logout button
    document.querySelector('.logout-btn')?.addEventListener('click', async () => {
        await logout();
    });
}

export { createNav, attachNavEventListeners };
