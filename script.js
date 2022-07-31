let slideIndex = 1;

function changeDiv(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("badge");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = x.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("highlighted");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].classList.add("highlighted");
}

function currentDiv(n) {
    showDivs(slideIndex = n);

}

showDivs(slideIndex);


