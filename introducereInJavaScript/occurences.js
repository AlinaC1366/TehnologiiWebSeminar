/*cod din video: 

//vrem sa numaram cate caractere din textul primit 
// function occurences(text,character){
//     let count =0;
//     for(var i=0;i<text.length;i++){
//         if(text.charAt(i)===character){
//             count++
//         }
//     }
//     return count;
// }

// function occurences(text, character){
//     return text.split(character).length -1; //car este ca si operator de separatie intre doi operanzi
// }

let occurences =(text, character) => text.split(character).length-1;

console.log(occurences("sample text","e"));
*/

//functie care primeste ca parametru o lista de nr si returneaza un array continand acele numere

//var 1 cu rest operator care transforma argumentele functiei automat in array 
function arrayRest(...lista){
    let array = [];
    for (let i = 0; i < lista.length; i++){
        array[i]=lista[i];
    }

    return array;
}

console.log("rest:",arrayRest(2,3,4,5,6));

let arrayString = ( string ) => string.split(',').map(Number); //daca nu punem map, o sa fie un array de string uri
console.log("string:", arrayString("1,2,3,4,5"));


