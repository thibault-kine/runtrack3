document.addEventListener('DOMContentLoaded', (event) => {

// récupère les touches du clavier
document.addEventListener('keydown', (event) => {
    // vérifier que la touche est bien une lettre ou un chiffre
    if (event.key.match(/[a-zA-Z0-9]/)) {
        // récupère la valeur de l'input
        let value = document.getElementById('keylogger').value;
        // ajoute la touche à la fin de la valeur
        value += event.key;
        // affiche la valeur
        document.getElementById('keylogger').value = value;

        // si le focus est sur le textarea, ajouter le caractère 2 fois
        if (document.activeElement.id === 'textarea') {
            document.getElementById('keylogger').value += event.key + event.key;
        }
    }
});

});