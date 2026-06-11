(() => {
  const stage = document.querySelector('.hero-stage');
  const caption = document.querySelector('.hero-caption');
  const slides = stage ? Array.from(stage.querySelectorAll('.hero-slide')) : [];

  if (slides.length > 1) {
    const captions = [
      'I (2nd from the right) volunteered as a paddler for Lenovo at the 2025 Triangle Area Dragon Boat Festival, securing 1st place in Division D with amazing Team Spirit.',
      'Me holding the trophy and the medal!'
    ];

    if (caption) {
      caption.textContent = captions[0];
    }

    let activeIndex = 0;
    window.setInterval(() => {
      const currentSlide = slides[activeIndex];
      activeIndex = (activeIndex + 1) % slides.length;
      const nextSlide = slides[activeIndex];
      currentSlide.classList.remove('is-active');
      nextSlide.classList.add('is-active');
      if (caption) {
        caption.classList.add('is-updating');
        window.setTimeout(() => {
          caption.textContent = captions[activeIndex];
          caption.classList.remove('is-updating');
        }, 220);
      }
    }, 4000);
  }

  const revealItems = document.querySelectorAll('.sample-card, .prompt-row, .snippet-box');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();