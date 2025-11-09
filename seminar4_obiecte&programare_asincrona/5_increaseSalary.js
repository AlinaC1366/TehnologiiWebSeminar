// const orderCoffee = (type) => {
//     const types = {
//         REGULAR: 'REGULAR',
//         SPECIAL: 'SPECIAL'
//     }

//     if ( Object.values(types).indexOf(type) === -1){
//         throw new Error('coffee error')
//     }else{
//         console.log(`preparing ${type} coffee`)
//     }
// }

// try{
//     orderCoffee('REGULAR')
//     orderCoffee('SWEET_COFFEE_NO_SUGAR')

// } catch (err) {
//     console.log(err)
// }

// implementati functia increaseSalary care primeste ca parametrii un array de salarii si un nr reprezentand procentul cu care se va mari(ex 10). Functia arunca exceptii daca primul parametru nu este un array sau al doilea par nu este un nr 

const increaseSalary = (salaries, percentage) => {
    if (!Array.isArray(salaries)) {
        throw new Error('err salariu invalid');
    }

    if (typeof percentage !== 'number' || isNaN(percentage)) {
        throw new Error('err procent invalid');
    }

    const multiplier = 1 + (percentage / 100);

    return salaries.map(salary => {
        if (typeof salary !== 'number' || isNaN(salary)) {
            return salary; 
        }
        return salary * multiplier;
    });
};

const salariiInitiale = [1000, 2500, 4000];
const procentMarire = 13; 

try {
    const salariiMarite = increaseSalary(salariiInitiale, procentMarire);
    console.log(salariiMarite);
} catch (err) {
    console.log(err.message);
}

try {
    increaseSalary('nu sunt un array', 10);
} catch (err) {
    console.log(err.message);
}

try {
    increaseSalary(salariiInitiale, 'zece');
} catch (err) {
    console.log(err.message);
}