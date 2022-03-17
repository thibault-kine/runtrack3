$(document).ready(function () {
    
function jsonValueKey(json, key) { return json[key]; }

let json = {
    name: "La Plateforme_", 
    address: "8 rue d'Hozier", 
    city: "Marseille", 
    nb_staff: "11", 
    creation: "2019"
};

console.log(jsonValueKey(json, 'city'))
});