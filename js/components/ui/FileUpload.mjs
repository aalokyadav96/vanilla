const FileUpload = (onUpload = (file) => {}) => {
    const container = document.createElement('div');
    container.className = 'file-upload';
  
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.className = 'file-input';
  
    input.addEventListener('change', () => {
      const file = input.files[0];
      if (file) {
        onUpload(file);
      }
    });
  
    container.appendChild(input);
    return container;
  };
  
  export default FileUpload;
  