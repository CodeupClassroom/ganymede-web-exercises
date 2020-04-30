"use strict";
console.log("Let's manipulate some arrays");
/* ***************************************************************
* 						MANIPULATING ARRAYS
*************************************************************** */

//JavaScript has several methods we can use to manipulate arrays.
//We will be covering some of the most commonly used array methods.

/* ***************************************************************
* 						ADDING ELEMENTS
*************************************************************** */
// these methods return the new length of an array
// modifies original array

// .push adds elements to the end of an array
// .unshift adds elements to the beginning of an array

var numStrings = ['three','four','five','six','seven'];

// TO DO TOGETHER: Use the .push method to add the next String in the sequence.

// returns 6
console.log(numStrings.push('eight'));;

// TO DO TOGETHER: Use the .unshift method to add 'two' before 'three'.

// returns 7
console.log(numStrings.unshift('two'));;

// original array has been modified
console.log(numStrings);

// TO DO: Use the .push method to add 'nine' and 'ten'.
console.log(numStrings.push('nine', 'ten'));
console.log(numStrings);
// TO DO: Use .unshift to add 'zero' and 'one'. Can this be done with one statement?
console.log(numStrings.unshift('zero','one'));
console.log(numStrings);
// Console log your results.

/* ***************************************************************
* 						REMOVING ELEMENTS
*************************************************************** */
// these methods return the element you are removing
// modifies the original array

var activeCohorts = ['deimos','europa','fortuna','ganymede','ada','bayes'];

// TO DO TOGETHER: Use the .pop method to remove the last cohort in the list.

var bayes = activeCohorts.pop();
console.log(activeCohorts);

// TO DO TOGETHER: Use the .shift method to remove the first cohort in the list.
var deimos = activeCohorts.shift();
console.log(activeCohorts);
// What do we get when we log the return of these methods?
// var graduatedCohorts = [];
// graduatedCohorts.push(bayes,deimos);
// console.log(graduatedCohorts);

// TO DO: Use a combination of .pop and .shift methods until only 'fortuna' and 'ganymede' are
// left in the array. Log the updated array.

activeCohorts.pop();
activeCohorts.shift();
console.log(activeCohorts);


/* ***************************************************************
* 					LOCATING ARRAY ELEMENTS
*************************************************************** */
// these methods return a number representing the index of the element

var fruit = ['apples','oranges','grapes','bananas','apples','oranges','grapes'];
// TO DO TOGETHER: Find the first index of 'apples' in the array
console.log(fruit.indexOf('apples'));;
// TO DO TOGETHER: Find the last index of 'apples' in the array
console.log(fruit.lastIndexOf('apples'));
// TO DO: If the last element in the fruits array is 'grapes', remove it from the list.
console.log(fruit);
if(fruit.lastIndexOf('grapes') === fruit.length-1){
    fruit.pop();
}
console.log(fruit);
// Console log your new array.


/* ***************************************************************
* 							SLICING
*************************************************************** */
// Allows us to copy a portion of our array
// DOES NOT modify the original, instead returns a new one

var instructors = ['justin','david','sophie','vivian','casey','trant','daniel'];

// TO DO TOGETHER: Create a variable named ganymedeInstructors that stores an array list of
// 'justin','david', and 'sophie'. Do this with the .slice method.

var ganymedeInstructors = instructors.slice(0,instructors.length-4);
console.log(ganymedeInstructors);
// TO DO TOGETHER: Create a variable named fortunaInstructors that stores an array list of all
// instructors starting from 'vivian' onward.

var fortunaInstructors = instructors.slice(3);
console.log(fortunaInstructors);
console.log(instructors);


/* ***************************************************************
* 							REVERSING
*************************************************************** */

// TO DO TOGETHER: Take the instructors array and reverse it.
// What will the following console log display?
instructors.reverse();
console.log(instructors);

/* ***************************************************************
* 							SORTING
*************************************************************** */

// TO DO TOGETHER: Sort the instructors array.
// Take a look at the results of the console log.

var myString = [5,6,' one',1,2,'3','4',true,false,'0'];
// ['5','6','one','1','2','3','4'];
// ['1','2','3','4','5','6','one']
// output preserves the original data types

console.log(myString.sort());
console.log(instructors.sort());

/* ***************************************************************
* 				CONVERTING BETWEEN STRINGS AND ARRAYS
*************************************************************** */

var submarine = "We all live in a yellow submarine.";

// TO DO TOGETHER: Split this string up into an array of elements
// What will this console log display?
var submarineArray = submarine.split(' ');
console.log(submarine);
console.log(submarineArray);

// TO DO: Now, join the array elements into a string. Each word should be in its own separate line.
// Log your results.

var newSubmarine = submarineArray.join('\n');
//submarineArray.join('<br>');
console.log(newSubmarine);