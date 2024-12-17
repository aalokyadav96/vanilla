// Button with custom event handler
function Button(title, id, events = {}) {
    const button = document.createElement('button');
    button.textContent = title;
    button.id = id;
  
    // Add multiple events if needed
    for (const event in events) {
      button.addEventListener(event, events[event]);
    }
  
    button.classList.add('button');
    return button;
  }

  
export {Button};