document.addEventListener('DOMContentLoaded', () => {

let bouton = $('#button');

bouton.on('click', () => {

    fetch('expression.txt')
        .then((response) => response.text())
        .then((data) => {
            $('body').append('<p></p>');
            $('p').append(data)
        })
        .catch((error) => console.log(`%cERREUR: ${error.message}`, "color: orange;"))
    ;
});

});