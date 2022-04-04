<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="https://laplateforme.io">LPTF</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="https://laplateforme.io">Accueil</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Units</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Jobs</a>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled">Skills</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</header>

<main class="container-fluid">

<h1 class="display-6 text-center">LaPlateforme_</h1>

<div class="container-fluid col-container">
    <div class="row justify-content-between">
        <div class="container col-2 card rounded-1" style="margin: 0; padding: 0;">
            <img src="papillon.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Un Papillon</h5>
                <p class="card-text">Un papillon, c'est comme une chenille mais avec des ailes. Ne pas ingérer.</p>
                <a id="summon-modal" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">Commandez votre propre papillon</a>
            </div>
        </div>

        <div class="modal" id="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>

        <div class="jombotron container col-8 rounded-1" style="padding-top: 6%; padding-bottom: 6%;">
            <h1 class="display-5">Bonjour, monde!</h1>
            <img src="chad.jpg" id="chad" style="display: none;">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46453.05181345715!2d5.350560978867255!3d43.30764945832944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c13ddc0211b9%3A0xd1642ae4b32c4bc4!2sEcole%20La%20Plateforme%2C%20le%20Campus%20M%C3%A9diterran%C3%A9en%20du%20Num%C3%A9rique!5e0!3m2!1sfr!2sfr!4v1648037787368!5m2!1sfr!2sfr" width="600" height="450" style="border:0; display: none;" allowfullscreen="" loading="lazy" id="maps"></iframe>
            <p class="lead small border-bottom border-2" id="jumb-text">
                Il existe plusieurs visions du terme: <br>
                Le monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'expérience ou la raison.<br>
                Le sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son environnement plus ou moins naturel.<br> 
            </p>

            <p>
                Le sens étendu désigne l'univers dans son ensemble.
            </p>
            <button class="btn btn-danger" id="reboot">Rebooter le monde</button>

            <div class="btn-group flex-row float-end" role="page-bar" aria-label="Pages">
                <button type="button" class="btn btn-outline-secondary text-primary bg-white"><<</button>
                <button type="button" class="btn btn-outline-secondary text-primary bg-white" id="1">1</button>
                <button type="button" class="btn btn-outline-secondary text-primary bg-white" id="2">2</button>
                <button type="button" class="btn btn-outline-secondary text-primary bg-white" id="3">3</button>
                <button type="button" class="btn btn-outline-secondary text-primary bg-white">>></button>
            </div>
        </div>

        <div class="container col-1 card rounded-1 nav flex-column btn-group-vertical" style="margin: 0; padding: 0;">
                <button type="button" class="btn btn-primary text-start">Limbes</button>
                <button type="button" class="btn text-start">Luxure</button>
                <button type="button" class="btn text-start">Gourmandise</button>
                <button type="button" class="btn text-start">Avarice</button>
                <button type="button" class="btn text-start">Colère</button>
                <button type="button" class="btn text-start">Hérésie</button>
                <button type="button" class="btn text-start">Violence</button>
                <button type="button" class="btn text-start">Ruse et Tromperie</button>
                <button type="button" class="btn text-start">Trahison</button>
                <button type="button" class="btn text-start">Internet Explorer</button>
        </div>
    </div>
</div>

<div class="container my-4 mx-auto" style="width: 60%;">
    <p class="text-end fw-bold">Installation de AI 9000</p>
    <div class="progress">
        <div class="progress-bar progress-bar-striped bg-warning progress-bar-animated" style="width: 90%;" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>

<div class="container col-container bg-transparent">
    <div class="row justify-content-between">
        <div class="col-4">
            <p class="text-start fw-bold">Recevez votre copie gratuite d'Internet 2!</p>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Login" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="eMail" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">@example.com</span>
            </div>

            <p class="text-start">URL des Internet 2 et 2.1 Beta</p>
            <div class="input-group mb-3">
            <span class="input-group-text">DogeCoin</span>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
            <span class="input-group-text">.00</span>
            </div>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">https://l33t.lptf/dkwb/berlusconimkt/</span>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
            </div>
        </div>

        <div class="col-2">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
</div>

</main>

</body>
</html>