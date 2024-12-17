const ReviewItem = ({ reviewerName, rating, comment }) => {
    const container = document.createElement('div');
    container.className = 'review-item';
  
    const name = document.createElement('h4');
    name.textContent = reviewerName;
  
    const stars = document.createElement('div');
    stars.className = 'review-rating';
    stars.textContent = '★'.repeat(rating) + '☆'.repeat(5 - rating);
  
    const reviewComment = document.createElement('p');
    reviewComment.textContent = comment;
  
    container.append(name, stars, reviewComment);
    return container;
  };
  
  export default ReviewItem;
  