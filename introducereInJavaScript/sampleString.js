/* cod din video:
const sampleString = 'the quick brown fox jumps over the lazy dog'

const getCounts = (text) => {
    const words = text.split(' ')
    const result = {}
    for(let word of words){
        if(word in result){
            result[word]++
        }else{
            result[word]=1;
        }
    }

    for(let word in result){
        result[word]/=words.length
    }
    return result
}
console.log(getCounts(sampleString));
*/

//functie care calculeaza frecventele de aparitie a unor litere intr un text, excluzand caracterul pentru spatii 

const sampleString = 'the quick brown fox jumps over the lazy dog';

const getLetterFrequencies = (text) => {
    const result = {};
    const letters = text.replace(/\s/g, '').split('');

    for (let letter of letters) {
        if (letter in result) {
            result[letter]++;
        } else {
            result[letter] = 1;
        }
    }

    for (let letter in result) {
        result[letter] /= letters.length;
    }

    return result;
}

console.log(getLetterFrequencies(sampleString));
