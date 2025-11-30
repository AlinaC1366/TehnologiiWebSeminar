// Implementați o funcție care face compresie RLE (Run Length Encoding) asupra unui fișier text. 

const fs = require('fs').promises; 

function compressStringRLE(text) {
    if (!text) return "";

    let encoded = "";
    let count = 1;

    for (let i = 0; i < text.length; i++) {
        if (i < text.length - 1 && text[i] === text[i + 1]) {
            count++;
        } else {
            encoded += text[i] + count;
            count = 1;
        }
    }
    return encoded;
}

async function main() {
    const inputFile = 'input.txt';
    const outputFile = 'output_rle.txt';

    try {
        console.log(`Se citeste fisierul ${inputFile}...`);
        const data = await fs.readFile(inputFile, 'utf-8');

        console.log(`   -> Text original: "${data}"`);
        console.log(`   -> Lungime originală: ${data.length} caractere`);

        console.log("Se aplica compresia");
        const compressedData = compressStringRLE(data);

        console.log(`   -> Text comprimat: "${compressedData}"`);
        console.log(`   -> Lungime comprimată: ${compressedData.length} caractere`);

        console.log(`Se scrie rezultatu in ${outputFile}...`);
        await fs.writeFile(outputFile, compressedData);
        
        console.log("Succes!");

    } catch (error) {
            console.error("A apărut o eroare:", error.message);
        }
    }

main();