const Stepper = (steps = [], currentStep = 0, onStepChange = (step) => {}) => {
    const container = document.createElement('div');
    container.className = 'stepper';
  
    steps.forEach((step, index) => {
      const stepElement = document.createElement('div');
      stepElement.className = `step ${index <= currentStep ? 'active' : ''}`;
      stepElement.textContent = step;
  
      stepElement.addEventListener('click', () => {
        if (index <= currentStep) {
          onStepChange(index);
        }
      });
  
      container.appendChild(stepElement);
    });
  
    return container;
  };
  
  export default Stepper;
  