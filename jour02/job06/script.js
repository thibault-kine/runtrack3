document.addEventListener('DOMContentLoaded', (e) => {

correct = false;
const KONAMI = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'a', 'b' 
];

function addStyle(content) {
    content = content.toString();
    // Bg color
    document.body.style.backgroundColor = 'rgb(42,96,158)';
    // Text color
    document.body.style.color = 'white';

    // Créer une balise texte
    let title = document.createElement('h1');
    document.body.appendChild(title);
    title.textContent = content;

    title.style.textAlign = 'center';
    title.style.marginTop = '5%';
    title.style.fontSize  = '78px';
    title.style.fontFamily= 'Consolas';
}

var i = 0;
document.addEventListener('keydown', (e) => {
    console.log(e.key);
    console.log(KONAMI[i]);

    if(e.key == KONAMI[i]) {
        i++;
    }
    else if(KONAMI[i] == undefined && !document.getElementsByTagName('h1').item(0)) {
        addStyle("LaPlateforme_");
        
    }
    else {
        console.log("Code raté!");
    }
});

});