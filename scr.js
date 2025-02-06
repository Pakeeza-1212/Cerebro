<script>
    // Select all carousel images
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    // Function to show the next image
    function showNextImage() {
        // Remove the active class from the current image
        images[currentIndex].classList.remove('active');
        
        // Update the index (loop back to the start if at the end)
        currentIndex = (currentIndex + 1) % images.length;
        
        // Add the active class to the next image
        images[currentIndex].classList.add('active');
    }

    // Set an interval to switch images every 3 seconds
    setInterval(showNextImage, 3000);
</script>
