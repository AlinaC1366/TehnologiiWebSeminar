// const formatString = (s, ...format) => {
//     let modified = s
//     for( let i = 0; i < format.length; i++){
//         if(modified.indexOf('{' + i + '}') !== -1 ){
//             modified = modified.replace('{' + i + '}')
//         }
//     }
// }

// console.log(formatString("this is a {0} string and we've {1} it", 'nice', 'formatted'))

//implementati o functie de formatare a unui string care suporta parametrii numiti; de ex "un {substantiv} este {adjectiv}" sa poata fi formatata in "un catel este dragut"
const formatStringNamed = (s, namedArgs) => {
    return s.replace(/{(\w+)}/g, (match, key) => {
        return namedArgs != null && namedArgs.hasOwnProperty(key) ? namedArgs[key] : match;
    });
};

console.log(
    formatStringNamed(
        "un {substantiv} este {adjectiv}", 
        { substantiv: 'catel', adjectiv: 'dragut' }
    )
); 