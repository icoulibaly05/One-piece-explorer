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
