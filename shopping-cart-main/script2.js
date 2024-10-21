document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('customerName').value;
    const review = document.getElementById('customerReview').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;

    const reviewsDiv = document.getElementById('reviews');
    const newReview = document.createElement('div');
    newReview.innerHTML = `<strong>${name}</strong> - ${rating} Stars<br>${review}<hr>`;
    
    reviewsDiv.appendChild(newReview);

    // Clear the form
    document.getElementById('reviewForm').reset();
});