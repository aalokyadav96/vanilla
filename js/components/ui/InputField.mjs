const InputField = ({ label, type = 'text', placeholder, onInput }) => {
    const container = document.createElement('div');
    container.className = 'input-field';
  
    if (label) {
      const labelEl = document.createElement('label');
      labelEl.textContent = label;
      container.appendChild(labelEl);
    }
  
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
  
    input.addEventListener('input', (e) => {
      if (onInput) onInput(e.target.value);
    });
  
    container.appendChild(input);
    return container;
  };
  
  export default InputField;
  