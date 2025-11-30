// function fibGen(){
//     const cache = [1,1]
//     const fib = (index) => {
//         if(index < cache.length){
//             console.log('found' + index)
//             return cache[index]
//         } else {
//             console.log('calculated' + index)
//             cache[index] = fib(index - 1) +fib(index -2)
//             return cache[index]
//         }
//     }
//     return fib
// }

// const fib = fibGen()
// console.log(fib(1))
// console.log(fib(5))
// console.log(fib(3))

//implementati o varianta recusriva a unei functii de exponientere. atat rezultatele finale cat si cele intermediare vor fi memorizate

function powerGen() {
    const cache = {};

    const power = (base, exponent) => {
        if (exponent === 0) {
            return 1;
        }

        const key = `${base}^${exponent}`;
        if (cache[key] !== undefined) {
            return cache[key];
        }

        if (exponent < 0) {
            cache[key] = 1 / power(base, -exponent);
            return cache[key];
        }

        cache[key] = base * power(base, exponent - 1);
        return cache[key];
    };

    return power;
}

const power = powerGen();

console.log(power(2, 3)); 
console.log(power(2, 5)); 
console.log(power(3, 2)); 
console.log(power(2, 3));