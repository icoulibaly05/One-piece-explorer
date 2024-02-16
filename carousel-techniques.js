document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carousel');
    if (!carouselContainer) {
        console.error('Élément de carrousel non trouvé.');
        return;
    }

    // Remplacez ceci par le nombre réel d'images dans le dossier 'techniques'
    const numberOfImages = 10; // Supposons que vous ayez 10 images pour l'exemple
    const imageFolder = 'image/gear/'; // Mettez à jour le chemin si nécessaire

    for (let i = 1; i <= numberOfImages; i++) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        const image = document.createElement('img');
        image.src = ${imageFolder}${i}.png; // Assurez-vous que le format de l'image est correct (.jpg ici)
        image.alt = Carousel Image ${i};
        slide.appendChild(image);
        carouselContainer.appendChild(slide);
    }

    let currentSlide = 0;
    const slides = document.querySelectorAll('#carousel .slide');

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Initialiser le premier slide comme actif
    if (slides.length > 0) {
        slides[0].classList.add('active');
        setInterval(showNextSlide, 5000); // Change le slide toutes les 5 secondes
    }
});