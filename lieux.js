// lieux.js

// URL de base pour l'API des lieux One Piece
const baseURLLieux = "https://api.api-onepiece.com/v2/locates/fr";

// Mappage des noms des mers aux plages d'ID
const merAId = {
    "East Blue": { start: 1, end: 19 },
    "West Blue": { start: 20, end: 24 },
    "North Blue": { start: 25, end: 32 },
    "South Blue": { start: 33, end: 38 },
    "Red Line": { start: 39, end: 42 },
    "Calm Belt": { start: 43, end: 45 },
    "Paradis": { start: 46, end: 67 },
    "Shin Sekai": { start: 68, end: 88 },
    // "NomDeLaMer": { start: IDDeDébut, end: IDDeFin },
};

// Fonction pour récupérer et afficher tous les lieux
function recupererLieux() {
    fetch(`${baseURLLieux}`)
        .then(response => response.json())
        .then(data => {
            afficherLieux(data);
        })
        .catch(error => {
            document.getElementById('lieuxResultats').innerHTML = `Erreur lors de la récupération des lieux : ${error}`;
        });
}

// Fonction pour rechercher des lieux par mer et afficher les ID correspondants
function rechercherLieux() {
    const merRecherchee = document.getElementById('searchBar').value.trim();
    const plageId = merAId[merRecherchee];

    if (!plageId) {
        document.getElementById('lieuxResultats').innerHTML = "Aucun lieu trouvé pour cette mer ou mer non reconnue.";
        return;
    }

    // Faire une seule requête pour obtenir tous les lieux, puis filtrer localement
    fetch(`${baseURLLieux}`)
        .then(response => response.json())
        .then(data => {
            // Filtrer les lieux par la plage d'ID pour la mer recherchée
            const lieuxFiltres = data.filter(lieu => lieu.id >= plageId.start && lieu.id <= plageId.end);
            afficherLieux(lieuxFiltres);
        })
        .catch(error => {
            document.getElementById('lieuxResultats').innerHTML = `Erreur lors de la recherche des lieux : ${error}`;
        });
}

// Fonction pour afficher les lieux dans le conteneur
function afficherLieux(lieux) {
    const conteneurLieux = document.getElementById('lieuxResultats');
    conteneurLieux.innerHTML = ''; // Efface les résultats précédents

    lieux.forEach(lieu => {
        conteneurLieux.innerHTML += `
            <div class="lieu-info">
                <h2>${lieu.name}</h2>
                <p>ID : ${lieu.id}</p>
                <p>Mer : ${lieu.sea_name}</p>
                <p>Région : ${lieu.region_name}</p>
                <p>Affiliation : ${lieu.affiliation_name}</p>
            </div>
        `;
    });
}
