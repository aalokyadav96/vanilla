// TicketCard component
const TicketCard = ({ name, price, quantity, onClick }) => {
  const card = document.createElement('div');
  card.className = 'ticket-card';

  const nameElement = document.createElement('h3');
  nameElement.textContent = name;

  const priceElement = document.createElement('p');
  priceElement.textContent = `Price: $${(price / 100).toFixed(2)}`;

  const availableElement = document.createElement('p');
  availableElement.textContent = `Available: ${quantity}`;

  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.className = 'ticket-quantity-input';
  quantityInput.min = "1";
  quantityInput.max = Math.min(quantity, 5).toString();
  quantityInput.value = "1";

  const button = document.createElement('button');
  button.textContent = 'Buy Ticket';
  button.addEventListener('click', (event) => onClick(event, quantityInput.value));

  card.appendChild(nameElement);
  card.appendChild(priceElement);
  card.appendChild(availableElement);
  card.appendChild(quantityInput);
  card.appendChild(button);

  return card;
};

export default TicketCard;


// const TicketCard = ({ name, price, quantity, onClick }) => {
//   const card = document.createElement('div');
//   card.className = 'ticket-card';

//   const nameElement = document.createElement('h3');
//   nameElement.textContent = name;

//   const priceElement = document.createElement('p');
//   priceElement.textContent = `Price: $${price}`;

//   const availableElement = document.createElement('p');
//   availableElement.textContent = `Available: $${quantity}`;

//   const quantityInput = document.createElement('input');
//   quantityInput.type = 'number';
//   quantityInput.className = 'ticket-quantity-input';
//   quantityInput.min = "1";
//   quantityInput.max = "5";
//   quantityInput.value = "1";

//   const button = document.createElement('button');
//   button.textContent = 'Buy Ticket';
//   button.addEventListener('click', (event) => onClick(event));

//   card.appendChild(nameElement);
//   card.appendChild(priceElement);
//   card.appendChild(availableElement);
//   card.appendChild(quantityInput);
//   card.appendChild(button);

//   return card;
// };

//   export default TicketCard;
  