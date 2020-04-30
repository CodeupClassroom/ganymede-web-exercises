
(function() {



"use strict";

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

// Examples of strategies to solve problems...

// 1. say the in words out loud or rewrite out the problem in your own words (done in class)

// 2. solve as a human (can you come up with example inputs and outputs on your own)

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

    console.log(showMultiplicationTable(7));


// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

    /*
        123 is odd
        80 is even
        24 is even
        199 is odd
        ...
     */

    // Simpler version but less modular

        // for (var i = 1; i <= 10; i += 1) {
        //     // create a random number 20 - 200
        //     var random = Math.floor((Math.random() * (200 - 20 + 1)) + 20);
        //
        //     // is random even or odd?
        //
        //     var evenOddMessage = "";
        //
        //     if (random % 2 === 0) {
        //         evenOddMessage = " is even";
        //     } else {
        //         evenOddMessage = " is odd";
        //     }
        //
        //     console.log(random + evenOddMessage);
        //
        // }


    // More modular refactor of above solution

        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function isEven(num) {
            return num % 2 === 0;
        }

        function returnEvenOddMessage(isEven, num) {
            return isEven(num) ? num + " is even" : num + " is odd";
        }

        function displayRandomNumbers(generateRandomNumber, isEven, returnEvenOddMessage, numberOfRandoms, min, max) {
            var output = "";
            var random;
            for (var i = 1; i <= numberOfRandoms; i += 1) {
                random = generateRandomNumber(min, max);
                output += returnEvenOddMessage(isEven, random);
                output += "\n";
            }
            return output;
        }

        console.log(displayRandomNumbers(generateRandomNumber, isEven, returnEvenOddMessage, 10, 20, 200));



// 4. Create a for loop that uses console.log to create the output shown below.

    /*

        1
        22
        333
        4444
        55555
        666666
        7777777
        88888888
        999999999

     */


    // version outside a function and using a nested loop

        // for (var i = 1; i <= 9; i += 1) {
        //     var output = "";
        //     for (var j = 1; j <= i; j += 1) {
        //         output += i;
        //     }
        //     console.log(output);
        // }

    // version outside a function without a nested loop

        // for (var i = 1; i <= 9; i += 1) {
        //     console.log(i.toString().repeat(i));
        // }

    // version inside a function without a nested loop

        function displayNumPyramid() {
            var output = "";
            for (var i = 1; i <= 9; i += 1) {
                output += i.toString().repeat(i) + "\n";
            }
            return output;
        }

        console.log(displayNumPyramid());


// 5. Create a for loop that uses console.log to create the output shown below.

/*

    100
    95
    90
    85
    80
    75
    70
    65
    60
    55
    50
    45
    40
    35
    30
    25
    20
    15
    10
    5

 */

    function displayDecrease(max, min, jump) {
        var output = "";
        for (var i = max; i >= min; i -= jump) {
            output += i + "\n";
        }
        return output;
    }

    console.log(displayDecrease(100, 5, 5));


})();







