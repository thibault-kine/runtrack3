$(document).ready(() => {
    
const fields = document.querySelectorAll('.field'); // Array de tous les inputs
const button = document.querySelector('#filtrer');
let fieldNames = []; // la valeur de tous les names
for(i = 0; i < 3; i++) { fieldNames[i] = fields[i].getAttribute('name'); }
let options = document.querySelectorAll('option');
let types = []; // tous les types
for(i = 0; i < 16; i++) { types[i] = options[i].getAttribute('value') }

button.addEventListener('click', () => {
    // Inutile de vérifier si le formulaire est vide ou pas puisque
    // l'input "type" possède une valeur par défault
    fields.forEach((field) => {
        // Pour chaque champ de "fields"
        fetch('pokemon.json')
        .then((response) => {  })
        .catch((error) => console.log('%cErreur: ' + error.message, 'color: orange;'))
    });
});

async function getData() {
    let response = await fetch('pokemon.json');
    let data = await response.json();

    console.log(data);
}

getData();

});