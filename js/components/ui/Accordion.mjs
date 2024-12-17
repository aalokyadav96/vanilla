const Accordion = (sections = []) => {
    const container = document.createElement('div');
    container.className = 'accordion';
  
    sections.forEach(({ title, content }) => {
      const section = document.createElement('div');
      section.className = 'accordion-section';
  
      const header = document.createElement('div');
      header.className = 'accordion-header';
      header.textContent = title;
  
      const body = document.createElement('div');
      body.className = 'accordion-body';
      body.style.display = 'none';
      body.appendChild(content);
  
      header.addEventListener('click', () => {
        const isVisible = body.style.display === 'block';
        body.style.display = isVisible ? 'none' : 'block';
      });
  
      section.appendChild(header);
      section.appendChild(body);
      container.appendChild(section);
    });
  
    return container;
  };
  
  export default Accordion;
  