"use strict";


do {

    var enterNumber = parseFloat(prompt("input an odd number between 1-50: "));

    if (enterNumber % 2 !== 0 && enterNumber < 50 && enterNumber > 0) {
        console.log("Number to skip is: " + enterNumber);
        break;
    }
} while (true)


for (var i = 1; i < 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (i === enterNumber) {
        console.log("Yikes! Skipping number: " + enterNumber);
        continue;
    }
    console.log("Here is an odd number: " + i);

}
