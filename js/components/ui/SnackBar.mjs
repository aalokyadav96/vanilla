const SnackBar = (message, duration = 3000) => {
    const snackbar = document.createElement('div');
    snackbar.className = 'snackbar';
    snackbar.textContent = message;
  
    document.body.appendChild(snackbar);
  
    setTimeout(() => {
      snackbar.classList.add('hide');
      setTimeout(() => snackbar.remove(), 500);
    }, duration);
  
    return snackbar;
  };
  
  export default SnackBar;
  