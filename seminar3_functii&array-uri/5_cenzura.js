// const sampleDictionary = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy','dog']

// const sampleText = `
//     best
//     read
//     on
//     windy
//     nights
//     `

//     const checkAcrostic = (text,dictionary)=>{
//         const candidate = text.split('\n').filter(e=>e.trim()).map(e=>e[0]).join('')

//         return dictionary.indexOf(candidate) !== -1
//     }

//     console.log(checkAcrostic(sampleText, sampleDictionary))
    
// implementati cenzurarea unei text printr-o functie. functia primeste un sir de caractere si un dictionar sub forma unui array. De exemplu pt sirul "javascript este minunat" si dictionarul ["este"] functia va produce "javascript e**e minunat"
const cenzureazaText = (text, dictionar) => {
    const setCuvinteInterzise = new Set(dictionar.map(w => w.toLowerCase()));

    return text.replace(/\b(\w+)\b/g, (match, cuvant) => {
        const cuvantLower = cuvant.toLowerCase();

        if (setCuvinteInterzise.has(cuvantLower)) {
            const lungime = cuvant.length;

            if (lungime <= 2) {
                return '*'.repeat(lungime);
            }

            const primaLitera = cuvant[0];
            const ultimaLitera = cuvant[lungime - 1];
            const asteriscuri = '*'.repeat(lungime - 2);

            return primaLitera + asteriscuri + ultimaLitera;
        }
        return cuvant;
    });
};

const textOriginal = "Iubesc programarea si imi caut job";
const dictionarInterzis = ["job","programarea"];
const textCenzurat = cenzureazaText(textOriginal, dictionarInterzis);

console.log(textCenzurat);