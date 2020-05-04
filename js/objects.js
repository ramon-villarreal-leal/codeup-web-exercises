(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        first_Name: "Ramon",
        last_Name: "Villarreal-Leal",

    }


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    var sayHello = function () {
        return "Hello from " + person.first_Name + " " + person.last_Name + "!";
    }

    console.log(sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    function discount(totalAmount, discount) {
        return parseFloat(totalAmount) * parseFloat(discount);
    }

    // For Loop

    // console.log("For Loop made by accident!")
    //
    // for(var i = 0; i < shoppers.length; i++) {
    //     if(shoppers[i].name && shoppers[i].amount < 200) {
    //         console.log(shoppers[i].name + " is not eligible for a discount.")
    //         console.log(shoppers[i].name + "'s total is " + shoppers[i].amount.toFixed(2) + " and gets no discount.");
    //     }
    //     else if(shoppers[i].name && shoppers[i].amount >= 200) {
    //         console.log(shoppers[i].name + " is eligible for a discount! Woo!")
    //         console.log("Before discount the total for " + shoppers[i].name + "'s is" + " $" + shoppers[i].amount.toFixed(2));
    //         console.log("After discount the new total for " + shoppers[i].name + " $" + discount(shoppers[i].amount, .88).toFixed(2));
    //     }
    // }

    // For Each Loop.

    shoppers.forEach(function shoppingPeople(shoppingPeople){
        console.log("Thank you for shopping at HEB! Your totals are below!");
        // for(var i = 0; i < shoppers.length; i++) { // no point to have a for loop in a for each.
            if (shoppingPeople.name && shoppingPeople.amount < 200) {
                console.log(shoppingPeople.name + " is not eligible for a discount." + "\n"
                    + shoppingPeople.name + "'s total is $" + shoppingPeople.amount.toFixed(2) + " and gets no discount.");
                // console.log(shoppers[i].name + "'s total is " + shoppers[i].amount.toFixed(2) + " and gets no discount.");
            } else if (shoppingPeople.name && shoppingPeople.amount >= 200) {
                console.log(shoppingPeople.name + " is eligible for a discount! Woo!" + "\n"
                    + "Before discount the total for " + shoppingPeople.name + "'s is" + " $" + shoppingPeople.amount.toFixed(2) + "\n"
                + "After discount the new total for " + shoppingPeople.name + " $" + discount(shoppingPeople.amount, .88).toFixed(2));
                // console.log("Before discount the total for " + shoppers[i].name + "'s is" + " $" + shoppers[i].amount.toFixed(2));
                // console.log("After discount the new total for " + shoppers[i].name + " $" + discount(shoppers[i].amount, .88).toFixed(2));
            }

    });

     //Failed attempt at using var output = "";
    // function discountGroceries(totalAmount, discount) {
    //     return parseFloat(totalAmount) * parseFloat(discount);
    //     var output = "";
    //
    //
    //
    //     shoppers.forEach(function element(element) {
    //         if (element.name && element.amount < 200) {
    //             output += element.name + " is not eligible for a discount." + "\n"
    //                 + element.name + "'s total is $" + element.amount.toFixed(2) + " and gets no discount.";
    //         } else if(element.name && element.amount >= 200) {
    //             output += element.name + " is eligible for a discount! Woo!" + "\n"
    //                 + "Before discount the total for " + element.name + "'s is" + " $" + element.amount.toFixed(2) + "\n"
    //                 + "After discount the new total for " + element.name + " $" + discountGroceries(element.amount, .88).toFixed(2);
    //         }
    //     });
    //     return output;
    // }
    //
    // console.log(discountGroceries(discount));


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Man's Search for Meaning",
            author: {
                firstName: "Victor",
                lastName: "Frankl"
            }
        },
        {
            title: "Meditations",
            author: {
                firstName: "Marcus",
                lastName: "Aurelius"
            }
        },
        {
            title: "Leviathan",
            author: {
                firstName: "Thomas",
                lastName: "Hobbes"
            }
        },
        {
            title: "A Treatise on Human Nature",
            author: {
                firstName: "David",
                lastName: "Hume"
            }

        },
        {
            title: "A Book of Five Rings",
            author: {
                firstName: "Miyamoto",
                lastName: "Musashi"
            }
        }


    ]

    console.log(books[0].title)
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)

    console.log(books[1].title)
    console.log(books[1].author.firstName)
    console.log(books[1].author.lastName)

    console.log(books[2].title)
    console.log(books[2].author.firstName)
    console.log(books[2].author.lastName)

    console.log(books[3].title)
    console.log(books[3].author.firstName)
    console.log(books[3].author.lastName)

    console.log(books[4].title)
    console.log(books[4].author.firstName)
    console.log(books[4].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    for (var i = 0; i < books.length; i++) {

        console.log("Book # " + [i + 1] + "\n" + "Title: " + books[i].title + "\n" + "Author: " +
            books[i].author.firstName + " " +
            books[i].author.lastName + "\n" + "---");

    }


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    //Attempt made at bonus
    // function createBook(title, author) {
    //     return title + author;
    //     var output = "";
    //     for (var i = 0; i < books.length; i++) {
    //
    //         output += "Book # " + [i + 1] + "\n" + "Title: " + books[i].title + "\n" + "Author: " +
    //             books[i].author.firstName + " " +
    //             books[i].author.lastName + "\n" + "---";
    //
    //     }
    // }


})();
