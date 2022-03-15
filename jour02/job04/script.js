document.addEventListener('DOMContentLoaded', (event) => {

let textareaElement = document.getElementById('keylogger');

function addCharTo(char, element) {
    element.textContent += char;
    console.log(`${char} ajouté (type: ${typeof(char)})`);
}

document.addEventListener('keydown', addCharTo((event.key), textareaElement));

});