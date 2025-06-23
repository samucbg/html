let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * 100; // Calcular o deslocamento
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Mudar de slide automaticamente
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // Incrementa o índice e reinicia se necessário
    showSlide(currentIndex);
}, 3000);

// Navegação manual
document.querySelectorAll('.navigation label').forEach((label, index) => {
    label.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});