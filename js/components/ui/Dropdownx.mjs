const Dropdown = (options = [], onSelect) => {
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';
  
    const button = document.createElement('button');
    button.textContent = 'Select Option';
    dropdown.appendChild(button);
  
    const list = document.createElement('ul');
    list.className = 'dropdown-menu';
  
    options.forEach((option) => {
      const item = document.createElement('li');
      item.textContent = option.label;
      item.addEventListener('click', () => onSelect(option.value));
      list.appendChild(item);
    });
  
    dropdown.appendChild(list);
  
    button.addEventListener('click', () => {
      list.classList.toggle('show');
    });
  
    return dropdown;
  };
  
  export default Dropdown;
  