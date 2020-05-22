"use strict";

// ========== Retrieve elements by id, class, tag name

// id
// var header = document.getElementById('main-title');
// console.log(header);

// var smallHeading = document.getElementById('small-heading');
// console.log(smallHeading);

// header.innerHTML = "Hello Ganymede"; // changes directly!

// class - will return an HTMLCollection
// var cards = document.getElementsByClassName('card');
// console.log(cards); // not an array
// console.log(cards[0]);

// console.log(cards[0]);
// cards.pop(); // ERROR: Array specific method
// var cardsArr = Array.from(cards); // convert HTMLCollection and NodeList to Array
// cardsArr.pop();
// console.log(cardsArr);

// tag
//     var h1 = document.getElementsByTagName('h1');
//     console.log(h1[0]);

//getElementByID() - returns a single node
//.getElementFromClassName() - returns a collection of nodes
//.getElementsByTagName() - returns a collections
// ========== Query Selector and Query Selector All

// querySelector() returns a  single node

// var headerTitle = document.querySelector('header h1');
// console.log(headerTitle);
// var headerTitle = document.querySelector('#main-title');
// console.log(headerTitle);
//
// var li = document.querySelector('li'); // only returns first matching
// console.log(li);
//
// var secondLi = document.querySelector('li:nth-child(2)');
// console.log(secondLi);


// querySelectorAll() gives back all li's a collection of them

// var lis = document.querySelectorAll("li");
// var liCollection = document.getElementsByTagName("li");
//
//
// console.log(lis);
// console.log(liCollection);




// ========== Direct access to form inputs

// var forms = document.forms;
// console.log(forms['feedback-form'].feedback.value);


// ========== Accessing and modifying elements and properties

// get value of innerHTML
//     var title = document.getElementById("main-title");
//     console.log(title);
//
//     var body = documents.getElementsByTagName("body");
//
//     console.log(title.innerHTML);
//     console.log(title.innerText);

// set value of innerHTML
//     title.innerHTML = "<em>Hi MOM!</em>";

// set value of innerText
//     title.innerText = "<em>Hi MOM!</em>"; // you will see text!!! innerHTML will interpret em as valid html

// append value to innerText (works the same with innerHTML)
//     title.innerHTML += " ...and hi Mom!";


// ========== Accessing and modifying attributes

// check if attribute exists
    var cowboy = document.getElementById('cowboy');
    // console.log(cowboy.hasAttribute('data-1'));

// get an attribute value
//     console.log(cowboy.getAttribute('data-1'));


// create a new attribute or change a value of an existing attribute
//     cowboy.setAttribute('data-1', 'hello');
//     cowboy.setAttribute('data-test', 'testing');
//     console.log(cowboy.getAttribute('data-1'));

// remove attribute
//     cowboy.removeAttribute("data-test");
//     console.log(cowboy);


// ========== Accessing and modifying styles

// single style
//     var jumbotron = document.querySelector('.jumbotron');
//     jumbotron.style.display = "none";
//     jumbotron.style['font-family'] = "times";


// ========== Add / Remove Elements

// see curriculum links


//make whole background red

// document.body.style.backgroundColor = "red";

//

// .getElementById()
// .getElementsByTagName()

var h2 = document.querySelectorAll('h2')[2];

console.log(h2);

h2.innerText = "Apple";

h2.style.backgroundColor ="blue";

