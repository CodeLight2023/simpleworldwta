var header = document.querySelector("#header");
var menuBtn = document.querySelector(".menu-btn i");
var preloader = document.querySelector('.preloader');
window.addEventListener('load', function() {
    preloader.classList.add('fade-out-animation');

    preloader.addEventListener("transitionend", () =>{
        document.body.removeChild(document.querySelector(".preloader"));
    });
});
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",  window.scrollY > 0)
});
menuBtn.addEventListener("click", function() {
    header.classList.toggle('active');
    menuBtn.classList.toggle('fa-xmark');
})