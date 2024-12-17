const Tooltip = (text) => {
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
  
    const wrapper = document.createElement('div');
    wrapper.className = 'tooltip-wrapper';
    wrapper.textContent = '?'; // Icon or trigger text
    wrapper.appendChild(tooltip);
  
    return wrapper;
  };
  
  export default Tooltip;
  