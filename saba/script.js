let slideIndex = 1;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function updateSlide() {
    slides.style.transition = 'transform 0.5s ease';
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 2;
        slides.style.transition = 'none';
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        setTimeout(() => {
            slideIndex--;
            updateSlide();
        }, 50);
    } else if (slideIndex >= totalSlides - 1) {
        slideIndex = 0;
        slides.style.transition = 'none';
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        setTimeout(() => {
            slideIndex++;
            updateSlide();
        }, 50);
    } else {
        updateSlide();
    }
}

// 初期化
slides.style.transform = `translateX(${-slideIndex * 100}%)`;

// 5秒ごとにスライドを自動的に変更
setInterval(() => {
    changeSlide(1);
}, 5000); // 5000ミリ秒（5秒）
