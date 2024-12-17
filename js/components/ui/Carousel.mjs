const Carousel = (images = []) => {
    const container = document.createElement('div');
    container.className = 'carousel';
  
    let currentIndex = 0;
  
    const imageElement = document.createElement('img');
    imageElement.src = images[currentIndex];
    container.appendChild(imageElement);
  
    const prevButton = document.createElement('button');
    prevButton.textContent = '❮';
    prevButton.className = 'carousel-button prev';
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      imageElement.src = images[currentIndex];
    });
  
    const nextButton = document.createElement('button');
    nextButton.textContent = '❯';
    nextButton.className = 'carousel-button next';
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.src = images[currentIndex];
    });
  
    container.appendChild(prevButton);
    container.appendChild(nextButton);
  
    return container;
  };
  
  export default Carousel;
  