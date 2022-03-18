$(document).ready(() => {

let radios = document.getElementsByName('select-by');
let filterForm = document.getElementById('form');

console.log(radios);
console.log(filterForm);

filterForm.style.display = 'none';

for(i = 0; i < radios.length; i++) {
    if(radios[i].click()) {
        console.log(radios[i].value);
        break;
    }
}

});