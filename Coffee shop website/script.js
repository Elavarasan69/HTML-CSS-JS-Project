const menuOpenButton = document.getElementById("menu-open-button")
const menuCloseButton = document.getElementById("menu-close-button")
const navLinks = document.querySelectorAll(".nav-menu .nav-link")

menuOpenButton.addEventListener("click",()=>{
    // Toggle mobile menu visibiliity
    document.body.classList.toggle("show-mobile-menu")
})

// close menu when the close button is clicked
menuCloseButton.addEventListener("click",()=>menuOpenButton.click())

// close menu when the nav link is clicked
navLinks.forEach(link =>{
    link.addEventListener("click",() => menuOpenButton.click())
})

// Swiper code for sliding image
const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //responsive breakpoints
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });