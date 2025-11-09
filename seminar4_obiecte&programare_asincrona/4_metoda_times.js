// String.prototype.capitalizedWrods = function () {
//     return this.replace(/\b[a-z]/g, match => match.toUpperCase())
// }

// console.log("thesse words will be capitalized".capitalizedWrods())

// implementati metoda 'times' pe tipul Number, astfel incat 3.times(()=> {}) sa execute functia de 3 ori

Number.prototype.times = function (callback) {
    const count = Math.floor(this.valueOf()); 
    for (let i = 0; i < count; i++) {
        callback(i); 
    }
};

console.log("executie de 3 ori:");
3..times((i) => {
    console.log(`${i + 1} times`);
});
