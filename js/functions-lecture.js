
(function() {

"use strict";


// function declaration

    // function sayHello() {
    //     console.log("Hello!");
    // }

// calling / invoking the function

    // sayHello();

// return value

    // function sayHello() {
    //     return "Hello";
    // }
    //
    // function calculateMortgage() {
    //     // .....
    //     return 2 + 2;
    // }
    //
    // function calculateMortgage() {
    //     // .....
    //     console.log(2 + 2);
    // }
    //
    // calculateMortgage() // edit html
    // // or
    // calculateMortgage() // write to a text file
    // // or
    // calculateMortgage() // store in a DB
    // // or
    // calculateMortgage() // pass the value to another function
    //
    //
    //
    // console.log(sayHello());
    //
    // function sayHello() {
    //     return "Hello";
    // }
    //
    // var x = sayHello;
    //
    // console.log(x());
    // console.log(sayHello() + sayHello());

// function expression

    // var sayHello = function () {
    //     return "Hello";
    // };

// arguments vs. parameters (function input)

    // function add(num1, num2) {
    //     return num1 + num2;
    // }
    //
    // console.log(add(2));
    //
    // console.log(add(2, 2));

// pure function vs. function with side effects

// pure function
//     function addTwo(num) {
//         return num + 2;
//     }


// function with side effects

    // var num = 2;
    // function addTwo() {
    //     return num + 2;
    // }


// ===== MINI PROBLEMS

// Write a function, returnFive, that returns the number five. No inputs should be defined.

// function returnFive() {
//     return 5;
// }
//
// var result = returnFive();
//
// console.log(result, 5);


// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.

// function isFive(input) {
//     return 5 === input || '5' === input;
// }
//
// console.log(isFive(5), true);
// console.log(isFive(4), false);
// console.log(isFive('5'), true);


// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.

// function isShortWord(str) {
//     return str.length < 5;
// }
//
// console.log(isShortWord('pancake'), false);
// console.log(isShortWord('cake'), true);
// console.log(isShortWord('fifty'), false);




// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.

// function isSameLength(str1, str2) {
//     return str1.length === str2.length;
// }
//
// console.log(isSameLength('me', 'us'), true);
// console.log(isSameLength('hello', 'goodbye'), false);
// console.log(isSameLength('goodbye', 'hello'), false);


// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.

// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"

// function getSmallerSegment(str, length) {
//     return str.substring(0, length).toLowerCase();
// }
//
// console.log(getSmallerSegment('Pancake', 3), 'pan');
// console.log(getSmallerSegment('example', 2), 'ex');
// console.log(getSmallerSegment('yeSTerday', 5), 'yeste');


// ===== SCOPE

// var keyword creates "Function Scope" variables

// var globalVar = "Look, I'm Global!"; // declare a global variable
//
// function scopeExample() {
//     var localVar = "Look, I'm Local!"; // declare a local variable
//     // always declare variable at the top of a function
//     alert(localVar); // localVar is accessible here
//     alert(globalVar); // globalVar is accessible here
// }
//
// console.log(globalVar);
// console.log(localVar);
//
// scopeExample();


// alert(localVar); // localVar is NOT accessible here and this will produce an error


// EXTRA SCOPE EXAMPLE

// var x = 300;
// var y = 100;
//
// function scopeExample2(x, y) {
//     console.log('x: ' + x + ' y: ' + y);
//     return x + y;
// }
//
// console.log(scopeExample2());
// console.log('x: ' + x + ' y: ' + y);


// =====  CALLBACK, ANONYMOUS, HIGHER ORDER FUNCTIONS

    function returnFive() {
        return 5;
    }
    // addTwo is a "Higher Order Function" because it takes in other functions as arguments
    // functions that return a function are also "Higher Order Functions"
    function addTwo(fn) {
        return fn() + 2;
    }

    console.log(addTwo(returnFive)); // Callback function "returnFive" is passed to addTwo

    console.log(addTwo(function() { // Anon function passed to addTwo()
        return 10;
    }));

// other common higher order functions built in to JS: setInterval, setTimeout, map, filter, reduce, fetch


// =====  IIFE



})();
