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
            this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--hovernav-color'); // Hover background color
            link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-dark'); // Hover text color
        });

        item.addEventListener("mouseleave", function () {
            if (!item.classList.contains('active')) {
                this.style.backgroundColor = ''; 
                link.style.color = ''; 
            } else {
                this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--currentnav-color'); // Keep active background color
                link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-light'); // Keep active text color
            }
        });
    });
});
