"use strict";

// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output

    /*

    7 x 1 = 7
    7 x 2 = 14
    7 x 3 = 21
    7 x 4 = 28
    7 x 5 = 35
    7 x 6 = 42
    7 x 7 = 49
    7 x 8 = 56
    7 x 9 = 63
    7 x 10 = 70

    */


// showMultiplicationTable(5)

    /*

    5 x 1 = 5
    5 x 2 = 10
    5 x 3 = 15
    5 x 4 = 20
    5 x 5 = 25
    5 x 6 = 30
    5 x 7 = 35
    5 x 8 = 40
    5 x 9 = 45
    5 x 10 = 50

    */


// Strategies to solve problems...

// 1. say the in words out loud or rewrite out the problem in your own words


// 2. solve as a human (can you come up with example inputs and outputs on your own)

// 3. pseudo-code

// write a function that takes in a number
// produce an output that is a string of the table of numbers
// for each line of the string I need to concatenate the input number with a math expression including the a number from 1 - 10 and the output of the input times the number 1-10
    // input num concat to "x" concat to (num 1-10) concat "=" concat result of input * (num 1-10)
// return the string output and console log it


// 4. write out a solution in code

// write a function that takes in a number
function showMultiplicationTable(number) {

    // produce an output that is a string of the table of numbers
    var output = "";

    // for each line of the string I need to concatenate the input number with a math expression including the a number from 1 - 10 and the output of the input times the number 1-10
    for (var i = 1; i <=10; i += 1) {
        // input num concat to "x" concat to (num 1-10) concat "=" concat result of input * (num 1-10)
        output += number + " x " + i + " = " + number * i;
        output += "\n";
    }

    // produce an output that is a string of the table of numbers
    return output;
}

// console.log(showMultiplicationTable(7));




// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

/*
    123 is odd
    80 is even
    24 is even
    199 is odd
    ...
 */


for (var i = 1; i <= 10; i += 1) {
    // create a random number 20 - 200
    var random = Math.floor((Math.random() * (200 - 20 + 1)) + 20);

    // is random even or odd?

    var evenOddMessage = "";

    if (random % 2 === 0) {
        evenOddMessage = " is even";
    } else {
        evenOddMessage = " is odd";
    }

    console.log(random + evenOddMessage);

}











