'use strict'

/*Below is project item #1: write a JavaScript program to display the current day and time*/
function displayDateAndTime(month, day, year) {
  const today = new Date()
  const month = today.getMonth();
  const day = today.getDate();
  const year = today.getFullYear();

  const time = new Date()
  const hours = time.getHours();
  const mins = time.getMinutes();

  return month + " " + day + "," + year;
}
displayDateAndTime;



/*Below is project item #2: write a JavaScript program to convert a number to a string*/
function convertNumToString(num) { // name the function and variable
  return num.toString(); //use the toString method and return the value
}
convertNumToString(1); // call the function and enter in your parameter



/*Below is project item #3: write a JavaScript program to convert a string to a number*/
function convertStringToNum(string) { // name the function and variable
  const number = parseFloat(string); // create a variable for the converted string
  return number; // return the converted string
}
convertStringToNum("100"); // call the function and input your string



/*Below is project item #4: write a JavaScript program that takes in different datatypes and prints out whether they are a:
- Boolean
- Null
- Undefined
- Number
- NaN
- String
*/
function displayInputType(x) {

  return typeof x;
}




/*Below is project item #5: write a JavaScript program that adds 2 numbers together*/
function addTwoNumbers(num1, num2) { //name the function and variables
  return num1 + num2; //tell the function to return the sum of the two numbers
}
addTwoNumbers(1, 2); //call the function and enter in your parameters



/*Below is project item #6: write a JavaScript program that runs only when 2 things are true*/
function bothTrue(input1, input2) { // name the function and variables
  if (input1 && input2) { //write an If statement to see if both parameters are true using the AND operator
    return true; // return only if both are true
  }
}
bothTrue(1, 1); // call function and enter in your parameters



/*Below is project item #7: write a JavaScript program that runs when 1 of 2 things are true*/
function oneTrue(input1, input2) { //name function and variables
  if (input1 || input2) { //write an If statement using the Or operator
    return true; // return if at least one is true
  }
}
oneTrue(1, 1); //call the function and enter in parameters



/*Below is project item #8: write a JavaScript program that runs when both things are not true*/
function notTrue(input1, input2) { //name function and variables
  if (!input1 && !input2) { //write an If statement using the AND operator to see if both are true
    // if both are true, do nothing
  } else return false;
}
notTrue(0, 0);