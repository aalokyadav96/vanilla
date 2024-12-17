const Footer = () => {
    const footer = document.createElement('footer');
    footer.className = 'footer';
  
    const text = document.createElement('p');
    text.textContent = '© 2024 My WebApp. All rights reserved.';
  
    footer.appendChild(text);
    return footer;
  };
  
  export default Footer;
  