$(document).ready(function () {
    console.log("jQuery Loaded!"); // Debugging Log

    if ($.fn.slick) {
        console.log("Slick Carousel Found! Initializing..."); // Debugging Log

        $('.carousel').slick({
            autoplay: true,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        });

        console.log("Slick Initialized!"); // Debugging Log
    } else {
        console.error("Slick Carousel Not Found! Check if slick.min.js is loaded.");
    }
});
