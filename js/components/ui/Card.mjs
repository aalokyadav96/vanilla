const Card = ({ title, content, image, actions = [] }) => {
  const card = document.createElement('div');
  card.className = 'card';

  if (image) {
    const img = document.createElement('img');
    img.src = image;
    img.alt = title;
    img.className = 'card-image';
    card.appendChild(img);
  }

  const body = document.createElement('div');
  body.className = 'card-body';

  const titleElement = document.createElement('h3');
  titleElement.textContent = title;
  body.appendChild(titleElement);

  const contentElement = document.createElement('div');
  contentElement.innerHTML = content;
  body.appendChild(contentElement);

  if (actions.length > 0) {
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'card-actions';

    actions.forEach(({ text, onClick }) => {
      const button = document.createElement('button');
      button.textContent = text;
      button.className = 'card-action-btn';
      button.addEventListener('click', onClick);
      actionsContainer.appendChild(button);
    });

    body.appendChild(actionsContainer);
  }

  card.appendChild(body);
  return card;
};

export default Card;

// const Card = ({ title, content }) => {
//     const card = document.createElement('div');
//     card.className = 'card';
//     card.innerHTML = `
//       <h3>${title}</h3>
//       <p>${content}</p>
//     `;
//     return card;
//   };
  
//   export default Card;
  