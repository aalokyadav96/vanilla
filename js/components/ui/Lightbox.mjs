const Lightbox = (images, initialIndex = 0) => {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
  
    // Create the lightbox content
    const content = document.createElement('div');
    content.className = 'lightbox-content';
  
    // Create the image element
    const img = document.createElement('img');
    img.src = images[initialIndex];
    img.alt = 'Lightbox Image';
    content.appendChild(img);
  
    // Function to update image
    const updateImage = (index) => {
      img.src = images[index];
    };
  
    // Create navigation buttons
    const prevButton = document.createElement('button');
    prevButton.className = 'lightbox-prev-btn';
    prevButton.textContent = 'Prev';
    const nextButton = document.createElement('button');
    nextButton.className = 'lightbox-next-btn';
    nextButton.textContent = 'Next';
  
    // Set initial index
    let currentIndex = initialIndex;
  
    // Navigate to the previous image
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      updateImage(currentIndex);
    });
  
    // Navigate to the next image
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      updateImage(currentIndex);
    });
  
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.className = 'lightbox-close-btn';
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
      lightbox.remove();
    });
  
    // Append elements to the content
    content.appendChild(prevButton);
    content.appendChild(nextButton);
    content.appendChild(closeButton);
    
    // Append the content to the lightbox
    lightbox.appendChild(content);
  
    // Append the lightbox to the body or any container
    document.body.appendChild(lightbox);
  };
  
  export default Lightbox;