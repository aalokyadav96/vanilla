const Toast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
  
    document.body.appendChild(toast);
  
    setTimeout(() => toast.remove(), 3000);
  };
  
  export default Toast;
  