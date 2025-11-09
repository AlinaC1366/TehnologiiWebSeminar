/* cod din video:
const words = [ 
    "fox", "wolf", "snake", "crocodile", "lion", "cat", "crocodile", "horse"
];

const forbiddenWord = "crocodile";
const minLength = 4;

// const filterWords = (words, forbiddenWord, minLength) => {
//     const result = words.filter((word) => {
//         if(word !== forbiddenWord && word.length >= minLength){
//             return true;
//         }
//         return false;
//     });
//     return result;
// };

const filterWords = (words, forbiddenWord, minLength) => 
    words.filter((word) => 
        word !== forbiddenWord && word.length >= minLength);

console.log(filterWords(words,forbiddenWord,minLength)); */

//procesarea unui array de numere reprezentand ani obtinand varstele peste 18 ani cu map si filter

const years = [2004, 2009, 1999, 2005, 2002, 1994, 2015, 2024, 2011, 2020]
const currentYear = 2025;

// daca vrem doar varsta sa apara

// const getAdultAges = (years) => 
//     years
//         .map(year => currentYear - year)
//         .filter(age => age >= 18);

// console.log(getAdultAges(years));

//si anu si varsta
const getAdultInfo = (years) => 
    years
        .filter(year => currentYear - year >= 18)
        .map(year => `${year} (${currentYear - year} ani)`);

console.log(getAdultInfo(years));

