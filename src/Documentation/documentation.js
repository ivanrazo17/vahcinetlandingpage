document.getElementById('linkedinBtn').addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/ivan-webster-razo-1243952a5', '_blank');
});

document.getElementById('portfolioBtn').addEventListener('click', () => {
    window.open('https://devfolio-ivanrazo.vercel.app/', '_blank');
});

document.getElementById('documentBtn').addEventListener('click', () => {
    window.open('../../assets/document/journalArticle.pdf', '_blank');
});

document.getElementById('repositoryBtn').addEventListener('click', () => {
    window.open('https://github.com/ivanrazo17/vahcinet2', '_blank');
});

document.addEventListener('DOMContentLoaded', () => {
    const accountsContainer = document.querySelector('.accounts-container');
    const documentContainer = document.querySelector('.document-container2');
    const contactContainer = document.querySelector('.contact-container');

    const slideInFromLeft = 'slide-in-left';
    const slideInFromRight = 'slide-in-right';
    const slideInFromBottom = 'slide-in-bottom';

    function triggerAnimations() {
        setTimeout(() => {
            accountsContainer.classList.add(slideInFromLeft);
            accountsContainer.style.opacity = '1';
        }, 0);

        setTimeout(() => {
            documentContainer.classList.add(slideInFromRight);
            documentContainer.style.opacity = '1';
        }, 300);

        setTimeout(() => {
            contactContainer.classList.add(slideInFromBottom);
            contactContainer.style.opacity = '1';
        }, 500);
    }

    triggerAnimations();
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let parms = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        emailjs.send("service_zgwoci9", "template_67dysdd", parms)
            .then(function(response) {
                alert("Message sent. We'll get back to you!");
                form.reset();
            })
            .catch(function(error) {
                alert("An error occurred while sending your message. Please try again.");
                console.error("Error sending message:", error);
            });
    });
});

