let currentSlideIndex = 0;
let autoSlideInterval;

function moveSlide(direction) {
  const items = document.querySelectorAll('.carousel-item');
  const totalSlides = items.length;
  currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function currentSlide(index) {
  currentSlideIndex = index;
  updateCarousel();
}

function updateCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.indicator');
  const container = document.querySelector('.carousel-container');

  items.forEach(item => item.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));

  items[currentSlideIndex].classList.add('active');
  indicators[currentSlideIndex].classList.add('active');

  container.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

function startAutoSlide(interval = 3000) {
  stopAutoSlide(); // Ensure no duplicate intervals are running
  autoSlideInterval = setInterval(() => {
    moveSlide(1); // Move to the next slide automatically
  }, interval);
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
}

// Start the automatic sliding when the page loads
document.addEventListener('DOMContentLoaded', () => {
  startAutoSlide();
});