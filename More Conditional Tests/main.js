"use strict";
// More Conditional Tests
//tests for equality and inequality with strings
console.log("Tests for Equality and Inequality with Strings:");
let myName = "FARHEEN";
console.log(myName === "FARHEEN"); //equality of string
console.log(myName === "Fifi");
console.log(myName != "Farheen"); //inequality of string
console.log(myName != "FARHEEN");
//tests using lower case function
console.log("Tests using lower case function:");
console.log(myName.toLowerCase() === "farheen"); //true
console.log("FIFI".toLowerCase() != "fifi"); //false
// numerical tests
console.log("Numerical tests:");
let num1 = 5;
let num2 = 10;
let num3 = 5;
console.log(num1 === num3);
console.log(num1 === num2); //equality
console.log(num1 != num2);
console.log(num1 != num3); //inequality
console.log(num2 > num3);
console.log(num1 > num2); //greater than
console.log(num1 >= num2);
console.log(num2 >= num3); //greater than or equal to
console.log(num1 < num2);
console.log(num2 < num3); //less than
console.log(num1 <= num2);
console.log(num2 <= num3); //less than or equal to
//tests using "and" and "or" operators
console.log("Tests using and operator:");
console.log(num1 == num2 && num1 == num3);
console.log(num1 == num3 && num2 > num3);
console.log("Tests using or operator:");
console.log(num1 == num2 || num1 == num3);
console.log(num1 == num2 || num2 < num3);
//test whether an item is in a array
console.log("Array Tests:");
let myFriends = ["Maaz", "Ali", "Marium"];
console.log(myFriends.includes("Marium"));
console.log(myFriends.includes("Mehreen"));
