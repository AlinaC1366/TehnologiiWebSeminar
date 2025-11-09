    // const sortObjects = (array, key) => {
    //     return array.sort((a,b) => {
    //         if(a[key] < b[key]){
    //             return -1;
    //         } else{
    //             return 1;
    //         }
    //     })
    // }

    // const laptops = [
    //     {
    //         brand: "Hp",
    //         processor: "i7",
    //         ram:32
    //     },
    //     {
    //         brand: "lenovo",
    //         processor: "i5",
    //         ram: 8
    //     },
    //     {
    //         brand: "acer",
    //         processor: "i9",
    //         ram: 16
    //     }
    // ]

    // const result = sortObjects(laptops,"ram");
    // console.log("result: ", result);

    //scrieti o functie care primeste un array de obiecte si un string si returneaza array ul sortat dupa cheia speficiata prin string

    const sortObjects = (array, key) => {
        return array.sort((a, b) => {
            const valA = a[key];
            const valB = b[key];

            if (valA < valB) {
                return -1;
            } 
            if (valA > valB) {
                return 1;
            }
            return 0;
        });
    }

    const animale = [
        {
            nume: "Bobo",
            specie: "Caine",
            varsta: 2
        },
        {
            nume: "Pici",
            specie: "Pisica",
            varsta: 1.5
        },
        {
            nume: "Miti",
            specie: "Pisica",
            varsta: 6
        },
        {
            nume: "Sarah",
            specie: "Caine",
            varsta: 12
        }
    ];

    const sortateDupaVarsta = sortObjects(animale, "varsta");
    console.log(sortateDupaVarsta);