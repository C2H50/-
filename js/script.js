var modal = document.getElementById("nav");
var btn = document.getElementById("nav-toggle");
var close = document.getElementById("nav-close");
var wrapper = document.getElementById("wrapper");
var back = document.getElementById("back");
var fonOne = document.getElementById("back-1");
var btnTwo = document.getElementById("nav-toggle-1");
btn.onclick = function () {
	modal.style.display = "block";
	back.style.display = "none";
	wrapper.classList.add("fon");
}
btnTwo.onclick = function () {
	modal.style.display = "block";
	fonOne.style.display = "none";
	wrapper.classList.add("fon");
}
close.onclick = function () {
	modal.style.display = "none";
	back.style.display = "block";
	back.style.position = "absolute";
	back.style.top = "0";
	fonOne.style.display = "block";
	fonOne.style.position = "absolute";
	fonOne.style.top = "0";
	wrapper.classList.remove("fon");
}
// Бургер меню
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

/////////////////
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}