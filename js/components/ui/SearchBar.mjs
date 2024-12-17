const SearchBar = ({ placeholder = 'Search...', onSearch }) => {
    const container = document.createElement('div');
    container.className = 'search-bar';
  
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
  
    const button = document.createElement('button');
    button.textContent = 'Search';
  
    button.addEventListener('click', () => {
      if (onSearch) onSearch(input.value);
    });
  
    container.appendChild(input);
    container.appendChild(button);
  
    return container;
  };
  
  export default SearchBar;
  