document.addEventListener('DOMContentLoaded', () => {
    const carouselButtonsContainer = document.getElementById('carouselButtons');
    const buttons = [
        { image: 'image/fruit/1.png', text: 'Fruits du Démon', href: 'fruits.html' },
        { image: 'image/prime/1.jpg', text: 'Personnages', href: 'personnages.html' },
        { image: 'image/lieux/1.jpg', text: 'Lieux', href: 'lieux.html' }, // Assurez-vous que c'est correctement inclus
        // Ajoutez d'autres boutons ici si nécessaire
    ];

    buttons.forEach(button => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';

        const image = document.createElement('img');
        image.src = button.image;
        image.alt = button.text;
        image.style.width = '400px'; // Exemple de largeur fixe
        image.style.height = '350px'; // Exemple de hauteur fixe
        slide.appendChild(image);

        const link = document.createElement('a');
        link.href = button.href;
        link.textContent = button.text;
        link.className = 'carousel-button';
        slide.appendChild(link);

        carouselButtonsContainer.appendChild(slide);
    });
});
