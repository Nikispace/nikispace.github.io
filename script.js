document.addEventListener("DOMContentLoaded", () => {
  // --------------------------
  // GALLERY I (Carousel)
  // --------------------------
  const gallery1 = document.querySelector(".carousel");

  if (gallery1) {
    const images1 = [
      "yourImage1.JPEG",
      "yourImage2.JPEG",
      "yourImage3.JPEG"
      // Add all your uploaded filenames here
    ];

    images1.forEach(file => {
      const img = document.createElement("img");
      img.src = `images/gallery1/${file}`; // folder path for Gallery I
      img.alt = "Gallery I image";
      gallery1.appendChild(img);
    });
  }

  // --------------------------
  // GALLERY II (Horizontal scroll)
  // --------------------------
  const gallery2 = document.querySelector(".horizontal");

  if (gallery2) {
    const images2 = [
      "yourImage1.JPEG",
      "yourImage2.JPEG",
      "yourImage3.JPEG"
      // Add all your uploaded filenames here
    ];

    images2.forEach(file => {
      const img = document.createElement("img");
      img.src = `images/gallery2/${file}`; // folder path for Gallery II
      img.alt = "Gallery II image";
      gallery2.appendChild(img);
    });
  }

  // --------------------------
  // Neon click glow effect
  // --------------------------
  document.querySelectorAll('.glass-card, .neon-btn').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.add('active-glow');
      setTimeout(() => el.classList.remove('active-glow'), 300);
    });
  });

  // --------------------------
  // Optional scroll fade-in
  // --------------------------
  const sections = document.querySelectorAll('.section');

  window.addEventListener('scroll', () => {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.style.opacity = 1;
        sec.style.transform = 'translateY(0)';
      }
    });
  });
});
