// personnages.js

// URL de base pour l'API des personnages One Piece
const baseURL = "https://api.api-onepiece.com/v2/characters/fr";

// Fonction pour récupérer et afficher tous les personnages
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

// Fonction pour afficher les personnages dans le conteneur
function afficherPersonnages(personnages) {
    const conteneurPersonnages = document.getElementById('resultats');
    conteneurPersonnages.innerHTML = ''; // Efface les résultats précédents

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

// Appel initial pour charger les personnages au chargement de la page
document.addEventListener('DOMContentLoaded', recupererPersonnages);
