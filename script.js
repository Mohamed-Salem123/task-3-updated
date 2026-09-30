document.addEventListener('DOMContentLoaded', function () {
    // Set dynamic current year in footer
    const yearElem = document.getElementById('year');
    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }

    // Smooth scrolling using JavaScript for navigation anchors
    const scrollTriggers = document.querySelectorAll('.js-scroll-trigger');

    scrollTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }

                // Collapse responsive navbar on click
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('#navbarResponsive');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // Form Submit Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for reaching out, Mohamed has received your message!');
            contactForm.reset();
        });
    }
});
