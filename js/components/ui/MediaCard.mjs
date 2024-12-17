const MediaCard = ({ mediaType, src, title }) => {
  const card = document.createElement('div');
  card.className = 'media-card';
console.log(mediaType);
  const mediaTitle = document.createElement('h4');
  mediaTitle.className = 'media-title';
  mediaTitle.textContent = title;

  let mediaElement;

  if (mediaType === 'image') {
    mediaElement = document.createElement('img');
    mediaElement.src = src;
    mediaElement.alt = title;
    mediaElement.className = 'media-image';
  } else if (mediaType === 'video') {
    mediaElement = document.createElement('video');
    mediaElement.src = src;
    mediaElement.controls = true;
    mediaElement.className = 'media-video';
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Unsupported media type';
    card.appendChild(errorMessage);
    return card;
  }

  card.appendChild(mediaElement);
  card.appendChild(mediaTitle);
  return card;
};

export default MediaCard;
