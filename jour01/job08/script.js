function sommeNombresPremiers(a, b) 
{
    a = Number(a);
    b = Number(b);
    
    isPrime = true;

    // 1 ne compte pas comme un nombre premier
    if(a > 1 && b > 1) {
        for(i = 2; i < a, i < b; i++) {
            if(a % i == 0 && b % i == 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime) {
            return a + b;
        }
        else {
            console.log("L'un des nombres n'est pas premier.");
            return false;
        }
    }
}

console.log(sommeNombresPremiers(5, 7));