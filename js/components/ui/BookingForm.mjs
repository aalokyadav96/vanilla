const BookingForm = (onSubmit) => {
    const form = document.createElement('form');
    form.className = 'booking-form';
  
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Your Name';
    nameInput.required = true;
  
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.required = true;
  
    const seatsInput = document.createElement('input');
    seatsInput.type = 'number';
    seatsInput.placeholder = 'Number of Seats';
    seatsInput.min = 1;
    seatsInput.required = true;
  
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Book Now';
  
    form.append(nameInput, dateInput, seatsInput, submitButton);
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const bookingDetails = {
        name: nameInput.value,
        date: dateInput.value,
        seats: seatsInput.value,
      };
      onSubmit(bookingDetails);
      form.reset();
    });
  
    return form;
  };
  
  export default BookingForm;
  