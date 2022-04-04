$(document).ready(function () {

for(var i = 1; i <= 6; i++) {
    $('#rangees').append(`<img src='img/arc${i}.png' id='${i}'>`);
}

// si le bouton #button est cliqué
$('#button').click(function () {
    // mélanger les éléments de la div #rangees
    $('#rangees').children().sort(function () {
        return Math.random() - 0.5;
    }).appendTo($('#melangees'));
});

$('#melangees').click(function () {
    // si l'élément cliqué est un élément de la div #melangees
    if ($(event.target).parent().attr('id') == 'melangees') {
        // le déplacer dans la div #rangees
        $(event.target).appendTo($('#rangees'));
    }

    // si #melangees est de nouveau vide
    if ($('#melangees').children().length == 0) {
        // si l'id de chaque élément de la div #rangees est dans l'ordre croissant
        for(var i = 0; i < $('#rangees').children().length; i++) {
            if ($('#rangees').children()[i].id != i + 1) {
                // on a trouvé un élément qui n'est pas dans l'ordre croissant
                alert("Vous avec perdu");
                break;
            }
            else {
                alert("Vous avez gagné");
                break;
            }
        }
    }
});

})