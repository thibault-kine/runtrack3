document.addEventListener('DOMContentLoaded', () => {

let reboot = document.getElementById('reboot');
let btn1 = document.getElementById('1');
let btn2 = document.getElementById('2');
let btn3 = document.getElementById('3');

let text = document.getElementById('jumb-text');

let gigaChad = document.getElementById('chad');
let map = document.getElementById('maps');
let citations = [
    "Eldon Tyrell : Le commerce est notre seul but chez Tyrell. Plus humain que l'humain est notre devise.",
    "Leon Kowalski : T'endors pas, c'est l'heure de mourir.",
    "Roy Batty : Quelle expérience de vivre dans la peur ! Voilà ce que c'est que d'être un esclave.",
    "Roy Batty : J'ai vu tant de choses que vous, humains, ne pourriez pas croire.",
    "Gaff : Dommage qu'elle doive mourir, mais c'est notre lot à tous."
];

reboot.addEventListener('click', () => {

    text.innerHTML = citations[Math.floor(Math.random() * citations.length)];
})

btn1.addEventListener('click', () => {
    gigaChad.style.display = 'none';
    map.style.display = 'none';
    text.innerHTML = 'Roi Novik : Face à tout le mal que l\'enfer peut enfanter, toute la vilenie que l\'humanité peut produire, nous n\'enverrons contre eux que toi. Massacre-les, jusqu\'au dernier.';
})

btn2.addEventListener('click', () => {
    text.innerHTML = '';
    gigaChad.style.display = 'block';
    map.style.display = 'none';
})

btn3.addEventListener('click', () => {
    text.innerHTML = '';
    gigaChad.style.display = 'none';
    map.style.display = 'block';
})

})