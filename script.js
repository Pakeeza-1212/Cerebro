// Set up the Intersection Observer to trigger animation when the element comes into view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add class to trigger animation
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, { threshold: 0.5 }); // Element must be 50% in view before the animation triggers

// Target the element to be observed
const target = document.querySelector('.scroll-text');
observer.observe(target);
