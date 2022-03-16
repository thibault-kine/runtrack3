$(document).ready(function () {

// le div qui contient les images mélangées 
var melangees = $('#melangees');
// le div qui contient les images rangées
var rangees   = $('#rangees');
// le bouton "mélanger"
var bouton    = $('#button');

for(i = 1; i <= 6; i++) {
    melangees.append(`<img src="img/arc${i}.png" id="melange${i}">`);
}

// m = mélangé
var mChildren = melangees.children();

bouton.on('click', function() {

    mChildren.sort(() => Math.random() - 0.5);
    melangees.empty();
    for(i = 1; i <= 6; i++) {
        $(mChildren[i]).appendTo(melangees);
    }
    console.log(mChildren);
    
});
});