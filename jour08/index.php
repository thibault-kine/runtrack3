<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</head>
<body>

<header>
    <nav>
        <div class="nav-wrapper">
            <a href="index.php" class="brand-logo center">Logo</a>
            <form class="left">
                <div class="input-field">
                    <input id="search" type="search" required>
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">×</i>
                </div>
            </form>
            <ul class="right">
                <li><a href="index.php">Accueil</a></li>
                <li><a href="index.php">Inscription</a></li>
                <li><a href="index.php">Connexion</a></li>
            </ul>
        </div>
    </nav>
</header>

<form action="#">
    <h3>Votre civilité:</h3>
    <p>
        <label>
            <input name="group1" type="radio" checked />
            <span>Monsieur</span>
        </label>
    </p>
    <p>
        <label>
            <input name="group1" type="radio" />
            <span>Madame</span>
        </label>
    </p>
    <p>
        <label>
            <input name="group1" type="radio" />
            <span>Mademoiselle</span>
        </label>
    </p>
    <p>
        <label>
            <input name="group1" type="radio" />
            <span>Autre:
            <input placeholder="Civilité" id="civility" type="text" class="validate">
            <label for="civility">Civilité</label>
            </span>
        </label>
    </p>
</form>

<div class="row">
    <h3>Vos coordonnées:</h3>
    <form class="col s12">
        <div class="row">
            <div class="input-field col s6">
                <input id="first_name" type="text" class="validate">
                <label for="first_name">Prénom</label>
            </div>
            <div class="input-field col s6">
                <input id="last_name" type="text" class="validate">
                <label for="last_name">Nom</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <input type="text" class="validate">
                <label for="disabled">Adresse</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <input id="password" type="password" class="validate">
                <label for="password">Mot de passe</label>
            </div>
            <div class="input-field col s12">
                <input id="password" type="password" class="validate">
                <label for="password">Confirmation</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <input id="email" type="email" class="validate">
                <label for="email">Email</label>
            </div>
        </div>
    </form>
</div>

<form action="#">
    <h3>Vos passions:</h3>
    <p>
        <label>
            <input type="checkbox" />
            <span>Sport</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox"/>
            <span>Informatique</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" />
            <span>Lecture</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" />
            <span>Arts graphiques</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" />
            <span>Arts du son</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" />
            <span>Cuisine</span>
        </label>
    </p>
</form>
    
</body>
</html>