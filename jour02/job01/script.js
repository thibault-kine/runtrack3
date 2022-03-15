document.addEventListener('DOMContentLoaded', (event) => {

let boutonElement = document.getElementById('button');

function citation(elementId = 'citation') {
    let citationElement = document.getElementById(elementId);
    console.log(citationElement.textContent);
}

boutonElement.addEventListener('click', (event) => citation());

});
