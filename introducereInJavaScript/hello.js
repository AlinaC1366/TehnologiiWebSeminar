/*cod arrow functions video

//let sayHello = (name) => {
//      return `Hello, ${name}!`;
// }

// mod mai simplu:
let sayHello = (name) => `Hello, ${name}!`;

//process ne da acces la argumentele din linia de comanda
console.log(sayHello(process.argv[2])); // argv[0] ne printeaza calea catre node, argv[1] este calea catre scriptul nostru
*/

//implementare functie arrow care primeste ca parametru un array de string si returneaza un singur string obtinut prin concatenarea string-urilor din array-ul primit ca parametru

let concatenareaUnuiString = (array) => array.join(' ');

let stringRezultat = concatenareaUnuiString(["Alina","joaca","jocuri"]);
console.log(stringRezultat);