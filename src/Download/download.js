document.addEventListener('DOMContentLoaded', () => {

    const downloadContainer = document.querySelector('.download');
    const availableContainer = document.querySelector('.available');
    const iconContainer = document.querySelector('.icon');
    const changelogContainer = document.querySelector('.changelog');

    const slideInFromLeft = 'slide-in-left';
    const slideInFromRight = 'slide-in-right';
    const slideInFromTop = 'slide-in-top';
    const slideInFromBottom = 'slide-in-bottom';

    function triggerAnimations() {
        setTimeout(() => {
            downloadContainer.classList.add(slideInFromLeft);
            downloadContainer.style.opacity = '1';
        }, 0);

        setTimeout(() => {
            availableContainer.classList.add(slideInFromTop);
            availableContainer.style.opacity = '1';
        }, 500);

        

        setTimeout(() => {
            iconContainer.classList.add(slideInFromRight);
            iconContainer.style.opacity = '1'; 
        }, 1000);

        setTimeout(() => {
            changelogContainer.classList.add(slideInFromBottom);
            changelogContainer.style.opacity = '1';
        }, 1500);
    }


    triggerAnimations();
});
