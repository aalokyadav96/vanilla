const Carousel = (images) => {
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';
  
    // Create the carousel wrapper
    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper';
  
    // Create carousel items (images)
    images.forEach((imageSrc, index) => {
      const item = document.createElement('div');
      item.className = 'carousel-item';
  
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = `Image ${index + 1}`;
  
      item.appendChild(img);
      carouselWrapper.appendChild(item);
    });
  
    // Add carousel wrapper to the container
    carouselContainer.appendChild(carouselWrapper);
  
    // Create navigation buttons
    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-prev-btn';
    prevButton.textContent = '<';
  
    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-next-btn';
    nextButton.textContent = '>';
  
    // Set initial index
    let currentIndex = 0;
  
    // Function to show the current item
    const showItem = (index) => {
      const items = carouselWrapper.querySelectorAll('.carousel-item');
      items.forEach((item, i) => {
        item.style.opacity = (i === index) ? 1 : 0;
        item.style.zIndex = (i === index) ? 1 : 0;
      });
    };
  
    // Navigate to the previous image
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      showItem(currentIndex);
    });
  
    // Navigate to the next image
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      showItem(currentIndex);
    });
  
    // Initially show the first image
    showItem(currentIndex);
  
    // Append buttons to the container
    carouselContainer.appendChild(prevButton);
    carouselContainer.appendChild(nextButton);
  
    return carouselContainer;
  };
  
  export default Carousel;
  