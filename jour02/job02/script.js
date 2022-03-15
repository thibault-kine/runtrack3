document.addEventListener('DOMContentLoaded', (event) => {

let boutonElement = document.getElementById('button');

function showHide(elementTag = 'article') {

    let elements = document.getElementsByTagName(elementTag);

    // si l'article n'existe pas déjà
    // document.getElementsByTagName retourne un HTMLCollection, une array
    // On vérifie si l'array est vide ou pas
    if(elements.length <= 0) {
        var newElement = document.createElement(elementTag);
        newElement.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newElement);
    }
    else {
        document.body.removeChild(elements[0]);
    }
}

boutonElement.addEventListener('click', (event) => showHide());

});