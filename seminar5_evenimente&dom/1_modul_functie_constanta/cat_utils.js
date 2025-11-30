const lives = 9;

const sound = (nume) => {
    return `Pisica ${nume} face: Miau Miau!`;
}

const eat = (nume, mancare) => {
    return `${nume} mananca ${mancare} in fiecare zi.`;
}

export { 
    lives as VIETI_MAXIME, 
    sound as faZgomot,
    eat
};