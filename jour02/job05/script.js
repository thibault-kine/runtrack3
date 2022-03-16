document.addEventListener('DOMContentLoaded', (event) => {

const BODY_MIN_HEIGHT = 4096;
let footerElement = document.getElementsByTagName('footer')[0];

document.addEventListener('scroll', (event) => { 
    let scrollPercent = ((scrollY / BODY_MIN_HEIGHT) * 100) * 1.19;
    footerElement.style.width = scrollPercent + "%"; 
});

});