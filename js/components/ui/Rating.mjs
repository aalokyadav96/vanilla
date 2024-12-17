const Rating = (initialRating = 0, maxStars = 5, onRate = (rating) => {}) => {
    const container = document.createElement('div');
    container.className = 'rating';
  
    for (let i = 1; i <= maxStars; i++) {
      const star = document.createElement('span');
      star.className = `star ${i <= initialRating ? 'selected' : ''}`;
      star.textContent = '★';
  
      star.addEventListener('click', () => {
        Array.from(container.children).forEach((child, index) => {
          child.classList.toggle('selected', index < i);
        });
        onRate(i);
      });
  
      container.appendChild(star);
    }
  
    return container;
  };
  
  export default Rating;
  