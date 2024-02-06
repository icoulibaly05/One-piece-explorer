// URL de base pour l'API des personnages One Piece
const baseURL = "https://api.api-onepiece.com/v2/characters/fr";

// Fonction pour récupérer tous les personnages
function recupererPersonnages() {
    fetch(`${baseURL}`)
        .then(reponse => reponse.json())
        .then(donnees => console.log("Tous les personnages :", donnees))
        .catch(erreur => console.error("Erreur lors de la récupération des personnages :", erreur));
}

// Fonction pour récupérer un personnage par son ID
function recupererPersonnageParId(idPersonnage) {
    fetch(`${baseURL}/${idPersonnage}`)
        .then(reponse => reponse.json())
        .then(donnees => console.log(`Personnage ${idPersonnage} :`, donnees))
        .catch(erreur => console.error(`Erreur lors de la récupération du personnage ${idPersonnage} :`, erreur));
}

// Fonction pour rechercher des personnages
function rechercherPersonnages(requete) {
    fetch(`${baseURL}/search/?query=${encodeURIComponent(requete)}`)
        .then(reponse => reponse.json())
        .then(donnees => console.log("Résultats de recherche :", donnees))
        .catch(erreur => console.error("Erreur lors de la recherche de personnages :", erreur));
}

// Fonction pour récupérer les personnages d'un équipage par l'ID de l'équipage
function recupererPersonnagesEquipage(idEquipage) {
    fetch(`${baseURL}/crew/${idEquipage}`)
        .then(reponse => reponse.json())
        .then(donnees => console.log(`Personnages de l'équipage ${idEquipage} :`, donnees))
        .catch(erreur => console.error(`Erreur lors de la récupération des personnages de l'équipage ${idEquipage} :`, erreur));
}

// Fonction pour récupérer le nombre de personnages dans un équipage par l'ID de l'équipage
function recupererNombrePersonnagesEquipage(idEquipage) {
    fetch(`${baseURL}/crew/${idEquipage}/count`)
        .then(reponse => reponse.json())
        .then(donnees => console.log(`Nombre de personnages dans l'équipage ${idEquipage} :`, donnees))
        .catch(erreur => console.error(`Erreur lors de la récupération du nombre de personnages dans l'équipage ${idEquipage} :`, erreur));
}
