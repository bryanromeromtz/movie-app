import Checker from './Checker.js';
import Carousel from './Carousel.js';
import Cards from './Cards.js';

window.addEventListener("DOMContentLoaded", function () {
    // Instancia de las clases
    const carousel = new Carousel();
    const cards = new Cards();
    // llamado a las funciones de las clases
    carousel.showCarouselInfo();
    cards.getMoviesExample();


    const btn = document.getElementById("btn-search");
    const url = "";
    const inputValue = document.getElementById("my-input");
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        const checker = new Checker();
        checker.verifyInput(inputValue);
    });
});

window.addEventListener("scroll", function () {
    let windowScroll = document.getElementById("window-scroll");
    let scroll = window.scrollY;
    if (scroll > 80) {
        windowScroll.classList.add("fixed-top");
        windowScroll.classList.add("scale-in-top");
    } else {
        windowScroll.classList.remove("fixed-top");
        windowScroll.classList.remove("scale-in-top");
    }
});



