const Sidebar = () => {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';

  const heading = document.createElement('h3');
  heading.textContent = 'Quick Links';

  const links = [
    { href: '/feed', label: 'Feed' },
    { href: '/events', label: 'Events' },
    { href: '/places', label: 'Places' },
    { href: '/search', label: 'Search' },
    { href: '/widgets', label: 'Widgets' },
  ];

  const ul = document.createElement('ul');
  links.forEach(({ href, label }) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = href;
    link.textContent = label;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update the URL without reloading the page
      history.pushState({}, '', href);

      // Dispatch a custom event to trigger the route change logic in your app
      const customEvent = new CustomEvent('routeChange', { detail: { route: href } });
      window.dispatchEvent(customEvent);
    });

    li.appendChild(link);
    ul.appendChild(li);
  });

  sidebar.appendChild(heading);
  sidebar.appendChild(ul);

  return sidebar;
};

export default Sidebar;


// const Sidebar = () => {
//     const sidebar = document.createElement('aside');
//     sidebar.className = 'sidebar';
  
//     const heading = document.createElement('h3');
//     heading.textContent = 'Quick Links';
  
//     const links = [
//       { href: '/feed', label: 'Feed' },
//       { href: '/events', label: 'Events' },
//       { href: '/places', label: 'Places' },
//       { href: '/search', label: 'Search' },
//     ];
  
//     const ul = document.createElement('ul');
//     links.forEach(({ href, label }) => {
//       const li = document.createElement('li');
//       const link = document.createElement('a');
//       link.href = href;
//       link.textContent = label;
  
//       link.addEventListener('click', (e) => {
//         e.preventDefault();
//         window.history.pushState({}, '', href);
//         const mainContent = document.getElementById('main-content');
//         mainContent.dispatchEvent(new Event('popstate'));
//       });
  
//       li.appendChild(link);
//       ul.appendChild(li);
//     });
  
//     sidebar.appendChild(heading);
//     sidebar.appendChild(ul);
  
//     return sidebar;
//   };
  
//   export default Sidebar;
  