// onepiece-api.js

// URL de base pour l'API One Piece
const baseURL = "https://api.api-onepiece.com/v2/locates/fr";

// Fonction pour récupérer toutes les localisations
function recupererLocalisations() {
    fetch(`${baseURL}`)
        .then(reponse => reponse.json())
        .then(donnees => console.log("Toutes les localisations :", donnees))
        .catch(erreur => console.error("Erreur lors de la récupération des localisations :", erreur));
}

// Fonction pour récupérer une localisation par son ID
function recupererLocalisationParId(idLocalisation) {
    fetch(`${baseURL}/${idLocalisation}`)
        .then(reponse => reponse.json())
        .then(donnees => console.log(`Localisation ${idLocalisation} :`, donnees))
        .catch(erreur => console.error(`Erreur lors de la récupération de la localisation ${idLocalisation} :`, erreur));
}

// Fonction pour rechercher des localisations
function rechercherLocalisations(requete) {
    fetch(`${baseURL}/search/?query=${encodeURIComponent(requete)}`)
        .then(reponse => reponse.json())
        .then(donnees => console.log("Résultats de recherche :", donnees))
        .catch(erreur => console.error("Erreur lors de la recherche de localisations :", erreur));
}

// Fonction pour récupérer le nombre de localisations
function recupererNombreLocalisations() {
    fetch(`${baseURL}/count`)
        .then(reponse => reponse.json())
        .then(donnees => console.log("Nombre de localisations :", donnees))
        .catch(erreur => console.error("Erreur lors de la récupération du nombre de localisations :", erreur));
}
