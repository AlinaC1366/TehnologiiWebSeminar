// const sampleArray = [1,2,3,4,5]

// const map = (array, transformation)=>{
//     const result = []
//     for(const element of array){
//         result.push(transformation(element))
//     }
//     return result
// }

// console.log(map(sampleArray, (x)=> x*2))

//reimplementat medota reduce (reduceleft) ca o functie globala

const reduce = (sir, functieReductoare, valoareInitiala) => {
    let acumulator = valoareInitiala;
    let indexStart = 0;

    if (valoareInitiala === undefined) {
        if (sir.length === 0) {
            throw new TypeError('err');
        }
        acumulator = sir[0];
        indexStart = 1;
    } else {
        indexStart = 0;
    }

    for (let i = indexStart; i < sir.length; i++) {
        acumulator = functieReductoare(acumulator, sir[i], i, sir);
    }

    return acumulator;
};

const numere = [13, 12, 4];
const suma = reduce(
    numere, 
    (acumulator, valoareCurenta) => acumulator + valoareCurenta, 
    0
); 
console.log(suma);