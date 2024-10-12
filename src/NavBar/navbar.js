document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".navstyle");

    const currentPage = window.location.pathname.split('/').pop(); 


    navItems.forEach(item => {
        const link = item.querySelector("a");
        const href = link.getAttribute("href");

        const hrefLastPart = href.slice(href.lastIndexOf('/') + 1); 

        if (hrefLastPart === currentPage) {
            item.classList.add('active');
        }

        link.addEventListener("click", function (e) {
            e.preventDefault();

            navItems.forEach(l => {
                l.classList.remove('active');
            });

            item.classList.add('active');

            window.location.href = href; 
        });


        item.addEventListener("mouseenter", function () {
            this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--hovernav-color'); 
            link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-dark'); 
        });

        item.addEventListener("mouseleave", function () {
            if (!item.classList.contains('active')) {
                this.style.backgroundColor = ''; 
                link.style.color = ''; 
            } else {
                this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--currentnav-color');
                link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-light'); 
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const navLinks = document.querySelector('.navlinks');
    const overlay = document.querySelector('.overlay');

    mobileMenuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        overlay.style.display = 'block';
    });

    overlay.addEventListener('click', function () {
        navLinks.classList.remove('active');
        overlay.style.display = 'none';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('nav'); 
    const threshold = 50;

    window.addEventListener('scroll', function () {
        if (window.scrollY > threshold) {
            nav.classList.add('scrolled'); 
        } else {
            nav.classList.remove('scrolled');
        }
    });
});


