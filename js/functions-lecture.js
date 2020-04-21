"use strict";


function declaration
// //
// // function sayHello() {
// //     console.log("Hello!");
// // }
// //
// //
// // //Calling invoking function use loop for invoking multiple times
// //
// // sayHello();
// //
// // //sayHello; is a specific value
// //
// //
// // // you can write functions without a return value but preferred to have a return its a better practice
// better way of creating sayHello function
// // function sayHello() {
// //     return "Hello!";
// // }
// //
// // // say hello invoked whatever value is returned will be passed
// // console.log(sayHello());
// //
// // function calculateMortgage () {
// //     return 2 + 2;
// // }
// //
// // calculateMortgage(); //edit html
//
//  better way of writing function
// function sayHello() {
//     return "Hello!";
//     console.log("Will this run?");
// }

var x = sayHello;
console.log(x());
console.log(sayHello());
// console.log(sayHello());
//// definition of the function returned
// console.log(sayHello);

//function expression syntax

var sayHello = function() {
    return "Hello";
}

// arguments vs parameters (function input)

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(2)); // returns as NaN because 2 + undefined
console.log(add(2, true)); // type coercion true is 1 false is 0


function addTwo (num) {
    return 2 + 2; //very inflexible only does 2
}


// pure function vs function with side effects

// pure function

function addTwo (num) {
    return num + 2; // PURE FUNCTION
}


//function with side effects because of global variable
var num; //global variable

function addTwo () {
    return num + 2;
}