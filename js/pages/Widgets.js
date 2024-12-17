import Dropdown from '../components/Dropdown.mjs';
import Lightbox from '../components/Lightbox.mjs';
import Sightbox from '../components/Sightbox.mjs';
import Modal from '../components/Modal.mjs';
import Snackbar from '../components/Snackbar.mjs';
import FileUpload from '../components/FileUpload.mjs';
import Stepper from '../components/Stepper.mjs';
import TicketCard from '../components/TicketCard.mjs';
import MerchCard from '../components/MerchCard.mjs';
import EventTimeline from '../components/EventTimeline.mjs';
import Rating from '../components/Rating.mjs';
import Carousel from '../components/Carousel.mjs';
import Accordion from '../components/Accordion.mjs';
import Countdown from '../components/Countdown.mjs';
import Tooltip from '../components/Tooltip.mjs';
import Toast from '../components/Toast.mjs';
import ContextMenu from '../components/ContextMenu.mjs';
import ToggleSwitch from '../components/ToggleSwitch.mjs';
import Breadcrumb from '../components/Breadcrumb.mjs';
import Pagination from '../components/Pagination.mjs';
import BookingForm from '../components/BookingForm.mjs';
import ReviewItem from '../components/ReviewItem.mjs';
import PlaceCard from '../components/PlaceCard.mjs';
import VideoPlayer from '../components/VideoPlayer.mjs';
import AudioPlayer from '../components/AudioPlayer.mjs';
import Gallery from '../components/Gallery.mjs';
import LoadingSpinner from '../components/LoadingSpinner.mjs';
import SearchBar from '../components/SearchBar.mjs';
import FilterPanel from '../components/FilterPanel.mjs';
import InputField from '../components/InputField.mjs';


const Widgets = async () => {
  const WidgetsContainer = document.createElement('div');
  WidgetsContainer.className = 'widgets-page';

  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];
  const onOptionChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };

  const dropdown = Dropdown(dropdownOptions, onOptionChange);

  WidgetsContainer.appendChild(dropdown);


  // Create the carousel with a set of images
  const images = [
    'https://via.placeholder.com/800x400?text=Image+1',
    'https://i.pinimg.com/736x/d3/1f/cd/d31fcd7ba6ce4b5b86a8f95b58cbcc9d.jpg',
    'https://via.placeholder.com/800x400?text=Image+3',
  ];


  const openLightbox = () => {
    Lightbox(images, 0); // Open the lightbox with the first image
  };
  // Example: Create a button to open the lightbox
  const openButton = document.createElement('button');
  openButton.textContent = 'Open Lightbox';
  openButton.addEventListener('click', openLightbox);

  // Append the carousel to the Contact container
  WidgetsContainer.appendChild(openButton);
  
  // Create a button to open the Sightbox
  const opensButton = document.createElement('button');
  opensButton.textContent = 'Open Sightbox';
  
  opensButton.addEventListener('click', () => {
    // Open the Sightbox with an image when the button is clicked
    Sightbox('https://via.placeholder.com/800', 'image');
  });

  // Append the button to the Search container
  WidgetsContainer.appendChild(opensButton);

  // Create a button to trigger the modal
  const showmodalbutton = document.createElement('button');
  showmodalbutton.textContent = 'Show Modal';
  showmodalbutton.className = 'show-modal-button';

  // Attach the click event to show the modal
  showmodalbutton.addEventListener('click', () => {
    const content = document.createElement('p');
    content.textContent = 'This is the modal content.';

    const modal = Modal({
      title: 'Example Modal',
      content,
      onClose: () => modal.remove(),
    });
  });

  WidgetsContainer.appendChild(showmodalbutton);

  const snack = Snackbar("snack", 3000);

  WidgetsContainer.appendChild(snack);

 
    const handleFileUpload = (file) => {
      console.log('Uploaded file:', file.name);
      // You can upload the file to your server here
    };
  
    const fileUpload = FileUpload(handleFileUpload);
    WidgetsContainer.appendChild(fileUpload);
  
    const steps = ['Select Ticket', 'Enter Details', 'Confirm'];
    let currentStep = 0;
  
    const handleStepChange = (step) => {
      currentStep = step;
      console.log('Current Step:', steps[currentStep]);
    };
  
    const stepper = Stepper(steps, currentStep, handleStepChange);
    WidgetsContainer.appendChild(stepper);


    const tickets = [
      { title: 'Concert', price: 50 },
      { title: 'Workshop', price: 30 },
    ];
  
    tickets.forEach((ticket) => {
      const card = TicketCard({
        ...ticket,
        onClick: () => alert(`You selected: ${ticket.title}`),
      });
      WidgetsContainer.appendChild(card);
    });
  

    const merchItems = [
      { name: 'T-Shirt', price: 20, image: 'https://via.placeholder.com/150' },
      { name: 'Mug', price: 10, image: 'https://via.placeholder.com/150' },
    ];
  
    merchItems.forEach((item) => {
      const card = MerchCard({
        ...item,
        onBuy: () => alert(`You purchased: ${item.name}`),
      });
      WidgetsContainer.appendChild(card);
    });


    const events = [
      { time: '10:00 AM', description: 'Opening Ceremony' },
      { time: '12:00 PM', description: 'Keynote Speech' },
      { time: '2:00 PM', description: 'Workshops' },
    ];
  
    const timeline = EventTimeline(events);
    WidgetsContainer.appendChild(timeline);
  

    const handleRating = (rating) => {
      console.log(`User rated: ${rating} stars`);
    };
  
    const rating = Rating(3, 5, handleRating);
    WidgetsContainer.appendChild(rating);
  

    const imiges = [
      'https://via.placeholder.com/300x200',
      'https://via.placeholder.com/300x200/FF0000',
      'https://via.placeholder.com/300x200/00FF00',
    ];
  
    const carousel = Carousel(imiges);
    WidgetsContainer.appendChild(carousel);
  
    const sections = [
      { title: 'What is this event?', content: document.createTextNode('This is an example event.') },
      { title: 'How to register?', content: document.createTextNode('You can register through the registration form.') },
      { title: 'What is the refund policy?', content: document.createTextNode('Refunds are not available.') },
    ];
  
    const accordion = Accordion(sections);
    WidgetsContainer.appendChild(accordion);
  
  const eventEndDate = new Date(Date.now() + 3600000); // 1 hour from now
  const countdown = Countdown(eventEndDate, () => {
    alert('Event has ended!');
  });

  WidgetsContainer.appendChild(countdown);

  const tooltip = Tooltip('This is a helpful tooltip!');
  WidgetsContainer.appendChild(tooltip);

  const tootltipbutton = document.createElement('button');
  tootltipbutton.textContent = 'Create Event';
  tootltipbutton.onclick = () => Toast('Event created successfully!', 'success');

  WidgetsContainer.appendChild(tootltipbutton);


  const contextmenubutton = document.createElement('button');
  contextmenubutton.textContent = 'Right Click Me';

  contextmenubutton.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    const menu = ContextMenu([
      { label: 'Edit', action: () => alert('Edit clicked') },
      { label: 'Delete', action: () => alert('Delete clicked') },
    ]);

    menu.style.top = `${event.clientY}px`;
    menu.style.left = `${event.clientX}px`;
    document.body.appendChild(menu);
  });

  WidgetsContainer.appendChild(contextmenubutton);



  const label = document.createElement('label');
  label.textContent = 'Enable Notifications: ';

  const toggle = ToggleSwitch((state) => {
    alert(`Notifications are now ${state ? 'enabled' : 'disabled'}`);
  });

  label.appendChild(toggle);
  WidgetsContainer.appendChild(label);

  const breadcrumb = Breadcrumb([
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Event Details', href: '/event/4Z7WNuwYUDe47c' },
  ]);

  WidgetsContainer.appendChild(breadcrumb);

  const paginator = document.createElement('div');
  let currentPage = 1;

  const updatePage = async (page) => {
    currentPage = page;
    paginator.innerHTML = '';
    const pagination = Pagination(currentPage, 10, updatePage);
    paginator.appendChild(pagination);
  };

  updatePage(1);
  WidgetsContainer.appendChild(paginator);



  const bookingform = BookingForm((details) => {
    alert(`Booking Confirmed!\nName: ${details.name}\nDate: ${details.date}\nSeats: ${details.seats}`);
  });

  WidgetsContainer.appendChild(bookingform);


  const reviews = [
    { reviewerName: 'Alice', rating: 5, comment: 'Excellent place!' },
    { reviewerName: 'Bob', rating: 4, comment: 'Great experience.' },
    { reviewerName: 'Charlie', rating: 3, comment: 'It was okay.' },
  ];

  reviews.forEach((review) => {
    WidgetsContainer.appendChild(ReviewItem(review));
  });


  const places = [
    { title: 'Beach Resort', image: 'beach.jpg', description: 'Relax at the beach.', id: 1 },
    { title: 'Mountain Cabin', image: 'mountain.jpg', description: 'Escape to the mountains.', id: 2 },
  ];

  places.forEach((place) => {
    const card = PlaceCard({
      ...place,
      onClick: () => alert(`Viewing details for ${place.title}`),
    });
    WidgetsContainer.appendChild(card);
  });



  const video = VideoPlayer({
    src: '#',
    poster: '#',
  });

  WidgetsContainer.appendChild(video);


  const audio = AudioPlayer({
    src: '#',
  });

  WidgetsContainer.appendChild(audio);



  const imagis = [
    { src: '#', alt: 'Image 1' },
    { src: '#', alt: 'Image 2' },
    { src: '#', alt: 'Image 3' },
    { src: '#', alt: 'Image 4' },
  ];

  const gallery = Gallery(imagis);
  WidgetsContainer.appendChild(gallery);




    const spinna = document.createElement('div');
    spinna.className = 'loading-page';
  
    const spinner = LoadingSpinner();
    WidgetsContainer.appendChild(spinner);
    


    const searchBar = SearchBar({
      placeholder: 'Search for events or places...',
      onSearch: (query) => alert(`Searching for: ${query}`),
    });
  
    WidgetsContainer.appendChild(searchBar);



    const filters = [
      { label: 'All', value: 'all' },
      { label: 'Events', value: 'events' },
      { label: 'Places', value: 'places' },
    ];
  
    const filterPanel = FilterPanel({
      filters,
      onFilter: (value) => alert(`Filtering by: ${value}`),
    });
  
    WidgetsContainer.appendChild(filterPanel);


    const nameField = InputField({
      label: 'Name',
      placeholder: 'Enter your name',
      onInput: (value) => console.log(`Name: ${value}`),
    });
  
    const emailField = InputField({
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      onInput: (value) => console.log(`Email: ${value}`),
    });
  
    WidgetsContainer.appendChild(nameField);
    WidgetsContainer.appendChild(emailField);
  


  return WidgetsContainer;
};

export default Widgets;
