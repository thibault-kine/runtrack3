function jourTravaille(date) {
    var estFerie = false;
    var estWeekend = false;

    var _date = new Date(date);

    var jour  = _date.getDate();
    var mois  = _date.getMonth();
    var annee = _date.getFullYear();

    listeMois = [
        "Janvier", "Février", "Mars", "Avril", "Mai",
        "Juin", "Juillet", "Août", "Septembre",
        "Octobre", "Novembre", "Décembre"
    ];

    if((jour == 1 && mois == 0)  || (jour == 13 && mois == 3)  ||
       (jour == 1 && mois == 4)  || (jour == 8 && mois == 4)   ||
       (jour == 21 && mois == 4) || (jour == 1 && mois == 5)   ||
       (jour == 14 && mois == 6) || (jour == 15 && mois == 7)  ||
       (jour == 1 && mois == 10) || (jour == 11 && mois == 10) || (jour == 25 && mois == 11))
    {
        estFerie = true;
    }
    else if(_date.getDay() == 6 || _date.getDay() == 0) {
        estWeekend = true;
    }

    if(estFerie) {
        console.log(`Le ${jour} ${listeMois[mois]} ${annee} est un jour ferié.`);
    }

    if(estWeekend) {
        console.log(`Non, le ${jour} ${listeMois[mois]} ${annee} est un jour de week-end.`);
    }
    else if(!estFerie) {
        console.log(`Oui, le ${jour} ${listeMois[mois]} ${annee} est un jour de travail.`);
    }
}

jourTravaille("17 Janvier 2022");