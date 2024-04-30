document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector('.carousel__prev');
    const nextBtn = document.querySelector('.carousel__next');
    const slider = document.querySelector('.carousel__slider');

    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel__slider__item');

    function showSlide(index) {
        if (index >= items.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = items.length - 1;
        } else {
            currentIndex = index;
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

    showSlide(currentIndex);
});
