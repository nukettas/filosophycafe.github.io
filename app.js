const section = document.getElementById("showcase");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToSection();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToSection();
});

slideShow();

function setBgToSection() {
  section.style.backgroundImage = slides[activeSlide].style.backgroundImage;

  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");

  slideShow();
}

function slideShow() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  activeSlide++;
  if (activeSlide > slides.length) {
    activeSlide = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[activeSlide - 1].style.display = "block";
  slides[activeSlide - 1].className += " active";
  setTimeout(slideShow, 4000);
}

const mainMenu = document.querySelector(".nav-container");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .nav-container li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
