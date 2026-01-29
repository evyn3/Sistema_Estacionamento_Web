const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
    // Remove active de todos
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Adiciona active no atual
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Eventos
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});

// Auto play
let autoPlay = setInterval(nextSlide, 2000);

const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => clearInterval(autoPlay));
sliderContainer.addEventListener('mouseleave', () => autoPlay = setInterval(nextSlide, 5000));

// Inicializa
showSlide(0);

const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !menuMobile.contains(e.target)) {
        menuMobile.classList.remove('show');
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const btnsCadastro = document.querySelectorAll(".btn-cadastro");

  btnsCadastro.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "cad.html";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btnsLogin = document.querySelectorAll(".btn-login");

  btnsLogin.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  });
});