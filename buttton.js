document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery-container');
  const moveButton = document.querySelector('.move-btn');
  let scrollPosition = 0;

  moveButton.addEventListener('click', () => {
    const containerWidth = galleryContainer.clientWidth;
    const scrollWidth = galleryContainer.scrollWidth;
    scrollPosition += containerWidth;

    if (scrollPosition >= scrollWidth) {
      scrollPosition = 0; // Reset scroll position if we reach the end
    }

    galleryContainer.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  });
});
