const Gallery = (images) => {
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'gallery';
  
    images.forEach((image) => {
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt || 'Gallery Image';
      img.className = 'gallery-image';
      img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
  
        const lightboxImg = document.createElement('img');
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt || 'Gallery Image';
  
        lightbox.appendChild(lightboxImg);
        lightbox.addEventListener('click', () => lightbox.remove());
        document.body.appendChild(lightbox);
      });
  
      galleryContainer.appendChild(img);
    });
  
    return galleryContainer;
  };
  
  export default Gallery;
  