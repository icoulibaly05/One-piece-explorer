const baseURL = "https://api.api-onepiece.com/v2/fruits/fr";

// Afficher tous les Fruits du Démon
function recupererTousLesFruits() {
    fetch(`${baseURL}`)
        .then(response => response.json())
        .then(data => afficherFruits(data))
        .catch(error => document.getElementById('resultats').innerHTML = `Erreur : ${error}`);
}

// Afficher le nombre total de Fruits du Démon
function recupererNombreDeFruits() {
    fetch(`${baseURL}/count`)
        .then(response => response.json())
        .then(count => {
            document.getElementById('resultats').innerHTML = `Nombre total de fruits : ${count}`;
        })
        .catch(error => document.getElementById('resultats').innerHTML = `Erreur : ${error}`);
}

// Filtrer et afficher uniquement les Fruits du Démon de type "Zoan Mythique"
function recupererZoanMythiques() {
    fetch(`${baseURL}/search?type=Zoan%20Mythique`)
        .then(response => response.json())
        .then(data => afficherFruits(data))
        .catch(error => document.getElementById('resultats').innerHTML = `Erreur : ${error}`);
}

// Fonction pour afficher les Fruits du Démon dans le conteneur
function afficherFruits(fruits) {
    const conteneur = document.getElementById('resultats');
    conteneur.innerHTML = ''; // Effacer les résultats précédents

    fruits.forEach(fruit => {
        conteneur.innerHTML += `
            <div class="fruit-info">
                <h2>${fruit.name} (${fruit.roman_name})</h2>
                <p>Type : ${fruit.type}</p>
                <p>Description : ${fruit.description}</p>
                <img src="${fruit.filename}" alt="${fruit.name}">
            </div>
        `;
    });
}
