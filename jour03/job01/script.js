$(document).ready(function () {
    
const texte = "Le $ est un bon élément monétaire. Le # de twitter est une bonne ID. Il faudra faire le point avec la classe pour cacher cet élément.";

p = $('<p></p>').text(texte);
$('body').append(p);

var isShown = false;
$(p).hide();

$('#button').on('click', function() {

    isShown = !isShown;
    if(!isShown) {
        $(p).hide();
    }
    else {
        $(p).show();
    }
});

$('#hide-all').on('click', function() {

    $('html').hide();
});

});