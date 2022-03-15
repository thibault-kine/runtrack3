document.addEventListener('DOMContentLoaded', (event) => {

let boutonElement = document.getElementById('button');
let compteur = 0;

function addOne() {
    let compteurElement = document.getElementById('compteur');

    compteurElement.textContent = compteur.toString();
    compteur++;
}

document.addEventListener('click', (event) => addOne());

});