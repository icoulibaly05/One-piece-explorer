document.addEventListener('DOMContentLoaded', () => {
    const gearButton = document.getElementById('gear');
    const hakiButton = document.getElementById('hakis');
    const allTechniquesButton = document.getElementById('allTechniques');
    const resultContainer = document.getElementById('techniquesResultats');

 
    const displayTechniques = (techniques) => {
        resultContainer.innerHTML = '';
        techniques.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('technique-info');
            div.innerHTML = `
                <h3>${item.name}</h3>
                <p>Description: ${item.description}</p>
            `;
            resultContainer.appendChild(div);
        });
    };

    
    gearButton.addEventListener('click', () => {
        fetch('https://api.api-onepiece.com/v2/luffy-gears/fr')
            .then(response => response.json())
            .then(gears => displayTechniques(gears))
            .catch(error => {
                resultContainer.innerHTML = `Erreur lors de la récupération des données : ${error}`;
            });
    });

    hakiButton.addEventListener('click', () => {
        fetch('https://api.api-onepiece.com/v2/hakis/fr')
            .then(response => response.json())
            .then(hakis => displayTechniques(hakis))
            .catch(error => {
                resultContainer.innerHTML = `Erreur lors de la récupération des données : ${error}`;
            });
    });

    allTechniquesButton.addEventListener('click', () => {
        Promise.all([
            fetch('https://api.api-onepiece.com/v2/luffy-gears/fr').then(response => response.json()),
            fetch('https://api.api-onepiece.com/v2/hakis/fr').then(response => response.json()),
            fetch('https://api.api-onepiece.com/v2/luffy-techniques/fr').then(response => response.json())
        ]).then(([gears, hakis, techniques]) => {
            const allData = [...gears, ...hakis, ...techniques];
            displayTechniques(allData);
        }).catch(error => {
            resultContainer.innerHTML = `Erreur lors de la récupération des données : ${error}`;
        });
    });
});
