let slideIndex = 0;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let slideContainer = document.querySelector(".slides");
    if (n > slides.length - 1) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    slideContainer.className = "slides";
    slideContainer.classList.add("slide" + slideIndex);


}
