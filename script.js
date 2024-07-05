

// for my hamburger menu
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


// header scrollup
// script.js

// let lastScrollY = window.scrollY;
// const header = document.getElementById('header');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > lastScrollY) {
//         // Scrolling down
//         header.style.transform = 'translateY(-100%)';
//     } else {
//         // Scrolling up
//         header.style.transform = 'translateY(0)';
//     }
//     lastScrollY = window.scrollY;
// });



