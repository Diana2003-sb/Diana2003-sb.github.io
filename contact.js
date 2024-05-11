
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: { slidesPerView: 1, },
            768: { slidesPerView: 2, },
            991: { slidesPerView: 3, }
        }
    });
});