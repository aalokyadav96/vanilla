const FilterPanel = ({ filters, onFilter }) => {
    const panel = document.createElement('div');
    panel.className = 'filter-panel';
  
    filters.forEach(({ label, value }) => {
      const button = document.createElement('button');
      button.textContent = label;
      button.addEventListener('click', () => onFilter(value));
      panel.appendChild(button);
    });
  
    return panel;
  };
  
  export default FilterPanel;
  