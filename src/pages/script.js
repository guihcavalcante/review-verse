const btnNewReview = document.querySelector('.btn-review'); 
const reviewModal = document.getElementById('review-modal');    
const btnCloseModal = document.getElementById('btn-close-modal'); 

btnNewReview.addEventListener('click', () => {
    reviewModal.style.display = 'flex'; 
});

btnCloseModal.addEventListener('click', () => {
    reviewModal.style.display = 'none'; 
});

let stars = document.querySelectorAll('.star');
let rating = -1;

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        if (rating === index) {
            rating = -1;
        } else {
            rating = index;
        }
        
        stars.forEach((s, i) => {
            if (i <= rating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});
