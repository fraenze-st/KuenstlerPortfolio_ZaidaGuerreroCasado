// const navSlide = () => {
const burger = document.querySelector(".navbar-burger");
const nav = document.querySelector('.navbar-links');
const navLinks = document.querySelectorAll('.nb-right');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = ''
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
//             }
//         });

//     });
// }


// navSlide();

// $('.navbar-burger').click(function () {
//     if ($(".navbar-links").is(':visible')) {
//         $('.dropdown-content').slideUp();
//     }
//     $(".navbar-links").slideToggle();
// });

$('.navbar-burger').click(function () {
    $('navbar-links').slideToggle();
});