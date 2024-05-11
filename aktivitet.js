

window.onload = function () {
    var overlay = document.querySelector('.form-overlay');
    overlay.style.height = window.innerHeight + 'px';
};
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".Gallery1-slider", {
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: { slidesPerView: 1, },
            768: { slidesPerView: 3, },
            991: { slidesPerView: 4, }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".Diving-slider", {
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
