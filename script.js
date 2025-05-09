// script.js - Improved
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const overlay = document.createElement('div');
  const closeBtn = document.getElementById("close-btn");
  const body = document.body;

  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  function closeMenu() {
      menuToggle.classList.remove("active");
      mobileNav.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("no-scroll");
  }

  menuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      mobileNav.classList.toggle("active");
      overlay.classList.toggle("active");
      body.classList.toggle("no-scroll");
  });

  if (closeBtn) {
      closeBtn.addEventListener("click", closeMenu);
  }

  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll(".mobile-nav a").forEach(link =>
      link.addEventListener("click", closeMenu)
  );
});
// Lightbox Zoom Effect
document.addEventListener("DOMContentLoaded", () => {
    const zoomImages = document.querySelectorAll('.zoomable');
  
    // Create lightbox container
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
      <button class="close-btn">&times;</button>
      <img src="" alt="Zoomed Image">
    `;
    document.body.appendChild(lightbox);
  
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.close-btn');
  
    zoomImages.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      });
    });
  
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector('.fade-in-text');
    const text = el.textContent;
    el.textContent = ''; // Clear original
  
    function animateText() {
      el.innerHTML = ''; // Reset for each loop
  
      [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${i * 0.05}s`;
        el.appendChild(span);
      });
  
      const totalDuration = text.length * 50 + 1000; // in ms
      setTimeout(animateText, totalDuration);
    }
  
    animateText(); // Start loop
    window.addEventListener("scroll", () => {
        const logo = document.querySelector(".logo-img");
        if (window.scrollY > 60) {
          logo.classList.add("fade-logo");
        } else {
          logo.classList.remove("fade-logo");
        }
      });
      
      
  });
  
  // Header fade on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const hero = document.querySelector(".hero");
    const scrollThreshold = hero.offsetHeight * 0.7;
  
    if (window.scrollY > scrollThreshold) {
      header.classList.add("fade-out");
    } else {
      header.classList.remove("fade-out");
    }
  });
  
  