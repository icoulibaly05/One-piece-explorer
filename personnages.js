// onepiece-characters.js

const baseURL = "https://api.api-onepiece.com/v2/characters/fr";

function afficherResultats(donnees) {
    const conteneur = document.getElementById('resultats');
    conteneur.innerHTML = ''; // Effacer les résultats précédents

    donnees.forEach(personnage => {
        conteneur.innerHTML += `
            <div>
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

function recupererPersonnages() {
    fetch(`${baseURL}`)
        .then(reponse => reponse.json())
        .then(donnees => afficherResultats(donnees))
        .catch(erreur => document.getElementById('resultats').innerHTML = "Erreur lors de la récupération des personnages : " + erreur);
}

// Les autres fonctions (recupererPersonnageParId, rechercherPersonnages, etc.) peuvent être mises à jour de manière similaire.
