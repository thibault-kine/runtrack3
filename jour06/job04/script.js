document.addEventListener('DOMContentLoaded', () => {

var burgerImg = document.getElementById('burger-img');
var nav = document.getElementById("burger-links");

var isShown = false;
console.log(burgerImg)

burgerImg.addEventListener('click', () => {
    isShown = !isShown;
    console.log(isShown);

    if(isShown) {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        nav.style.fontSize = '20em';
        nav.style.width = '70%';
        nav.style.padding = '10%';
        nav.style.justifyContent = 'space-evenly';
    }
    else {
        nav.style.display = 'none';
    }
})

})