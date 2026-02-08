document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const desktopNav = document.querySelector('.desktop-nav');

    // Mobile menu toggle
    if (menuToggle && desktopNav) {
        menuToggle.addEventListener('click', () => {
            desktopNav.classList.toggle('nav-open');
            menuToggle.setAttribute('aria-expanded', desktopNav.classList.contains('nav-open'));
        });

        // Close mobile nav when a link is clicked (for in-page anchors)
        desktopNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => desktopNav.classList.remove('nav-open'));
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('about-modal');
        if (modal && event.target === modal) {
            closeModal('about-modal');
        }
    });

    // Scroll reveal on load and scroll (throttled)
    checkVisibility();
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) window.cancelAnimationFrame(scrollTimeout);
        scrollTimeout = window.requestAnimationFrame(checkVisibility);
    }, { passive: true });
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function checkVisibility() {
    const revealedElements = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;

    revealedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight * 0.85) {
            element.classList.add('visible');
        }
    });
}
window.addEventListener("scroll", () => {
    document.body.classList.toggle("scrolled", window.scrollY > 50);
});




