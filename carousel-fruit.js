document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carouselPersonnages');

    // Exemple avec 48 images différentes pour les personnages
    for (let i = 1; i <= 48; i++) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.textAlign = 'center'; // Centre le contenu du slide

        const image = document.createElement('img');
        // Utilisez un chemin d'accès différent ou un nom différent pour distinguer les images des personnages
        image.src = `image/fruit/${i}.png`; 
        image.alt = `Fruit Image ${i}`;
        image.style.display = 'block'; // Rend l'image comme un bloc
        image.style.marginLeft = 'auto'; // Marge gauche automatique pour centrer
        image.style.marginRight = 'auto'; // Marge droite automatique pour centrer
        image.style.width = '400px'; // Largeur fixe pour toutes les images
        image.style.height = '350px'; // Hauteur fixe pour toutes les images
        image.style.objectFit = 'cover'; // Garde le ratio d'aspect mais coupe l'image si nécessaire

        slide.appendChild(image);
        carouselContainer.appendChild(slide);
    }

    let currentSlide = 0;
    const slides = document.querySelectorAll('#carouselPersonnages .slide');

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    slides[currentSlide].classList.add('active');
    setInterval(showNextSlide, 2000);
});
