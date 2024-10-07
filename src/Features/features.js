document.addEventListener('DOMContentLoaded', () => {
    // Select all h1, h2 elements, and both iconRight elements
    const headers = document.querySelectorAll('h1');
    const subHeaders = document.querySelectorAll('h2');
    const iconRight1 = document.querySelector('#iconRight1'); // First icon
    const iconRight2 = document.querySelector('#iconRight2'); // Second icon
    const iconLeft = document.querySelector('#iconLeft');
    
    // Define the animation class for sliding effects
    const slideInFromLeft = 'slide-in-left';
    const slideInFromRight = 'slide-in-right';
    const slideInFromTop = 'slide-in-top';

    // Function to trigger animations
    function triggerAnimations() {
        // Animate all h1 elements simultaneously
        headers.forEach((header) => {
            header.classList.add(slideInFromTop);
            header.style.opacity = '1'; // Show after animation
        });

        // Animate all h2 elements simultaneously
        subHeaders.forEach((subHeader) => {
            subHeader.classList.add(slideInFromTop);
            subHeader.style.opacity = '1'; // Show after animation
        });

        // Animate both iconRight elements
        setTimeout(() => {
            iconRight1.classList.add(slideInFromRight);
            iconRight1.style.opacity = '1'; // Show after animation
        }, 1000); // Start after 1 second delay

        setTimeout(() => {
            iconRight2.classList.add(slideInFromRight);
            iconRight2.style.opacity = '1'; // Show after animation
        }, 1000); // Slightly staggered animation for the second icon

        // Animate iconLeft
        setTimeout(() => {
            iconLeft.classList.add(slideInFromLeft);
            iconLeft.style.opacity = '1'; // Show after animation
        }, 1000);
    }

    // Call the function to trigger animations
    triggerAnimations();
});
