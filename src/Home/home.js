document.addEventListener('DOMContentLoaded', () => {
    // Select the elements
    const headerContainer = document.querySelector('.header-container');
    const leftAisleContainer = document.querySelector('.left-aisle-container');
    const upperContentContainer = document.querySelector('.upper-content-container');
    const lowerContentContainer = document.querySelector('.lower-content-container');
    const rightAisleContainer = document.querySelector('.right-aisle-container');
    const footerContainer = document.querySelector('.footer-container');

    // Define the animation class for sliding effects
    const slideInFromLeft = 'slide-in-left';
    const slideInFromRight = 'slide-in-right';
    const slideInFromTop = 'slide-in-top';
    const slideInFromBottom = 'slide-in-bottom';

    // Function to trigger animations
    function triggerAnimations() {
        setTimeout(() => {
            headerContainer.classList.add(slideInFromLeft);
            headerContainer.style.opacity = '1'; // Show after animation
        }, 0); 
        
        setTimeout(() => {
            footerContainer.classList.add(slideInFromRight);
            footerContainer.style.opacity = '1'; // Show after animation
        }, 0); 

        setTimeout(() => {
            upperContentContainer.classList.add(slideInFromTop);
            upperContentContainer.style.opacity = '1'; // Show after animation
        }, 1000);

        setTimeout(() => {
            lowerContentContainer.classList.add(slideInFromBottom);
            lowerContentContainer.style.opacity = '1'; // Show after animation
        }, 1000); 

        setTimeout(() => {
            rightAisleContainer.classList.add(slideInFromRight);
            rightAisleContainer.style.opacity = '1'; // Show after animation
        }, 1500); 

        setTimeout(() => {
            leftAisleContainer.classList.add(slideInFromLeft);
            leftAisleContainer.style.opacity = '1'; // Show after animation
        }, 1500); 
    }

    // Call the function to trigger animations
    triggerAnimations();
});
