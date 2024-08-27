let currentIndex = 0;
const totalSlides = 4; // Total de slides

function moveSlide(step) {
    const slides = document.querySelector('.slides');
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Inicializar o slider com o slide 0
moveSlide(0);

// Navegar entre slides
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

// Mudar slides automaticamente a cada 3 segundos
setInterval(() => moveSlide(1), 3000);


