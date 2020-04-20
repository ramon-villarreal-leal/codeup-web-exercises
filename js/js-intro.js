"use strict";

// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

var theLittleMermaidDays = 3;

var brotherBearDays = 5;

var  herculesDays = 1;

var price = 3;



console.log("The little mermaid cost: ")
console.log(theLittleMermaidDays * price + " to rent");

console.log("Brother Bear cost: ")
console.log(brotherBearDays * price + " to rent");

console.log("Hercules cost: ")
console.log(herculesDays * price + " to rent");



// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, ' +
// 'they pay you a different rate per hour. Google pays $400, ' + 'Amazon $380, and Facebook $350. ' +
// 'How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;

var googleHours = 6;
var amazonHours = 4;
var facebookHours = 10;

var googleWeeklyTotal = googlePay * googleHours;
console.log("google total pay: " + googleWeeklyTotal);

var amazonWeeklyTotal = amazonPay * amazonHours;
console.log("amazon total pay: " + amazonWeeklyTotal);

var facebookWeeklyTotal = facebookPay * facebookHours;
console.log("facebook total pay: " + facebookWeeklyTotal);

var weeklyTotalPay = googleWeeklyTotal + amazonWeeklyTotal + facebookWeeklyTotal;
console.log("Weekly total pay: " + weeklyTotalPay);

// A student can be enrolled in a class only if the class is not
// full and the class schedule does not conflict with her current schedule.

var classIsNotFull; // boolean
var classScheduleDoesNotConflict; // boolean
var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;


// A product offer can be applied only if a person buys more than 2 items,
//     and the offer has not expired. Premium members do not need to buy a specific amount of products.


var numberOfItems; // number
var offerIsValid; // boolean
var isPremiumMember; // boolean
var productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);



// Password Validator
var username = 'codeup';
var password = 'notastrongpassword';
// Create a variable that holds a boolean value for each of the following conditions:
//     the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace
    var username = 'codeup';
var password = 'notastrongpassword';
var minLength = 5;
var maxLength = 20;
var hasMinLength = password.length >= minLength;
var hasNoUserName = password.indexOf(username) < 0;
var hasMaxLength = password.length <= maxLength;
var isTrim;
var passValid = hasMinLength && hasNoUserName && hasMaxLength && isTrim;







