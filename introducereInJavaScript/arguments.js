/*cod din video: 

// function addToArray(){
//     let args = arguments;
//     let array = args[0];
//     //vrem sa adaugam in array celelalte var din arg
//     for( var i = 1; i < args.length; i++){
//         array.push(args[i]);//adaugam la sf array
//     }
//     return array;
// }

//avem un nr variabil de arg - argumentele care se pot repeta/pot fi in nr variabil = ...args
//
function addToArray(array, ...args){
    for( var i = 0; i < args.length; i++){
        array.push(args[i]);
    }
    return array;
}
let array = ["a"];

console.log(addToArray(array,"b","c").join(","));

*/

// functie care primeste ca parametrii doua array uri de aceeasi lungime si returneaza un array cu elementele din cele doua surse intercalate

function intercalare(array1, array2) {
    let rezultat = [];

    if(array1.length !== array2.length) return null;

    for(let i = 0; i < array1.length; i++){
        rezultat.push(array2[i]);
        rezultat.push(array1[i]);
    }
    return rezultat;
}
let a = [3,6,7];
let b = [1,2,4];

console.log(intercalare(a,b));