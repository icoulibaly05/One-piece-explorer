document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carouselPersonnages');

    
    for (let i = 1; i <= 48; i++) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.textAlign = 'center'; 

        const image = document.createElement('img');
        
        image.src = `image/prime/${i}.jpg`; 
        image.alt = `Personnage Image ${i}`;
        image.style.display = 'block'; 
        image.style.marginLeft = 'auto'; 
        image.style.marginRight = 'auto'; 

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
