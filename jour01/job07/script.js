function jourTravaille(date) 
{
    // formatte la date en paramètre vers une variable de type Date
    var _date = new Date(date);

    jour  = _date.getDate(); // récupère le numéro du jour (1-31)
    mois  = _date.getMonth(); // récupère le numéro du mois (0-11)
    annee = _date.getFullYear(); // récupère l'année complète (1900-2XXX)

    listeMois = [
        "Janvier", "Février", "Mars", "Avril", "Mai",
        "Juin", "Juillet", "Août", "Septembre",
        "Octobre", "Novembre", "Décembre"
    ];

    //      Jour de l'an         ||      Lundi de Pâques       ||
    if((jour == 1 && mois == 0)  || (jour == 13 && mois == 3)  ||
    //     Fête du travail       ||      Victoire 1945         ||
       (jour == 1 && mois == 4)  || (jour == 8 && mois == 4)   ||
    //       L'Ascension         ||        Pentecôte           ||
       (jour == 21 && mois == 4) || (jour == 1 && mois == 5)   ||
    //      Fête Nationale       ||        Assomption          ||
       (jour == 14 && mois == 6) || (jour == 15 && mois == 7)  ||
    //        Toussaint          ||         Armistice          ||            Noël
       (jour == 1 && mois == 10) || (jour == 11 && mois == 10) || (jour == 25 && mois == 11))
    {
        // Si le jour tombe bien dans la liste des jours feriés
        console.log(`Le ${jour} ${listeMois[mois]} ${annee} est un jour ferié.`);
    }
    else if(_date.getDay() == 6 || _date.getDay() == 0) {
        // Si le jour tombe un week-end (Samedi & Dimanche / 6 & 0)
        console.log(`Non, le ${jour} ${listeMois[mois]} ${annee} est un jour de week-end.`);
    }
    else {
        // Si le jour tombe sur un jour qui n'est pas ferié, ni en week-end
        console.log(`Oui, le ${jour} ${listeMois[mois]} ${annee} est un jour de travail.`);
    }
}

jourTravaille("17 Janvier 2022");