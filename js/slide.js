// script.js
let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const indicatorsContainer = document.querySelector('.indicators');

// Create indicators
for (let i = 0; i < totalSlides; i++) {
  const indicator = document.createElement('button');
  indicator.addEventListener('click', () => goToSlide(i));
  indicatorsContainer.appendChild(indicator);
}

const indicators = indicatorsContainer.querySelectorAll('button');
updateIndicators();

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  const slidesContainer = document.querySelector('.slides');
  slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  updateIndicators();
}

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
}

// Auto slide
setInterval(() => changeSlide(1), 5000);
