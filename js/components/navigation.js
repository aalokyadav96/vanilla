// Navigation Component
import { state } from "../state/state.js";
import { navigate } from "../routes/render.js";
import { logout } from "../services/auth.js";

function createNav() {
    const isLoggedIn = Boolean(state.token);

    const navItems = [
        { href: '/', label: 'Home' },
    ];

    const renderNavItems = (items) =>
        items.map(item => `<li><a href="${item.href}" class="nav-link">${item.label}</a></li>`).join('');

    const createDropdown = `
        <li class="dropdown">
            <button class="dropdown-toggle" id="create-menu" aria-haspopup="true" aria-expanded="false">Create</button>
            <div class="dropdown-menu" aria-label="Create Menu">
                <a href="/create" class="dropdown-item">Eva</a>
                <a href="/place" class="dropdown-item">Loca</a>
            </div>
        </li>`;

    const authButton = isLoggedIn
        ? `
            <li class="dropdown">
                <div class="profile-dropdown-toggle" tabindex="0">
                    <img src="/userpic/thumb/${state.user || 'default'}.jpg" alt="Profile Picture" class="profile-image">
                </div>
                <div class="profile-dropdown-menu">
                    <a href="/profile" class="dropdown-item">Profile</a>
                    <a href="/settings" class="dropdown-item">Settings</a>
                    <button class="dropdown-item logout-btn">Logout</button>
                </div>
            </li>`
        : `<li><button class="btn auth-btn">Login</button></li>`;

    return `
        <header class="navbar">
            <div class="navbar-container">
                <div class="logo">
                    <a href="/" class="logo-link">Show Saw</a>
                </div>
                <nav class="nav-menu">
                    <ul class="nav-list">
                        ${createDropdown}
                        ${renderNavItems(navItems)}
                        ${authButton}
                    </ul>
                </nav>
                <div class="mobile-menu-icon" aria-label="Toggle menu" aria-expanded="false" tabindex="0">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </header>
        <div id="loading" class="loading-overlay" style="display:none;">Loading...</div>`;
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
