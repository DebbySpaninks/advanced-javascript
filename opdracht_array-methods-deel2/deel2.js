// -A-
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }];

const findSpiderMan = function (hero) {
    return hero.name === "Spiderman";
}
console.log(superheroes.find(findSpiderMan));
// result: { name: 'Spiderman', alter_ego: 'Peter Parker' }

// -B-
const doubleArrayValues = function (array) {
    return array.map(number => number * 2);
};
console.log("double values: ", doubleArrayValues([1, 2, 3]));
// result: double values: [2, 4, 6]

// -C- 
const containsNumberBiggerThan10 = function (array) {
    return array.some(number => number > 10);
};
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])); // result: true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2])); // result: false

// -D-
const isItalyInTheGreat7 = function (array) {
    return array.includes("Italy");
}
console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));
// result: true

// -E-
const tenfold = function (array) {
    return array.map(number => number * 10);
};
console.log("tenfold: ", tenfold([1, 4, 3, 6, 9, 7, 11]));
// result: tenfold: [10, 40, 30, 60, 90, 70, 110]

// -F-
const isBelow100 = function (array) {
    return array.every < 100;
}
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]));
// result: false

// -G Bonus-
const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const bigSum = (accumulator, number) => accumulator + number;
console.log("total of bigSum: ", numbers.reduce(bigSum));
  // result: total of bigSum: 1118