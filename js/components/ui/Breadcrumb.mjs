const Breadcrumb = (paths) => {
    const breadcrumb = document.createElement('nav');
    breadcrumb.className = 'breadcrumb';
  
    paths.forEach((path, index) => {
      const link = document.createElement('a');
      link.textContent = path.label;
      link.href = path.href;
  
      if (index < paths.length - 1) {
        link.className = 'breadcrumb-link';
        link.addEventListener('click', (event) => {
          event.preventDefault();
          history.pushState({}, '', path.href);
          const routeChangeEvent = new CustomEvent('routeChange', { detail: { route: path.href } });
          window.dispatchEvent(routeChangeEvent);
        });
      } else {
        link.className = 'breadcrumb-current';
      }
  
      breadcrumb.appendChild(link);
      if (index < paths.length - 1) {
        const separator = document.createElement('span');
        separator.textContent = ' > ';
        breadcrumb.appendChild(separator);
      }
    });
  
    return breadcrumb;
  };
  
  export default Breadcrumb;
  