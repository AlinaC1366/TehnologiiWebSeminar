/*cod din video:

//parametrii nu au un type, noi suntem responsabili sa punem ce este nevoie
//o functie care nu returneaza nimic, returneaza undefined
function checkDivisible(n,divisor){
    // % are propria lui conditie cu true false ->  0 = false, 1 = true 
    //deci daca conditia este falsa, intra pe ramura de true
    if(n % divisor ){
        return false
        //console.log("Impartirea are rest");
    }else{
        return true
        //console.log("Sunt divizori.");
    }
}

console.log(checkDivisible(10,2))
console.log(checkDivisible(10,3))
*/

//functie care returneaza nr de caractere diferite intre doua string-uri de aceeasi lungime primite ca paremetrii. daca string-urile primite nu sunt de aceeasi lungime, functia va returna -1

function caractDiferite(stringA, stringB){
    if(stringA.length != stringB.length){
        return -1;
    }

    let n = stringA.length;
    let contor=0;
    

    for(let i=0; i<n; i++){
        if(stringA[i]!=stringB[i]){
            contor++
        }
    }

    return contor;
}

console.log(caractDiferite("Alina","Alin"));
console.log(caractDiferite("Alina","Adina"));
console.log(caractDiferite("salut","bunaa"));   