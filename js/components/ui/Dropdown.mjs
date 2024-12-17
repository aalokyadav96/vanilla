const Dropdown = (options = [], onChange = () => {}) => {
    const container = document.createElement('div');
    container.className = 'dropdown';
  
    const button = document.createElement('button');
    button.className = 'dropdown-button';
    button.textContent = 'Select an option';
  
    const menu = document.createElement('ul');
    menu.className = 'dropdown-menu';
  
    options.forEach((option) => {
      const menuItem = document.createElement('li');
      menuItem.className = 'dropdown-item';
      menuItem.textContent = option;
      menuItem.addEventListener('click', () => {
        button.textContent = option; // Update button text with selected option
        onChange(option); // Trigger the onChange callback
        menu.classList.remove('show'); // Close the dropdown menu
      });
      menu.appendChild(menuItem);
    });
  
    button.addEventListener('click', () => {
      menu.classList.toggle('show'); // Toggle the dropdown menu visibility
    });
  
    container.appendChild(button);
    container.appendChild(menu);
  
    return container;
  };
  
  export default Dropdown;
  