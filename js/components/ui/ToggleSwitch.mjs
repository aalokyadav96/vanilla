const ToggleSwitch = (onToggle) => {
    const toggle = document.createElement('label');
    toggle.className = 'toggle-switch';
  
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.addEventListener('change', () => onToggle(input.checked));
  
    const slider = document.createElement('span');
    slider.className = 'slider';
  
    toggle.appendChild(input);
    toggle.appendChild(slider);
  
    return toggle;
  };
  
  export default ToggleSwitch;
  