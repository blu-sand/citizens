document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navbar links
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Testimonial carousel auto-scroll
    const testimonials = document.querySelectorAll('.testimonial');
    let current = 0;

    setInterval(() => {
        testimonials[current].classList.remove('active');
        current = (current + 1) % testimonials.length;
        testimonials[current].classList.add('active');
    }, 3000);

    // Blog cards hover-expand interaction
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        const content = card.querySelector('.blog-content');
        
        // Expand on hover
        card.addEventListener('mouseenter', () => {
            content.style.top = '0';
            card.style.transform = 'scale(1.05) rotateY(5deg)';
        });

        // Collapse on mouse leave
        card.addEventListener('mouseleave', () => {
            content.style.top = '100%';
            card.style.transform = 'none';
        });
    });

    // Add shadow effect to navbar on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});


