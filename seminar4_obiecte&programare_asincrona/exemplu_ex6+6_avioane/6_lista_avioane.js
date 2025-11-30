const fetch = require('node-fetch');

async function getObjectFromUrl(url) {
    const response = await fetch(url, {
        headers: { 'User-Agent': 'Student-Project-Test/1.0' } 
    });
    
    const text = await response.text();
    try {
        return JSON.parse(text);
    } catch (e) {
        return [];
    }
}

async function getCountryBounds(country) {
    const url = `https://nominatim.openstreetmap.org/search?q=${country}&format=json`;
    
    const object = await getObjectFromUrl(url);

    if (!object || object.length === 0) {
        throw new Error(`Nu am găsit coordonatele pentru: ${country}`);
    }

    return {
        minLat: object[0].boundingbox[0],
        maxLat: object[0].boundingbox[1],
        minLon: object[0].boundingbox[2],
        maxLon: object[0].boundingbox[3],
    };
}

async function getPlanesOverCountry(countryName) {
    console.log(`1. Caut coordonatele pentru ${countryName}...`);
    const bounds = await getCountryBounds(countryName);
    
    console.log(`2. Caut avioane în zona: 
        Lat(${bounds.minLat}-${bounds.maxLat}) 
        Lon(${bounds.minLon}-${bounds.maxLon})...`);
    
    const openSkyUrl = 
    `https://opensky-network.org/api/states/all?
    lamin=${bounds.minLat}&
    lomin=${bounds.minLon}&
    lamax=${bounds.maxLat}&
    lomax=${bounds.maxLon}`;
    const data = await getObjectFromUrl(openSkyUrl);

    return data.states || [];
}

async function main() {
    try {
        const planes = await getPlanesOverCountry('Romania');
        
        console.log(`\n Am găsit ${planes.length} avioane deasupra României ===\n`);

        if (planes.length > 0) {
            console.log("Iată primele 10 avioane găsite:");
            planes.slice(0, 10).forEach(plane => {
                const callsign = plane[1] ? plane[1].trim() : "N/A";
                const origin = plane[2];
                console.log(`✈️  Zbor: ${callsign} \t| Țara: ${origin}`);
            });
        } else {
            console.log("Momentan nu sunt date disponibile sau zona este goală.");
        }

    } catch (error) {
        console.error("Eroare:", error.message);
    }
}

main();