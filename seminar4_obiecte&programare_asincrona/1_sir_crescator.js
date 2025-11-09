class Stream {
    //membrii clasei pot avea vizib publica sau privata
    #value;  //declararea unui membru privat - valoarea curenta a streamului
    #nextValue; //functie producator
    static #count = 0; //contor


    //crearea instantelor de clase se face cu ajutorul constructorului
    //constructor (valoarea de pornire, si o functie care as produca nextValue)
    constructor(value, nextValue){
        //suntem obligati sa ne referim la .this pt ca doar in acest context exista obiectele noastre
        this.#value = value;
        this.#nextValue = nextValue
        //#count++ nu merge, trb sa punem stream pentru ca nu exista in alt context
        Stream.#count++;
    }
    //un getter care sa intoarca valoare
    get value(){
        return this.#value;
    }
    get next(){
        this.#value = this.#nextValue(this.value);
        return this.#value;
    }

    static get count(){
        return Stream.#count;
    }
}
/*
    //vrem sa extindem acest stream pentru a face un string constant 
class ConstantStream extends Stream {
    constructor(value){
        //apelam clasa de baza prin super, ii dam valoarea de pornire si un producator de valoare care intoarce aceasta valaore
        super(value, value => value);
    }
}
 // clasa care sa returneze o secventa de nr intregi
class NextIntegerStream extends Stream{
constructor(){
        super(0, value => value + 1 );
    }
}
const constant = new ConstantStream(1);
const nextInteger = new NextIntegerStream();
//vrem 10 valori din secv
for(let i = 0; i < 10; i++){
    console.log(`constant[${i}] = ${constant.next}`);
    console.log(`nextInteger[${i}] = ${nextInteger.next}`);
}

console.log(Stream.count);
*/

//implementati un tip obiectual care implementeaza un sir crescator avand ca elemente toate numerele pare pornind de la o valoare data.
//constructorul primeste valoarea initiala a secventei. singura metoda este 'next' care calculeaza urmatoarea valoare din sir
// Clasa care extinde Stream pentru a returna o secvență de numere pare

class EvenStream extends Stream {
    constructor(startValue) {
        const oddValue = startValue % 2 === 0 ? startValue : startValue + 1;
        const nextEvenValue = (currentValue) => currentValue + 2;
        super(oddValue, nextEvenValue);
    }
}

const testEven = new EvenStream(13);
console.log(testEven.next);
console.log(testEven.next);
console.log(testEven.next);
console.log(testEven.next);