const Sightbox = (mediaSrc, mediaType = 'image') => {
    const sightbox = document.createElement('div');
    sightbox.className = 'sightbox';
  
    const overlay = document.createElement('div');
    overlay.className = 'sightbox-overlay';
    overlay.addEventListener('click', () => sightbox.remove());
  
    const content = document.createElement('div');
    content.className = 'sightbox-content';
  
    if (mediaType === 'image') {
      const img = document.createElement('img');
      img.src = mediaSrc;
      img.alt = 'Sightbox Image';
      content.appendChild(img);
    } else if (mediaType === 'video') {
      const video = document.createElement('video');
      video.src = mediaSrc;
      video.controls = true;
      content.appendChild(video);
    }
  
    const closeButton = document.createElement('button');
    closeButton.className = 'sightbox-close';
    closeButton.textContent = '×';
    closeButton.addEventListener('click', () => sightbox.remove());
  
    sightbox.appendChild(overlay);
    sightbox.appendChild(content);
    content.appendChild(closeButton);
  
    document.body.appendChild(sightbox);
  
    return sightbox;
  };
  
  export default Sightbox;
  