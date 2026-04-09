const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});

