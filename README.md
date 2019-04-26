# README

Projet JQuery. Demander à un utilisateur le nombre de notes dont il souhaite calculer la moyenne. Afficher Autant d'inputs que ce que l'utilisateur a demandé et afficher la moyenne simultanément (elle se met à jour automatiquement selon les entrées de l'utilisateur).

## Table des matières

1. [Code global](#code-global)
2. [Demander le nombre de notes](#demander-le-nombre-de-notes)
3. [Afficher les inputs](#afficher-les-inputs)
4. [Afficher la moyenne](#afficher-la-moyenne)

## <a href="code-global">Code global</a>

### HTML

Importer les **librairies CSS** de BootStrap (BS4) :

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

Importer les **librairies JavaScript** de BootStrap (BS4) :

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

Dans le body, le code doit être imbriqué dans un **formulaire** (transmision des données au serveur) et un **div** (éléments centrés au milieu de la page)

    <form action="/action_page.php" method="get">
        <div class="container">
        ...
        </div>
    </form>

### JQuery

Toutes les instructions JQuery doivent être imbriquées dans un ciblage global qui se lance dès que la page a fini de charger :

    $(document).ready(function () {
        ...
    })

## <a href="demander-le-nombre-de-notes">Demander le nombre de notes</a>

### HTML



### JQuery



## <a href="afficher-les-inputs">Afficher les inputs</a>

### HTML



### JQuery



## <a href="afficher-la-moyenne">Afficher la moyenne</a>

### HTML



### JQuery

