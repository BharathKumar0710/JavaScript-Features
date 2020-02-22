// Every Prototype: Returns true or false after checking the conditions in an Array
const num = [200, 300, 400, 500];
greaterThan = n => {
  return n < 100;
};
console.log(num.every(greaterThan)); //false

// Filter method: Allows to remove elements from an array , if it does not pass certain conditions.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let even = numbers.filter(n => n % 2 == 0);
console.log(even); //[2,4,6,8]

// Find Method: Searches an array and returns the matching conditions.

