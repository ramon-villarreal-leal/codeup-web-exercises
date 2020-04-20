"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userInputColor =  prompt("What is your favorite color dude?");
alert("Great, " + userInputColor + " is my favorite color too!");


// 1. You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

// var theLittleMermaidDays = 3;
//
// var brotherBearDays = 5;
//
// var  herculesDays = 1;
//
// var price = 3;
//
//
// var theLittleMermaidDays = prompt("the Little Mermaid was rented for " + theLittleMermaidDays + " days");
//
// console.log(alert("It cost " + theLittleMermaidDays * price + " to rent"));
//
// var brotherBearDays = prompt("Brother Bear was rented for " + brotherBearDays + " days");
//
// console.log(alert("It cost " + brotherBearDays * price + " to rent"));
//
// var herculesDays =  prompt("Hercules was rented for " + herculesDays + " days");
//
// console.log(alert("It cost " + herculesDays * price + " to rent"));


// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, ' +
// 'they pay you a different rate per hour. Google pays $400, ' + 'Amazon $380, and Facebook $350. ' +
// 'How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;

var googleHours = parseInt(prompt("How many hours did you work for Google?"));

var amazonHours = parseInt(prompt("How many hours did you work for Amazon?"));

var facebookHours = parseInt(prompt("How many hours did you work for FaceBook?"));


var googleWeeklyTotal = googlePay * googleHours;

console.log(alert("Google total pay: " + googleWeeklyTotal));

var amazonWeeklyTotal = amazonPay * amazonHours;

console.log(alert("Amazon total pay: " + amazonWeeklyTotal));

var facebookWeeklyTotal = facebookPay * facebookHours;

console.log(alert("Facebook total pay: " + facebookWeeklyTotal));

var weeklyTotalPay = parseInt(googleWeeklyTotal) +parseInt(amazonWeeklyTotal) + parseInt(facebookWeeklyTotal);

console.log(alert("Weekly total pay: " + weeklyTotalPay));
