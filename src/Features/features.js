document.addEventListener('DOMContentLoaded', () => {
 
    const headers = document.querySelectorAll('h1');
    const subHeaders = document.querySelectorAll('h2');
    const iconRight1 = document.querySelector('#iconRight1'); 
    const iconRight2 = document.querySelector('#iconRight2'); 
    const iconLeft = document.querySelector('#iconLeft');
    
    const slideInFromLeft = 'slide-in-left';
    const slideInFromRight = 'slide-in-right';
    const slideInFromTop = 'slide-in-top';


    function triggerAnimations() {
        headers.forEach((header) => {
            header.classList.add(slideInFromTop);
            header.style.opacity = '1'; 
        });

        subHeaders.forEach((subHeader) => {
            subHeader.classList.add(slideInFromTop);
            subHeader.style.opacity = '1'; 
        });

   
        setTimeout(() => {
            iconRight1.classList.add(slideInFromRight);
            iconRight1.style.opacity = '1';
        }, 800);

        setTimeout(() => {
            iconRight2.classList.add(slideInFromRight);
            iconRight2.style.opacity = '1'; 
        }, 800); 

        setTimeout(() => {
            iconLeft.classList.add(slideInFromLeft);
            iconLeft.style.opacity = '1'; 
        }, 800);
    }

    triggerAnimations();
});
