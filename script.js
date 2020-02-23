// Every Prototype: Returns boolean value after checking all elements in an Array.For an empty array it always returns true.
const num = [200, 300, 400, 500];
greaterThan = n => {
  return n < 100;
};
console.log(num.every(greaterThan)); //false

// Filter method: Creates a new array and allows to remove elements , if it does not pass certain conditions.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let even = numbers.filter(n => n % 2 == 0);
console.log(even); //[2,4,6,8]

// Find Method: Searches an array and returns the FIRST element with matching conditions.
const people = [
  { name: "Dave", role: "DevOps" },
  { name: "Alan", role: "FS" },
  { name: "carl", role: "FS" },
  { name: "clint", role: "Manager" }
];
function role(people) {
  return people.role === "FS";
}
console.log(people.find(role).name); //Alan

// findIndexOf Method: Returns index of the first element , or returns -1 indicating no element is passed.
const arr1 = [99, 88, 77, 66];
const large = element => element < 99;
console.log(arr1.findIndex(large)); //1

// For Each: Used to loop through the array Providing the element as well as the index of the array.
const names = ["Aramis", "Athos", "Porthos"];
names.forEach(function(e, i) {
  console.log(e + " " + i);
});

// includes Method: This method is used to check if the element exist in the array.
const code = ["alpha", "beta", "charlie", "delta"];
console.log(code.includes("alpha")); //true

// findIndex: It allows to search an array and returns the index of the array.
const people = [
  { name: "Dave", role: "DevOps" },
  { name: "Alan", role: "FS" },
  { name: "carl", role: "FS" },
  { name: "clint", role: "Manager" }
];
function role(people) {
  return people.role === "FS";
}
console.log(people[people.findIndex(role)]); // name:"Alan", role:"FS"

// keys Method: Returns a new array iterator object that contains the key for each index in array.
const array1 = ["a", "b", "c"];
const iterator = array1.keys();
for (const key of iterator) {
  console.log(key); //0,1,2.
}

// map Method: Creates a new array by calling the functions of every element in the array.
const mapArray = ["1", "2", "3", "4"];
const mapNew = mapArray.map(x => x * 2);
console.log(mapNew); //2,4,6,8

// Push Method: Adds one or more elements to the end of the array and returns the new length of the array.
const employee = ["Paul ", "Steve ", " Wozniak", "Bill"];
const newEmployee = employee.push('Scully');
console.log(employee, newEmployee); //["Paul ", "Steve ", " Wozniak", "Bill"] 5.

// Pop method: Removes the last Element of the array and returns it.
const employee = ["Paul ", "Steve ", " Wozniak", "Bill"];
const newEmployee = employee.pop("Bill");
console.log(employee, newEmployee); //  ["Paul ", "Steve ", " Wozniak"],Bill

// Reduce: Executes a reducer function on each element resulting in an single output.
const array2 = [1, 2, 3, 4, 5];
const reduceArray = (a, c) => a + c;
console.log(array2.reduce(reduceArray)); //15
console.log(array2.reduce(reduceArray, 5)); //20

// some Method: tests at least one element in the array passes the test implemented by the provided function.Returns a boolean value.
const array3 = [7, 8, 9, 10];
const even = content => content % 2 == 0;
console.log(array3.some(even)); //true

// sort Method: sorts the element and returns the sorted in ascending(default) order.
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); //[1, 100000, 21, 30, 4]
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months); //["Dec", "Feb", "Jan", "March"]
