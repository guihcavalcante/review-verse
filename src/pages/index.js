let stars = document.querySelectorAll('.star');
let rating = -1;
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        if (rating === index) {
            rating = -1;
        }
        else {
            rating = index;
        }
        stars.forEach((s, i) => {
            if (i <= rating) {
                s.classList.add('active');
            }
            else {
                s.classList.remove('active');
            }
            s.style.color = 'gray';
        });
        for (let i = 0; i <= index; i++) {
            stars[i].style.color = '#a855f7';
        }
    });
});
export {};
