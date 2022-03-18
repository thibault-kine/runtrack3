<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="style.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</head>
<body>

<form id="select-by">
    <label>Trier par: </label>

    <label for="by-id">ID</label>
    <input type="radio" name="select-by" id="by-id" value="0">

    <label for="by-name">Nom</label>
    <input type="radio" name="select-by" id="by-name" value="1">

    <label for="by-type">Type</label>
    <input type="radio" name="select-by" id="by-type" value="2">
</form>

<form id="form">
    <label for="id">ID: </label>
    <input type="number" name="id" class="field">
    
    <label for="name">Nom: </label>
    <input type="text" name="name" class="field">

    <label for="type">Type: </label>
    <select name="type" class="field" id="type">
        <option value="Normal">Normal</option>
        <option value="Grass">Plante</option>
        <option value="Water">Eau</option>
        <option value="Fire">Feu</option>
        <option value="Electric">Electrik</option>
        <option value="Flying">Vol</option>
        <option value="Psychic">Psy</option>
        <option value="Fighting">Combat</option>
        <option value="Poison">Poison</option>
        <option value="Bug">Insecte</option>
        <option value="Rock">Roche</option>
        <option value="Ground">Sol</option>
        <option value="Ghost">Spectre</option>
        <option value="Ice">Glace</option>
        <option value="Dragon">Dragon</option>
        <option value="Fairy">Fée</option>
    </select>

    <input type="button" value="Filtrer" id="filtrer">
</form>
    
</body>
</html>