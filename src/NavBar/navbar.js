document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".navstyle");

    // Get the current page from the URL
    const currentPage = window.location.pathname.split('/').pop(); // Get the last part of the URL

    // Set the active class based on the current page
    navItems.forEach(item => {
        const link = item.querySelector("a");
        const href = link.getAttribute("href"); // Get the href attribute of the link

        // Extract the last part of the href that includes .html
        const hrefLastPart = href.slice(href.lastIndexOf('/') + 1); // Get the last part of the href

        // Check if the href matches the current page
        if (hrefLastPart === currentPage) {
            item.classList.add('active'); // Add active class to the current nav item
        }

        // Add click event listener to each anchor tag
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            // Remove the active class from all nav items
            navItems.forEach(l => {
                l.classList.remove('active');
            });

            // Add active class to the clicked nav item
            item.classList.add('active');

            // Redirect to the selected page
            window.location.href = href; // Redirect to the new page
        });

        // Hover effect on all items, including active
        item.addEventListener("mouseenter", function () {
            this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--hovernav-color'); // Hover background color
            link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-dark'); // Hover text color
        });

        // Reset background and text color on mouse leave for all links
        item.addEventListener("mouseleave", function () {
            // If the item is not active, reset the color
            if (!item.classList.contains('active')) {
                this.style.backgroundColor = ''; // Reset background color
                link.style.color = ''; // Reset text color
            } else {
                this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--currentnav-color'); // Keep active background color
                link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-light'); // Keep active text color
            }
        });
    });
});
