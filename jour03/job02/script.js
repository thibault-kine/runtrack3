$(document).ready(function () {

var melangees = $('#melangees'); // le div qui contient les images mélangées 
var rangees   = $('#rangees'); // le div qui contient les images rangées
var bouton    = $('#button'); // le bouton "mélanger"

for(i = 1; i <= 6; i++) {
    rangees.append(`<img src="img/arc${i}.png" id="${i}">`);
}

var rChildren = rangees.children();

bouton.on('click', function() {
    rangees.empty();
    rChildren.sort(() => Math.random() - 0.5);
    for(i = 0; i <= 6; i++) {
        $(rChildren[i]).appendTo(melangees);
    }
    if(melangees.children().length > 0) {
        console.log(melangees.children());
        var mChildren = melangees.children();
    }
});

do {
    for(i = 1; i <= 6; i++) {
        $('#'+i).on('click', function() {
            console.log("clicked: #" + i);
        })
    }
} while (melangees.children().length > 0)


});