// -A-
const addTheWordCool = function (array) {
    array.push("cool");
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// -B-
const amountOfElementsInArray = function (array) {
    return array.length;
}
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

// -C-
const selectBelgiumFromBenelux = function (array) {
    return array[0];
}
console.log(selectBelgiumFromBenelux(['Belgie', 'Nederland', 'Luxemburg']));

// -D-
const lastElementInArray = function (array) {
    return array[array.length - 1];
}
console.log(lastElementInArray(['haas', 'cavia', 'kip', 'schildpad']));

// -E-
const presidents = ["Trump", "Obama", "Bush", "Clinton"]
const impeachTrumpSlice = function (array) {
    return presidents.slice(1, 4);
};
const impeachTrumpSplice = function (array) {
    return presidents.splice(1, 4);
};
console.log(impeachTrumpSlice(presidents));
console.log(impeachTrumpSplice(presidents));

// -F-
const stringsTogether = function (array) {
    return array.join(" ");
};
console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));

// -G-
const combineArrays = function (array1, array2) {
    return array1.concat(array2);
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
