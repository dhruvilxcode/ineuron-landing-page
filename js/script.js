const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    slidesPerView: "auto",
    width: 350,
    autoHeight: true,
    // centeredSlides: true,
    spaceBetween: 50,

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },



    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: "auto",
            spaceBetween: 40
        }
    }

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

const mobileNav = document.querySelector(".mobile-nav")
const btnMenuOpen = document.querySelector(".link-mobile-menu-btn");
const btnMenuClose = document.querySelector(".btn-close-menu");

btnMenuOpen.addEventListener("click", ()=>{
    mobileNav.style.display = "block";
})

btnMenuClose.addEventListener("click", ()=>{
    mobileNav.style.display = "none";
})