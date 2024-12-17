const EventTimeline = (events = []) => {
    const container = document.createElement('div');
    container.className = 'event-timeline';
  
    events.forEach(({ time, description }) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
  
      const timeElement = document.createElement('span');
      timeElement.className = 'timeline-time';
      timeElement.textContent = time;
  
      const descriptionElement = document.createElement('p');
      descriptionElement.className = 'timeline-description';
      descriptionElement.textContent = description;
  
      item.appendChild(timeElement);
      item.appendChild(descriptionElement);
      container.appendChild(item);
    });
  
    return container;
  };
  
  export default EventTimeline;
  