/*Слайдер*/
var slideIndex = 1;
showDivs(slideIndex, true);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n, timeout = false) {
    var i;
    var mySlides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dots");
    if (n > mySlides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = mySlides.length;
    }
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].firstChild.className = dots[i].firstChild.className.replace(" active", "");
    }
    mySlides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].firstChild.className += " active";
    if (timeout) {
        setInterval(function () {
            slideIndex++;
            if (slideIndex > mySlides.length) {
                slideIndex = 1;
            }
            showDivs(true);
        }, 3000);
    }
}
