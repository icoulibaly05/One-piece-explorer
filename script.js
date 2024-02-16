const baseURL = "https://api.api-onepiece.com/v2/characters/fr";

function recupererPersonnages() {
    fetch(`${baseURL}`)
        .then(response => response.json())
        .then(data => {
            afficherPersonnages(data);
        })
        .catch(error => {
            document.getElementById('resultats').innerHTML = `Erreur lors de la récupération des personnages : ${error}`;
        });
}

function recupererEquipageChapeauxDePaille() {
    fetch(`${baseURL}/crew/1`)
        .then(response => response.json())
        .then(data => {
            afficherPersonnages(data);
            afficherPhotoEquipage();
        })
        .catch(error => {
            document.getElementById('resultats').innerHTML = `Erreur lors de la récupération de l'équipage : ${error}`;
        });
}

function afficherPersonnages(personnages) {
    const conteneurPersonnages = document.getElementById('resultats');
    conteneurPersonnages.innerHTML = '';

    personnages.forEach(personnage => {
        conteneurPersonnages.innerHTML += `
            <div class="personnage-info">
                <h2>${personnage.name}</h2>
                <p>Rôle : ${personnage.job}</p>
                <p>Taille : ${personnage.size}</p>
                <p>Anniversaire : ${personnage.birthday}</p>
                <p>Âge : ${personnage.age}</p>
                <p>Prime : ${personnage.bounty}</p>
                <p>Status : ${personnage.status}</p>
            </div>
        `;
    });
}

function afficherPhotoEquipage() {
    const conteneurPhoto = document.getElementById('photoEquipage');
    conteneurPhoto.innerHTML = '';

    const image = document.createElement('img');
    image.src = 'image/Equipage.jpg';
    image.alt = 'Équipage du Chapeau de Paille';
    image.style.display = 'block';
    image.style.marginLeft = 'auto';
    image.style.marginRight = 'auto';

    conteneurPhoto.appendChild(image);
}

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
