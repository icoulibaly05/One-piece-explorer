document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carouselPersonnages');

    
    for (let i = 1; i <= 48; i++) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.textAlign = 'center'; 

        const image = document.createElement('img');
        
        image.src = `image/fruit/${i}.png`; 
        image.alt = `Fruit Image ${i}`;
        image.style.display = 'block'; 
        image.style.marginLeft = 'auto'; 
        image.style.marginRight = 'auto'; 
        image.style.width = '400px'; 
        image.style.height = '350px'; 
        image.style.objectFit = 'cover'; 

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
