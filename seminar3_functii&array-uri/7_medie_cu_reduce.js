//dat fiind un array de numere scrieti o functie pentru a calcula media lor folosind reduce 
const calculeazaMedie = (array) => array.length === 0 ? 0 : array.reduce((acc, val) => acc + val, 0) / array.length;

const numere = [13, 12, 4];
const medie = calculeazaMedie(numere);

console.log(medie);