// "use strict";




// #1Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable (num) {
    for(var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
    return num;
}
console.log(showMultiplicationTable(6));




// # 3 Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
// OUTPUT EXPECTED..
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd

// Justins answwer
//     function generateRandomNumber(min,max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//
//     function isEven(num) {
//         return num % 2 === 0;
//     }
//
//     function returnEvenOddMessage(isEven,num) {
//         return isEven(num) ? num + " is even" : num + " is odd";
//     }
//
//     function displayRandomNumbers(generateRandomNumber, isEven, returnEvenOddMessage, numberOfRandoms, min, max) {
//         var output = "";
//         var random;
//         for(var i = 1; i <= numberOfRandoms; i += 1) {
//             random = generateRandomNumber(min, max);
//             output += returnEvenOddMessage(isEven, random);
//             output += "\n";
//
//         }
//         return output;
// }
//     console.log(displayRandomNumbers(generateRandomNumber, isEven, returnEvenOddMessage, 10, 20, 200));

    // my answer
    for (var i = 1; i <= 10; i++) {
        var randomNumber = Math.floor(Math.random() * 180) + 20;
        if(randomNumber % 2 === 0) {
            console.log(randomNumber + " number is even");
        } else {
            console.log(randomNumber + " number is odd");
        }
    }



// for(var i = 0; i < 10; i++) {
//     console.log(i);
//     for(var i = 0; i < 10; i++) {
//         console.log()
//     }
// }

// # 4 original answer
// var doubleUp = "";
// for (var i = 1; i <= 9; i++) {
//     console.log(i);
// }
// for (var j = i; j <= i; j++) {
//     console.log(j);
// } if(j===9 && i===9) {
//     doubleUp += i;
// } else {
//     doubleUp += i;
// }
//GOES backwards
// for (var i = 9; i >= 1; i--) {
//     var retVal = "";
//     for (var j = 1; j <= i; j++) {
//         retVal += i;
//     }
//     console.log(retVal);
// }



// # 4 answer
for (var i = 1; i <= 9; i += 1) { //i++ same for end of for
    var retVal = "";
    for (var j = 1; j <= i; j +=1) { // j++ same for end of for
        retVal += i;
    }
    console.log(retVal);
}

//5 answer

for (var i = 100; i > 0; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}





