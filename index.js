document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".home-slider", {
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 7000,
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

window.onload = function () {
    var overlay = document.querySelector('.form-overlay');
    overlay.style.height = window.innerHeight + 'px';
};
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".room-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
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
            768: { slidesPerView: 2, },
            991: { slidesPerView: 3, }
        }
    });
});

window.onload = function () {
    var overlay = document.querySelector('.form-overlay');
    overlay.style.height = window.innerHeight + 'px';
};
const galleryImages = [
    "Galler1.jpg",
    "Gallery2.jpeg",
    "Gallery33.png",
    "Gallery44.jpeg",
    // Add more image URLs as needed
];

function addImagesToGallery(images) {
    const gallerySection = document.querySelector(".Gallery");

    images.forEach(imageUrl => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = "Gallery Image";
        imgElement.classList.add("gallery-image");

        // Create a container div for each image
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        imageContainer.appendChild(imgElement);

        gallerySection.appendChild(imageContainer);
    });
}

addImagesToGallery(galleryImages);


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