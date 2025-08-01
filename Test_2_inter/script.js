const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const indicators = document.getElementById('indicators');
const items = document.querySelectorAll('.carousel-item');

let index = 0;
const total = items.length;
let autoPlay = true;
let interval = 3000;

// Create indicators dynamically
items.forEach((_, i) => {
  const btn = document.createElement('button');
  if (i === 0) btn.classList.add('active');
  btn.addEventListener('click', () => goToSlide(i));
  indicators.appendChild(btn);
});

const indicatorBtns = indicators.querySelectorAll('button');

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  indicatorBtns.forEach(btn => btn.classList.remove('active'));
  indicatorBtns[index].classList.add('active');
}

function prevSlide() { index = (index - 1 + total) % total; updateCarousel(); }
function nextSlide() { index = (index + 1) % total; updateCarousel(); }
function goToSlide(i) { index = i; updateCarousel(); }

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Auto-play
if (autoPlay) {
  setInterval(nextSlide, interval);
}
