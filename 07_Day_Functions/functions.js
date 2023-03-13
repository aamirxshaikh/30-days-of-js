// 1. Function without a parameter and return

// function without parameter,  a function which make a number square

// function square() {
//   let num = 2;
//   let sq = num * num;
//   console.log(sq);
// }

// square(); // 4

// function addTwoNumbers() {
//   let numOne = 10;
//   let numTwo = 20;
//   let sum = numOne + numTwo;

//   console.log(sum);
// }

// addTwoNumbers(); // a function has to be called by its name to be executed

// function printFullName() {
//   let firstName = "Aamir";
//   let lastName = "Shaikh";
//   let space = " ";
//   let fullName = firstName + space + lastName;

//   console.log(fullName);
// }

// printFullName(); // calling a function

// 2. Function returning value

// function printFullName() {
//   let firstName = "Aamir";
//   let lastName = "Shaikh";
//   let space = " ";
//   let fullName = firstName + space + lastName;

//   return fullName;
// }

// console.log(printFullName());

// function addTwoNumbers() {
//   let numOne = 2;
//   let numTwo = 3;
//   let total = numOne + numTwo;

//   return total;
// }

// console.log(addTwoNumbers());

// 3. Function with a parameter

// function areaOfCircle(r) {
//   let area = Math.PI * r * r;

//   return area;
// }

// console.log(areaOfCircle(10)); // should be called with one argument

// function square(number) {
//   return number * number;
// }

// console.log(square(10));

// 4. Function with two parameters

// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo;

//   console.log(sum);
// }

// sumTwoNumbers(20, 20); // calling functions

// If a function doesn't return it doesn't store data, so it should return

// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo;

//   return sum;
// }

// console.log(sumTwoNumbers(10, 20));

// function printFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// console.log(printFullName("Aamir", "Shaikh"));

// 5. Function with many parameters

// this function takes array as a parameter and sum up the numbers in the array

// function sumArrayValues(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }

//   return sum;
// }

// const numbers = [1, 2, 3, 4, 5];

// console.log(sumArrayValues(numbers)); //calling a function

// const areaOfCircle = (radius) => {
//   let area = Math.PI * radius * radius;

//   return area;
// };

// console.log(areaOfCircle(10));

// 6. Function with unlimited number of parameters

// 6.1. Unlimited number of parameters in regular function

// Let us access the arguments object

// function sumAllNums() {
//   console.log(arguments);
// }

// sumAllNums(1, 2, 3, 4);
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function sumAllNums() {
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }

//   return sum;
// }

// console.log(sumAllNums(1, 2, 3, 4)); // 10
// console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
// console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173

// 6.2. Unlimited number of parameters in arrow function

// Let us access the arguments object

// const sumAllNums = (...args) => {
//   // console.log(arguments), arguments object not found in arrow function
//   // instead we use a parameter followed by spread operator (...)
//   console.log(args);
// };

// sumAllNums(1, 2, 3, 4);
// [1, 2, 3, 4]

// function declaration

// const sumAllNums = (...args) => {
//   let sum = 0;

//   for (const element of args) {
//     sum += element;
//   }

//   return sum;
// };

// console.log(sumAllNums(1, 2, 3, 4)); // 10
// console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
// console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173

// 7. Anonymous Function

// const anonymousFun = function () {
//   console.log(
//     "I am an anonymous function and my value is stored in anonymousFun"
//   );
// };
// console.log(anonymousFun());
// anonymousFun();

// 8. Expression Function

// const square = function (n) {
//   return n * n;
// };

// console.log(square(2)); // -> 4

// 9. Self Invoking Functions

// (function (n) {
//   console.log(n * n);
// })(2); // 4, but instead of just printing if we want to return and store the data, we do as shown below

// let squaredNum = (function (n) {
//   return n * n;
// })(10);

// console.log(squaredNum);

// 10. Arrow Function

// const square = (n) => {
//   return n * n;
// };

// console.log(square(2)); // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return

// const square = (n) => n * n; // -> 4

// console.log(square(2)); // -> 4

// const changeToUpperCase = (arr) => {
//   const newArr = [];

//   for (const element of arr) {
//     newArr.push(element.toUpperCase());
//   }

//   return newArr;
// };

// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// console.log(changeToUpperCase(countries));

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// const printFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };

// console.log(printFullName("Aamir", "Shaikh"));

// The above function has only the return statement, therefore, we can explicitly return it as follows.

// const printFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// console.log(printFullName("Aamir", "Shaikh"));

// 11. Function with default parameters

// function greetings(name = "John") {
//   let message = `${name}, welcome to 30 Days Of JavaScript!`;

//   return message;
// }

// console.log(greetings());
// console.log(greetings("Aamir"));

// function generateFullName(firstName = "Aamir", lastName = "Shaikh") {
//   let space = " ";
//   let fullName = firstName + space + lastName;

//   return fullName;
// }

// console.log(generateFullName());
// console.log(generateFullName("David", "Smith"));

// function weightOfObject(mass, gravity = 9.81) {
//   let weight = mass * gravity + " N"; // the value has to be changed to string first
//   return weight;
// }

// console.log("Weight of an object in Newton: ", weightOfObject(100)); // 9.81 gravity at the surface of Earth
// console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62)); // gravity at surface of Moon

// Let us see how we write the above functions with arrow functions

// const greetings = (name = "John") => {
//   let message = `${name}, welcome to 30 Days Of JavaScript!`;

//   return message;
// };

// console.log(greetings());
// console.log(greetings("Aamir"));

// const generateFullName = (firstName = "Aamir", lastName = "Shaikh") => {
//   let space = " ";
//   let fullName = firstName + space + lastName;

//   return fullName;
// };

// console.log(generateFullName());
// console.log(generateFullName("David", "Smith"));

// const weightOfObject = (mass, gravity = 9.81) => {
//   let weight = mass * gravity + " N"; // the value has to be changed to string first
//   return weight;
// };

// console.log("Weight of an object in Newton: ", weightOfObject(100)); // 9.81 gravity at the surface of Earth
// console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62)); // gravity at surface of Moon
