/*cod din video:

// const getTotalArea = (squareDimensions) => {
//     return squareDimensions.map((side)=> {
//         return side * side;
//     }).reduce((prev, current)=>{
//         return prev+current;
//     }, 0 )
// };

const getTotalArea = (squareDimensions) => {
    squareDimensions.map((side)=> side * side)
    .reduce((prev, current)=>prev+current, 0)
};

const squareDimensions = [3,5,12,3,5,3];

const result = getTotalArea(squareDimensions);
console.log("result: ", result);
*/
//functie care primeste ca parametrii un array de nr si un nr si returneaza suma tuturor numerelor din arary divizibile cu cel de-al doilea parametru

const sumDivisible = (numbers, divisor) => {
    return numbers
        .filter(num => num % divisor === 0)
        .reduce((sum, num) => sum + num, 0);
};

const nums = [2, 3, 4, 6, 9, 12, 15];
const result = sumDivisible(nums, 3);

console.log("result:", result);
