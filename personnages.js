// onepiece-characters.js

const baseURL = "https://api.api-onepiece.com/v2/characters/fr";
const imageEquipage = 'image/Equipage.jpg'; // Assurez-vous que ce chemin est correct.

// Fonction pour récupérer et afficher tous les personnages
function recupererPersonnages() {
    fetch(`${baseURL}`)
        .then(reponse => reponse.json())
        .then(donnees => afficherPersonnages(donnees))
        .catch(erreur => document.getElementById('resultats').innerHTML = "Erreur lors de la récupération des personnages : " + erreur);
}

// Fonction pour récupérer et afficher les personnages de l'équipage du Chapeau de Paille
function recupererPersonnagesEquipage(idEquipage) {
    fetch(`${baseURL}/crew/${idEquipage}`)
        .then(reponse => reponse.json())
        .then(donnees => afficherPersonnagesEquipage(donnees))
        .catch(erreur => document.getElementById('resultats').innerHTML = "Erreur lors de la récupération des personnages de l'équipage : " + erreur);
}

// Fonction pour afficher les personnages
function afficherPersonnages(donnees) {
    const conteneur = document.getElementById('resultats');
    conteneur.innerHTML = ''; // Effacer les résultats précédents

    donnees.forEach(personnage => {
        conteneur.innerHTML += `
            <div class="personnage">
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

// Fonction pour afficher les personnages de l'équipage avec une seule image pour l'équipage
function afficherPersonnagesEquipage(donnees) {
    const conteneur = document.getElementById('resultats');
    conteneur.innerHTML = `<img src="${imageEquipage}" alt="Équipage du Chapeau de Paille" style="max-width:100%;">`; // Ajouter l'image de l'équipage en haut

    donnees.forEach(personnage => {
        conteneur.innerHTML += `
            <div class="personnage">
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
