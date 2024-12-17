const ContextMenu = (options) => {
    const menu = document.createElement('div');
    menu.className = 'context-menu';
  
    options.forEach(({ label, action }) => {
      const menuItem = document.createElement('div');
      menuItem.className = 'menu-item';
      menuItem.textContent = label;
      menuItem.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent other click handlers from triggering
        action();
        menu.remove();
      });
      menu.appendChild(menuItem);
    });
  
    const closeMenu = () => menu.remove();
  
    document.body.addEventListener('click', closeMenu, { once: true });
  
    return menu;
  };
  
  export default ContextMenu;
  