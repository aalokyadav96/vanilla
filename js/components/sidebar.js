// sidebar.js

const sidebar = (() => {
    const sidebarElement = document.createElement('div');
    sidebarElement.id = 'sidebar';

    // Helper function to create a list item
    const createSidebarItem = (href, label) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = href;
        a.textContent = label;
        li.appendChild(a);
        return li;
    };

    // Sidebar items
    const sidebarItems = [
        { href: '/profile', label: 'Profile' },
        { href: '/feed', label: 'Feed' },
        { href: '/search', label: 'Search' },
        { href: '/settings', label: 'Settings' }
    ];

    // Create and append list items
    const ul = document.createElement('ul');
    sidebarItems.forEach(item => ul.appendChild(createSidebarItem(item.href, item.label)));
    sidebarElement.appendChild(ul);

    return sidebarElement;
})();

export { sidebar };

// // Create and append the sidebar
// const sidebar = document.createElement("div");
// sidebar.id = "sidebar";
// sidebar.innerHTML = `
//         <ul>
//             <li><a href="/profile">Profile</a></li>
//             <li><a href="/feed">Feed</a></li>
//             <li><a href="/search">Search</a></li>
//             <li><a href="/settings">Settings</a></li>
//         </ul>
//     `;
// export { sidebar };