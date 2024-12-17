// Function to create a pagination component
function Pagination(currentPage, totalPages, updatePage) {
  const paginationContainer = document.createElement("div");
  paginationContainer.classList.add("pagination-container");

  // Create "Previous" button
  if (currentPage > 1) {
      const prevButton = document.createElement("button");
      prevButton.textContent = "Previous";
      prevButton.onclick = () => updatePage(currentPage - 1);
      paginationContainer.appendChild(prevButton);
  }

  // Create "Next" button
  if (currentPage < totalPages) {
      const nextButton = document.createElement("button");
      nextButton.textContent = "Next";
      nextButton.onclick = () => updatePage(currentPage + 1);
      paginationContainer.appendChild(nextButton);
  }

  return paginationContainer;
}

  export default Pagination;
  
  /**************** */

// const Pagination = (currentPage, totalPages, onPageChange) => {
//     const container = document.createElement('div');
//     container.className = 'pagination';
  
//     const createButton = (label, page) => {
//       const button = document.createElement('button');
//       button.textContent = label;
//       button.disabled = page === currentPage;
//       button.addEventListener('click', () => onPageChange(page));
//       return button;
//     };
  
//     if (currentPage > 1) container.appendChild(createButton('Previous', currentPage - 1));
//     for (let i = 1; i <= totalPages; i++) {
//       container.appendChild(createButton(i, i));
//     }
//     if (currentPage < totalPages) container.appendChild(createButton('Next', currentPage + 1));
  
//     return container;
//   };
  
//   export default Pagination;
  