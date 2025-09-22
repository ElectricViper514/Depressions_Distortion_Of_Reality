// File: public_html/Depressions_Distortion_Of_Reality/live/js/script.js
;(function() {
  'use strict';

  // ===== MOBILE MENU TOGGLE & CLICK-OUTSIDE =====
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('nav-menu');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!btn.contains(e.target) && !nav.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('show');
      }
    });
  }

  // ===== SMOOTH SCROLLING WITH OFFSET =====
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 0;
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const y = target.getBoundingClientRect().top
                    + window.pageYOffset
                    - headerHeight;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });

  // ===== BLOG CARD FADE-IN =====
  const cards = document.querySelectorAll('.blog-card.pre-animation');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reducedMotion && cards.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    cards.forEach(card => observer.observe(card));
  }

  // ===== OPTIONAL: CATEGORY ICON HOVER (if not handled via CSS) =====
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    const icon = card.querySelector('i');
    if (icon) {
      card.addEventListener('mouseenter', () => {
        icon.classList.add('icon-hover');
      });
      card.addEventListener('mouseleave', () => {
        icon.classList.remove('icon-hover');
      });
    }
  });

})();