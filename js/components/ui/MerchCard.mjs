// MerchCard component
const MerchCard = ({ name, price, image, stock, onBuy, onEdit, onDelete, isCreator, isLoggedIn }) => {
  const card = document.createElement('div');
  card.className = 'merch-card';

  const img = document.createElement('img');
  img.src = image;
  img.alt = name;

  const nameElement = document.createElement('h3');
  nameElement.textContent = name;

  const priceElement = document.createElement('p');
  priceElement.textContent = `Price: $${(price / 100).toFixed(2)}`;

  const stockElement = document.createElement('p');
  stockElement.textContent = `Available: ${stock}`;

  const actions = document.createElement('div');
  actions.className = 'merch-actions';

  if (isCreator) {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', onEdit);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', onDelete);

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
  } else {
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.min = '1';
    quantityInput.max = '6';
    quantityInput.value = '1';

    if (isLoggedIn) {
      const buyButton = document.createElement('button');
      buyButton.textContent = 'Buy';
      buyButton.addEventListener('click', () => onBuy(quantityInput.value));

      actions.appendChild(quantityInput);
      actions.appendChild(buyButton);
    }
  }

  card.appendChild(img);
  card.appendChild(nameElement);
  card.appendChild(priceElement);
  card.appendChild(stockElement);
  card.appendChild(actions);

  return card;
};

export default MerchCard;