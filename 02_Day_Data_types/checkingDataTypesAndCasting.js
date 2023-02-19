// Checking Data Types

// Different javascript data types
// Let's declare different data types

let firstName = "Aamir"; // string
let lastName = "Shaikh"; // string
let country = "India"; // string
let city = "Mumbai"; // string
let age = 23; // number
let job; // undefined, because a value was not assigned

console.log(typeof "Aamir"); // string
console.log(typeof firstName); // string
console.log(typeof 10); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof NaN); // number
console.log(typeof job); // undefined
console.log(typeof undefined); // undefined
console.log(typeof null); // object

// Changing Data Type (Casting)

// String to Int

let num = "10";
let numInt = parseInt(num);
console.log(numInt); // 10

num = "10";
numInt = Number(num);
console.log(numInt); // 10

num = "10";
numInt = +num;
console.log(numInt); // 10

// String to Float

num = "9.81";
numFloat = parseFloat(num);
console.log(numFloat); // 9.81

num = "9.81";
numFloat = Number(num);
console.log(numFloat); // 9.81

num = "9.81";
numFloat = +num;
console.log(numFloat); // 9.81

// Float to Int

num = 9.81;
numInt = parseInt(num);
console.log(numInt); // 9
