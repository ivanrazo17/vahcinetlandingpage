document.addEventListener('DOMContentLoaded', () => {

    const headerContainer = document.querySelector('.header-container');
    const leftAisleContainer = document.querySelector('.left-aisle-container');
    const upperContentContainer = document.querySelector('.upper-content-container');
    const lowerContentContainer = document.querySelector('.lower-content-container');
    const rightAisleContainer = document.querySelector('.right-aisle-container');
    const footerContainer = document.querySelector('.footer-container');


    const slideInFromLeft = 'slide-in-left';
    const slideInFromRight = 'slide-in-right';
    const slideInFromTop = 'slide-in-top';
    const slideInFromBottom = 'slide-in-bottom';

    function triggerAnimations() {
        setTimeout(() => {
            headerContainer.classList.add(slideInFromLeft);
            headerContainer.style.opacity = '1'; 
        }, 0); 
        
        setTimeout(() => {
            footerContainer.classList.add(slideInFromRight);
            footerContainer.style.opacity = '1'; 
        }, 0); 

        setTimeout(() => {
            upperContentContainer.classList.add(slideInFromTop);
            upperContentContainer.style.opacity = '1'; 
        }, 1000);

        setTimeout(() => {
            lowerContentContainer.classList.add(slideInFromBottom);
            lowerContentContainer.style.opacity = '1'; 
        }, 1000); 

        setTimeout(() => {
            rightAisleContainer.classList.add(slideInFromRight);
            rightAisleContainer.style.opacity = '1'; 
        }, 1500); 

        setTimeout(() => {
            leftAisleContainer.classList.add(slideInFromLeft);
            leftAisleContainer.style.opacity = '1';
        }, 1500); 
    }

    triggerAnimations();
});
