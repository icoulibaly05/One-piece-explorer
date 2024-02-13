document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carousel');

    for (let i = 1; i <= 5; i++) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        const image = document.createElement('img');
        image.src = button.image;
        image.alt = button.text;
        image.style.width = '400px'; // Exemple de largeur fixe
        image.style.height = '350px'; // Exemple de hauteur fixe
        slide.appendChild(image);
        carouselContainer.appendChild(slide);
    }

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    slides[currentSlide].classList.add('active');
    setInterval(showNextSlide, 5000);
});
