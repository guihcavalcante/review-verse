let stars =document.querySelectorAll<HTMLElement>('.star')

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s) => {
            s.style.color = 'gray'
        })
        for(let i = 0; i <= index; i++){
            stars[i].style.color = 'gold'
        }
    })
})