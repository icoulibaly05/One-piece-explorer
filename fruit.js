document.addEventListener("DOMContentLoaded", function() {
    const boutonTousLesFruits = document.getElementById("boutonTousLesFruits");
    if (boutonTousLesFruits) {
        boutonTousLesFruits.addEventListener("click", recupererTousLesFruits);
    }

    const searchButton = document.getElementById("searchButton");
    if (searchButton) {
        searchButton.addEventListener("click", rechercherFruits);
    }
});

// Fonction pour récupérer et afficher tous les fruits
function recupererTousLesFruits() {
    fetch("https://api.api-onepiece.com/v2/fruits/fr")
        .then(response => response.json())
        .then(data => afficherFruits(data))
        .catch(error => document.getElementById('resultats').innerHTML = `Erreur : ${error}`);
}

function rechercherFruits() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    fetch("https://api.api-onepiece.com/v2/fruits/fr")
        .then(response => response.json())
        .then(data => {
            let filteredFruits;
            if (searchTerm === "paramecia") {
                filteredFruits = data.filter(fruit => fruit.id >= 1 && fruit.id <= 79);
            } else if (searchTerm === "logia") {
                filteredFruits = data.filter(fruit => fruit.id >= 80 && fruit.id <= 90);
            } else if (searchTerm === "zoan") {
                filteredFruits = data.filter(fruit => fruit.id >= 91 && fruit.id <= 110);
            } else if (searchTerm === "zoan antique") {
                filteredFruits = data.filter(fruit => fruit.id >= 110 && fruit.id <= 119);
            } else if (searchTerm === "zoan mythiques") {
                filteredFruits = data.filter(fruit => fruit.id >= 120 && fruit.id <= 126);
            } else {
                filteredFruits = [];
            }

            if (filteredFruits.length > 0) {
                afficherFruits(filteredFruits);
            } else {
                document.getElementById('resultats').innerHTML = 'Aucun fruit correspondant trouvé.';
            }
        })
        .catch(error => {
            document.getElementById('resultats').innerHTML = `Erreur : ${error}`;
        });
}

// Fonction pour afficher les fruits dans le conteneur de résultats
function afficherFruits(fruits) {
    const conteneur = document.getElementById('resultats');
    conteneur.innerHTML = ''; // Effacer les résultats précédents

    fruits.forEach(fruit => {
        const fruitElement = document.createElement('div');
        fruitElement.className = 'fruit-info';
        fruitElement.innerHTML = `
            <h2>${fruit.name} (${fruit.roman_name})</h2>
            <p>Type : ${fruit.type}</p>
            <p>Description : ${fruit.description}</p>
            <img src="${fruit.filename}" alt="${fruit.name}" style="max-width:100%; height:auto;">
        `;
        conteneur.appendChild(fruitElement);
    });
}
