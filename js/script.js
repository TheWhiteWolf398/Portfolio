document.addEventListener("DOMContentLoaded", function () {
    const mainText = "I'm Abhishek Mukherjee.";
    const subText = "A Full Stack Developer.";
    let index = 0;
    let subIndex = 0;
    
    function typeMainText() {
        if (index < mainText.length) {
            document.getElementById("typing-text").innerHTML = mainText.substring(0, index + 1) + '<span class="cursor"></span>';
            index++;
            setTimeout(typeMainText, 100); // Adjust speed here
        } else {
            typeSubText();
        }
    }

    function typeSubText() {
        if (subIndex < subText.length) {
            document.getElementById("typing-subtext").innerHTML = subText.substring(0, subIndex + 1) + '<span class="cursor"></span>';
            subIndex++;
            setTimeout(typeSubText, 100);
        }
    }

    typeMainText();
});


$(document).ready(function () {
    var $carousel = $('.carousel');
    $carousel.slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true, // Enable dots
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
        customPaging: function (slider, i) {
            return `<button>${i + 1}</button>`; // Replace dots with numbers
        }
    });

    function updateCounter(event, slick, currentSlide) {
        $('.carousel-counter').text(`Slide ${currentSlide + 1} of ${slick.slideCount}`);
    }

    $carousel.on('init reInit afterChange', updateCounter);
});
