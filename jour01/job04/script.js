function bissextile(annee) {
    /***
     * Cas 1: l'année est divisible par 4 sans l'être par 100,
     * Cas 2: l'année est divisible par 400.
     */
    if(annee % 4 == 0 && annee % 100 != 0 || annee % 400 == 0) {
        return true;
    }
    else {
        return false;
    }

    // On peut aussi mettre tout en une ligne comme ça, mais c'est pas lisible
    // return (annee % 4 == 0 && annee % 100 != 0 || annee % 400 == 0);
}

console.log(bissextile(2400));