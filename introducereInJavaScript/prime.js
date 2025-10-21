/* cod din video:
const checkPrime = (n) => {
    for ( let i = 2; i<= Math.sqrt(n); i++){
        if(!(n%i)){
            return false
        }
    }
    return true
}

if(process.argv.length <3 ){
    console.log('not enough params')
}else{
    //trb sa parsam pentru 
    console.log(checkPrime(parseInt(process.argv[2])));
}*/

// functie care calc el de un anumit ordin al sirului lui fibonacci,primind acest ordin ca parametru de linie de comanda

const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

if (process.argv.length < 3) {
    console.log('not enough params');
} else {
    const n = parseInt(process.argv[2]);
    console.log(fibonacci(n));
}
