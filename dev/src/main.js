/* File: C:/Projects/Depressions_Distortion_Of_Reality/dev/src/main.js */

/* ========= MOBILE MENU TOGGLE ========= */
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
    mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);
    navMenu.classList.toggle("show");
  });
}

/* ========= SCROLL ANIMATIONS ========= */
// Fade/slide in blog cards when they enter the viewport
const animatedCards = document.querySelectorAll(".blog-card.pre-animation");

const observerOptions = {
  threshold: 0.2, // trigger when 20% of the element is visible
};

const inViewObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target); // animate once
    }
  });
}, observerOptions);

animatedCards.forEach((card) => {
  inViewObserver.observe(card);
});

/* ========= SMOOTH SCROLL FOR INTERNAL LINKS ========= */
const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ========= PLACEHOLDER FOR FUTURE FEATURES ========= */
// Example: Newsletter form validation, dark mode toggle, etc.
// Add new scripts here as your site grows.