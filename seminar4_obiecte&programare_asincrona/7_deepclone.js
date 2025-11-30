// Funcția simplă de Deep Clone
function deepClone(obiect) {
    return JSON.parse(JSON.stringify(obiect));
}

const pisica1 = {
    nume: "Tom",
    detalii: {
        varsta: 3,
        mancare: "Peste"
    }
};

const pisica2 = deepClone(pisica1);

pisica2.nume = "Garfield";
pisica2.detalii.mancare = "Lasagna";

console.log("Pisica 1 (Original):", pisica1.nume, "-", pisica1.detalii.mancare);
console.log("Pisica 2 (Clona):   ", pisica2.nume, "-", pisica2.detalii.mancare);
