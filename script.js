// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple animation for blog cards
const blogCards = document.querySelectorAll('.blog-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

blogCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Category card hover effect
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('i').style.transform = 'scale(1.2)';
        card.querySelector('i').style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('i').style.transform = 'scale(1)';
    });
});