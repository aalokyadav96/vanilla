const Countdown = (endDate, onEnd = () => {}) => {
    const container = document.createElement('div');
    container.className = 'countdown';
  
    const updateCountdown = () => {
      const now = new Date();
      const distance = endDate - now;
  
      if (distance <= 0) {
        clearInterval(interval);
        onEnd();
        container.textContent = 'Time is up!';
        return;
      }
  
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      container.textContent = `${hours}h ${minutes}m ${seconds}s`;
    };
  
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
  
    return container;
  };
  
  export default Countdown;
  