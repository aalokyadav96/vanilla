const PlaceCard = ({ title, image, description, onClick }) => {
    const card = document.createElement('div');
    card.className = 'place-card';
  
    const img = document.createElement('img');
    img.src = image;
    img.alt = title;
  
    const titleEl = document.createElement('h3');
    titleEl.textContent = title;
  
    const desc = document.createElement('p');
    desc.textContent = description;
  
    const button = document.createElement('button');
    button.textContent = 'View Details';
    button.addEventListener('click', onClick);
  
    card.append(img, titleEl, desc, button);
    return card;
  };
  
  export default PlaceCard;
  