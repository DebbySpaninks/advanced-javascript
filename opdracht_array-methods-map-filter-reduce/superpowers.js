const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "140"                                  //stond eerst 1400
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
];

// 1. Maak een array met namen van alle superhelden
const nameOfAllSuperheroes = superheroes.map(heroes => heroes.name);
console.log(nameOfAllSuperheroes);

// 2. Maak een array van alle "lichte" superhelden (<190 pounds)
const allLightWeightSuperheroes = superheroes.filter(heroes => heroes.weight < "190");
console.log(allLightWeightSuperheroes);

// 3. Maak een array met de namen v.d. superhelden die 200 pound wegen (.filter). Return hun namen (.map)
const nameOfAll200PoundSuperheroes = superheroes.filter(heroes => {
    return heroes.weight === "200";
}).map(heroes => {
    return heroes.name;
});
console.log(nameOfAll200PoundSuperheroes);

// 4. Maak een array met alle comics waar de superhelden hun "first appearances" hadden
const allFirstAppearancesComics = superheroes.map(heroes => heroes.first_appearance);
console.log(allFirstAppearancesComics);

// 5. Maak een array met alle superhelden van DC Comics. Gelukt? Herhaal deze functie dan voor Marvel Comics
const dcComics = superheroes.filter(heroes => heroes.publisher === "DC Comics");
const marvelComics = superheroes.filter(heroes => heroes.publisher === "Marvel Comics");
console.log(dcComics, marvelComics);

// 6. Tel het gewicht van alle superhelden (DC Comics) bij elkaar op
const weightDcComics = dcComics.map(heroes => {
    if (heroes.weight !== "unknown") {
        // weights zijn nu strings, vb "200". Deze parsen naar een integer.
        return parseInt(heroes.weight, 10);
    } else {
        return 0; // als gewicht "unknown" is, dan wil je 0 optellen
    }
});
const addTotalWeightDcComics = weightDcComics.reduce((weight1, weight2) => {
    return weight1 + weight2;
});
console.log("TotalWeight of DC Comics:", addTotalWeightDcComics);

// 7. Doe hetzelfde met alle superhelden van Marvel Comics
const weightMarvelComics = marvelComics.map(heroes => {
    if (heroes.weight !== "unknown") {
        // weights zijn nu strings, vb "200". Deze parsen naar een integer.
        return parseInt(heroes.weight, 10);
    } else {
        return 0; // als gewicht "unknown" is, dan wil je 0 optellen
    }
});
const addTotalWeightMarvelComics = weightMarvelComics.reduce((weight1, weight2) => {
    return weight1 + weight2;
});
console.log("TotalWeight of Marvel Comics:", addTotalWeightMarvelComics);

// 8. Bonus: zoek de zwaarste superheld!
const allHeroesWeight = superheroes.map(heroes => {
    const weight = heroes.weight !== "unknown" ? parseInt(heroes.weight) : 0;
    heroes.weight = weight;
    return heroes;
});

const findHeaviestSuperhero = allHeroesWeight.reduce(
    (currentHeaviestHero, currentHero) => {
        if (currentHero.weight > currentHeaviestHero.weight) {
            return currentHero;
        } else {
            return currentHeaviestHero;
        }
    },
    allHeroesWeight[0] // met [0] geef je aan wat de initiele waarde moet zijn vd functie
);
console.log("Heaviest hero: ", findHeaviestSuperhero);

