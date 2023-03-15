// 1. Scope

// 1.1. Window Global Object

// x = 'TypeScript'; // declaring a variable without let or const make it available in window object and this found anywhere
// y = 20; // this is a global scope variable and found in the window object

// function letsLearnScope() {
//   console.log(x, y);

//   if (true) {
//     console.log(x, y);
//   }
// }

// letsLearnScope();

// console.log(x, y); // accessible

// 1.2. Global scope

// let a = 'JavaScript'; // is a global scope it will be found anywhere in this file
// let b = 10; // is a global scope it will be found anywhere in this file

// function letsLearnScope2() {
//   console.log(a, b); // JavaScript 10, accessible

//   if (true) {
//     let a = 'Python';
//     let b = 100;
//     console.log(a, b); // Python 100
//   }

//   console.log(a, b);
// }

// letsLearnScope2();

// console.log(a, b); // JavaScript 10, accessible

// 1.3. Local scope

// eg 1

// let a = 'JavaScript'; // is a global scope it will be found anywhere in this file
// let b = 10; // is a global scope it will be found anywhere in this file

// // Function scope
// function letsLearnScope() {
//   console.log(a, b); // JavaScript 10, accessible
//   let value = false;

//   // block scope
//   if (true) {
//     // we can access from the function and outside the function but
//     // variables declared inside the if will not be accessed outside the if block
//     let a = 'Python';
//     let b = 20;
//     let c = 30;
//     let d = 40;
//     value = !value;

//     console.log(a, b, c, d, value); // Python 20 30 40 true
//   }

//   // we can not access c and d because c's and d's scope is only the if block
//   console.log(a, b, value); // JavaScript 10 true
// }

// letsLearnScope();

// console.log(a, b); // JavaScript 10, accessible

// eg 2

// function letsLearnScope() {
//   var gravity = 9.81;
//   console.log(gravity);
// }
// console.log(gravity); // Uncaught ReferenceError: gravity is not defined

// if (true) {
//   var gravity = 9.81;
//   console.log(gravity); // 9.81
// }
// console.log(gravity); // 9.81

// for (var i = 0; i < 3; i++) {
//   console.log(i); // 0, 1, 2
// }
// console.log(i); // 3

// eg 3

// function letsLearnScope() {
//   const gravity = 9.81;
//   console.log(gravity);
// }
// letsLearnScope();
// console.log(gravity); // Uncaught ReferenceError: gravity is not defined

// if (true) {
//   const gravity = 9.81;
//   console.log(gravity); // 9.81
// }
// console.log(gravity); // Uncaught ReferenceError: gravity is not defined

// for (let i = 0; i < 3; i++) {
//   console.log(i); // 0, 1, 2
// }
// console.log(i); // Uncaught ReferenceError: i is not defined
