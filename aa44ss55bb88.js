// slideshow.js
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slider img');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  let index = 0;
  let intervalId;

  // Fungsi untuk menampilkan slide
  function showSlide(i) {
    slides.forEach(img => img.classList.remove('active'));
    slides[i].classList.add('active');
  }

  // Slide berikutnya
  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  // Slide sebelumnya
  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  // Tombol manual
  nextBtn.addEventListener('click', () => {
    nextSlide();
    restartAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    restartAutoSlide();
  });

  // Jalankan otomatis setiap 4 detik
  function startAutoSlide() {
    intervalId = setInterval(nextSlide, 4000);
  }

  function restartAutoSlide() {
    clearInterval(intervalId);
    startAutoSlide();
  }

  // Mulai slideshow
  showSlide(index);
  startAutoSlide();
});
