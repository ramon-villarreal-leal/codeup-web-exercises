"use strict";

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

var pokemonPromise = fetch('https://pokeapi.co/api/v2/pokemon');

//TODO: console log the results of the above Promise. What is the result?

console.log(pokemonPromise);

//TODO: add a method that runs if the Promise resolves successfully
function listNames(arr) {
    arr.forEach(element => console.log(element.name))
}

pokemonPromise.then(response => response.json())

    //return from first function is passed as a parameter of the second one
    .then(jsonResponse => jsonResponse.results)
    .then(pokemonArray => pokemonArray.forEach(pokemon => console.log(pokemon.name)))
    .catch(error => console.log(error));
//TODO: add a method that runs if the Promise fails


//TODO: In the callback function of the .then method, parse the response into JSON


/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.
// BONUS: Is there a way for us to clean up our code?

function listNames(arr) {
    arr.forEach(element => console.log(element.name))
}

pokemonPromise.then(response => response.json())

    //return from first function is passed as a parameter of the second one
    .then(jsonResponse => jsonResponse.results)
    .then(listNames)
    .catch(error => console.log(error));


// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API

//making a request through star wars api

var starWarsApi = fetch("https://swapi.dev/api/films/");
console.log(starWarsApi);

// TODO: Use Promise chaining to console log the json response

// parse response into JSON
// starWarsApi.then(response => response.json())
//     //access results property from JSON objects
//     .then(jsonResponse => jsonResponse.results)
//     // iterate over through results array and access properties for each film
//     .then(resultsArray => resultsArray.forEach(film => {
//         console.log(film.title + " " + film.episode_id);
//     }))
//     // This runs if fetch request fails
//     .catch(error => console.log(error));

    starWarsApi.then(response => response.json())
        .then(jsonResponse => console.log(jsonResponse.count));
// TODO: chain another method that iterates through the results array and console logs the names
//  of all characters and their birth_years

/*********************************************
 *              CUSTOM PROMISES
 ******************************************** */

// To further understand Promises, we can create our own custom Promise object
// Let's take a look at the example from the curriculum

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("this is where teh api data would be");
        } else {
            reject("your api request failed");
        }
    }, 1500);
});

//fetch('from some url') -> returns a promise object!

myPromise.then(response => console.log(response))
        .catch(error => console.log(error));

// The resolve and reject functions can also be passed a value.
// These can then be used in our .resolve and .reject methods

// TODO: pass in a message argument into the resolve and reject functions
// TODO: use the passed in arguments in the callback functions

// This is a simplified example of what goes on underneath the hood of a more complex fetch
// request. The concepts we covered are similar to what you learned when using AJAX with jQuery.

Promise.all([pokemonPromise, starWarsApi])
    .then(data => console.log(data));


Promise.race([pokemonPromise, starWarsApi])
    .then(data => console.log(data));




