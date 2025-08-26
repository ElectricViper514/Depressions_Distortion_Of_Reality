// File: public_html/Depressions_Distortion_Of_Reality/staging/js/script.js

// ===== MOBILE MENU TOGGLE =====
const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (mobileMenu && navMenu) {
  mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetSelector = anchor.getAttribute('href');
    if (targetSelector && targetSelector !== '#') {
      const target = document.querySelector(targetSelector);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ===== BLOG CARD FADE-IN =====
const blogCards = document.querySelectorAll('.blog-card');

if (blogCards.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  blogCards.forEach(card => {
    card.classList.add('pre-animation');
    observer.observe(card);
  });
}

// ===== CATEGORY ICON HOVER =====
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
  const icon = card.querySelector('i');
  if (icon) {
    card.addEventListener('mouseenter', () => icon.classList.add('icon-hover'));
    card.addEventListener('mouseleave', () => icon.classList.remove('icon-hover'));
  }
});