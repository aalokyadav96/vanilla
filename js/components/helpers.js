function renderComponent(component, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(component);
    }
  }

export {renderComponent};