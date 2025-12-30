document.addEventListener("DOMContentLoaded", () => {
  // --------------------------
  // GALLERY I (Carousel)
  // --------------------------
  const gallery1 = document.querySelector(".carousel");

  if (gallery1) {
    const images1 = [
      "aesthetic1.JPEG",
      "Article1.JPEG",
      "Aritcle2.JPEG"
      "bird&cloud.JPEG"
      "Bird11.JPEG"
      "Bird2.JPEG"
      "Cloud1.JPEG"
      "Cloud2.JPEG"
      "Cloud3.JPEG"
      "Blurtree.JPEG"
      "flower1.JPEG"
      "flower2.JPEG"
      "Spider1.JPEG"
      "Spider2.JPEG"
      "Spider3.JPEG"
      "Sun.JPEG"
      "sunset1.JPEG"
      "Tree1.JPEG"
      "Way1.JPEG"
      "Way2.JPEG"
      "Workdesk1.JPEG"
      "Workdesk2.JPEG"
      "Workdesk3.JPEG"
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
      "1.JPEG",
      "2.JPEG",
      "3.JPEG"
      "4.JPEG"
      "5.JPEG"
      "6.JPEG"
      "7.JPEG"
      "8.JPEG"
      "9.JPEG"
      "10.JPEG"
      "11.JPEG"
      "12.JPEG"
      "13.JPEG"
      "14.JPEG"
      "15.JPEG"
      "16.JPEG"
      "17.JPEG"
      "18.JPEG"
      "19.JPEG"
      "20.JPEG"
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

