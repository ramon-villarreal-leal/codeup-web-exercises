// "use strict";

//  typed outMultiple times to get in head.

// do {
//
//     var enterNumber = parseFloat(prompt("input an odd number between 1-50: "));
//
//     if (enterNumber % 2 !== 0 && enterNumber < 50 && enterNumber > 0) {
//         console.log("Number to skip is: " + enterNumber);
//         break;
//     }
// } while (true)
//
//
// for (var i = 1; i < 50; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     if (i === enterNumber) {
//         console.log("Yikes! Skipping number: " + enterNumber);
//         continue;
//     }
//     console.log("Here is an odd number: " + i);
//
// }

// do {
//     var enterNumber = parseFloat(prompt("input a number between 1-50"));
//     if(enterNumber % 2 !== 0 && enterNumber < 50 && enterNumber > 0) {
//         console.log("number to skip is " + enterNumber);
//         break;
//     } else {
//         alert("ya dun goofed boi");
//
//     }
// } while(true);
//
// for(var i = 0; i <= 50; i++) {
//     if(i % 2 === 0) {
//         continue;
//     }
//     if(i ===enterNumber) {
//         console.log("Yikes! Skipping number " + enterNumber);
//         continue;
//     }
//     console.log("Your odd number is " + i);
// }


do {
    var randomNumber = parseFloat(prompt("Enter an odd number between 1-50."))
    if (randomNumber % 2 !== 0 && randomNumber < 50 && randomNumber > 0) {
        console.log("Number to skip is: " + randomNumber);
        break;
    } else {
        alert("Ya dun goofed enter an odd number!");
    }
} while (true)

for (var i = 1; i < 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (i === randomNumber) {
        console.log("Yikes! Skipping number " + randomNumber);
        continue;
    }
    console.log("Your odd number is " + i);
}


