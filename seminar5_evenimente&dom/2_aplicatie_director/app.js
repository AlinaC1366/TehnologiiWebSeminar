const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const dirName = 'test_folder';
const fileName = path.join(dirName, 'salut.txt');

if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
    console.log(`Directorul '${dirName}' a fost creat.`);
}

fs.writeFileSync(fileName, 'Bubuim in 3 secunde.');
console.log(`fisierul '${fileName}' a fost creat.`);

console.log("Asteptam");

setTimeout(() => {
    
    rimraf(dirName, (error) => {
        if (error) {
            console.error("A apărut o eroare la ștergere:", error);
        } else {
            console.log(`Directorul '${dirName}' a fost sters cu succes!`);
        }
    });

}, 30000);