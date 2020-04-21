"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userInputColor =  prompt("What is your favorite color dude?");
alert("Great, " + userInputColor + " is my favorite color too!");


// 1. You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

var rentalPerDayDollars = Number(prompt("What is the the daily rental rate in dollars?"));
var littleMermaidDays = Number(prompt("How many days will The Little Mermaid be rented?"));
var brotherBearDays = Number(prompt("How many days will Brother Bear be rented?"));
var herculesDays = Number(prompt("How many days will Hercules be rented?"));

var totalRentalCost = (littleMermaidDays + brotherBearDays + herculesDays) * rentalPerDayDollars;

alert("The total will be $" + totalRentalCost.toFixed(2));












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

alert("Amazon total pay: " + amazonWeeklyTotal);

var facebookWeeklyTotal = facebookPay * facebookHours;

alert("Facebook total pay: " + facebookWeeklyTotal);

var weeklyTotalPay = parseInt(googleWeeklyTotal) + parseInt(amazonWeeklyTotal) + parseInt(facebookWeeklyTotal);

alert("Weekly total pay: " + weeklyTotalPay);


// A student can be enrolled in a class only if the class is not
// full and the class schedule does not conflict with her current schedule.

var classIsNotFull = confirm("Confirm that class is not full"); // boolean
var classSchedulesCheck = confirm("Confirm that the schedules check."); // boolean
var studentEnrolled = classIsNotFull && classSchedulesCheck;
alert("Student enrollment Status: " + studentEnrolled);




// A product offer can be applied only if a person buys more than 2 items,
//     and the offer has not expired. Premium members do not need to buy a specific amount of products.

var discountBreakPoint = 2;
var numberOfItems = Number(prompt("How many items were bought?"));
var offerIsNotExpired = confirm("Confirm offer is not expired.");
var isPremiumMember = confirm("Customer is a premium member");

var productDiscountApplied = offerIsNotExpired && (isPremiumMember || numberOfItems >= discountBreakPoint);

alert("Product discount applied: " + productDiscountApplied);

