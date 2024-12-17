const Modal = ({ title, content, onClose }) => {
    const modal = document.createElement('div');
    modal.className = 'modal';
  
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.addEventListener('click', onClose);
  
    const dialog = document.createElement('div');
    dialog.className = 'modal-dialog';
  
    const header = document.createElement('div');
    header.className = 'modal-header';
    const heading = document.createElement('h3');
    heading.textContent = title;
    header.appendChild(heading);
  
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close';
    closeButton.textContent = '×';
    closeButton.addEventListener('click', onClose);
    header.appendChild(closeButton);
  
    const body = document.createElement('div');
    body.className = 'modal-body';
    body.appendChild(content);
  
    dialog.appendChild(header);
    dialog.appendChild(body);
  
    modal.appendChild(overlay);
    modal.appendChild(dialog);
  
    document.body.appendChild(modal);
  
    return modal;
  };
  
  export default Modal;
  