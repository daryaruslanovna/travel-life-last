import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.imgSection1', {
    slidesPerView: 1.2,
    spaceBetween: 25,
    loop: true,
    speed: 1000,
    centeredSlides: true,

    navigation: {
        prevEl: "#chevronLeft",
        nextEl: "#chevronRight"
    },

    breakpoints: {
        1024: {
            slidesPerView: 3
        },
        576: {
            slidesPerView: 2
        }
    }
})