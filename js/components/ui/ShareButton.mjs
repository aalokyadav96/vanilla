const ShareButton = (url) => {
    const button = document.createElement('button');
    button.textContent = 'Share';
    button.className = 'share-button';
  
    button.addEventListener('click', async () => {
      try {
        await navigator.share({
          title: document.title,
          text: 'Check this out!',
          url,
        });
        alert('Shared successfully!');
      } catch (err) {
        alert('Sharing failed.');
      }
    });
  
    return button;
  };
  
  export default ShareButton;
  