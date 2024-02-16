document.addEventListener('DOMContentLoaded', () => {
    const carouselButtonsContainer = document.getElementById('carouselButtons');
    const buttons = [
        { image: 'image/fruit/2.png', text: 'Fruits du Démon', href: 'fruits.html' },
        { image: 'image/prime/1.jpg', text: 'Personnages', href: 'personnages.html' },
        { image: 'image/lieux/1.jpg', text: 'Lieux', href: 'lieux.html' }, 
        { image: 'image/ACE.jpg', text: 'Techniques', href: 'techniques.html' }
    ];

    buttons.forEach(button => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';

        const image = document.createElement('img');
        image.src = button.image;
        image.alt = button.text;
        image.style.width = '400px'; 
        image.style.height = '350px'; 
        slide.appendChild(image);

        const link = document.createElement('a');
        link.href = button.href;
        link.textContent = button.text;
        link.className = 'carousel-button';
        slide.appendChild(link);

        carouselButtonsContainer.appendChild(slide);
    });
});
