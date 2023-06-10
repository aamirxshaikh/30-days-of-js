// 1. Writing clean code

// 1.2. JavaScript Style Guide

// A JavaScript style guide is a set of rules that tell how JavaScript code should be written. It is important to follow a style guide so that your code is easy to read and understand.

// Here are some tips for writing clean JavaScript code:

// Use consistent naming conventions for variables, functions, and classes.
// Use whitespace to make your code easy to read.
// Break your code into logical blocks.
// Comment your code to explain what it does.
// Use a linter to check your code for errors.
// Following these tips will help you write clean, readable JavaScript code.

// 1.3. Why we need style guide

// When you code alone, it doesn't matter how you write your code. But when you work on a project with a team, it's important to have a style guide to follow. This will make it easier for everyone to read and understand your code.

// There are many different style guides available, but some of the most popular ones for JavaScript include:

// Airbnb JavaScript Style Guide
// JavaScript Standard Style Guide
// Google JavaScript Style Guide
// You can choose the style guide that best suits your team's needs.

// 1.3.1. Airbnb JavaScript Style Guide

// The Airbnb JavaScript Style Guide is one of the most popular style guides for JavaScript. It covers a wide range of topics and is used by many developers and companies.

// 1.3.2. Standard JavaScript Style Guide

// The Standard JavaScript Style Guide is another popular style guide. It is not as popular as Airbnb, but it is worth considering. The Standard JavaScript Style Guide does not use semicolons.

// 1.3.3. Google JavaScript Style Guide

// The Google JavaScript Style Guide is less popular than the other two style guides. I have not used it, but you can check it out if you are interested.

// 1.4. JavaScript Coding Conventions

// JavaScript coding conventions are a set of rules that tell how JavaScript code should be written. They help to make code more readable, reusable, and maintainable.

// Some of the most common JavaScript coding conventions include:

// Naming conventions for variables, functions, and classes.
// Rules for the use of whitespace, indentation, and comments.
// Programming practices and principles.
// Following these conventions will help you write cleaner, more readable, and more maintainable JavaScript code.

// Here are some additional benefits of using JavaScript coding conventions:

// They can help to improve code quality.
// They can help to reduce the number of bugs.
// They can make code easier to debug.
// They can make code easier to understand.
// They can make code easier to share with others.

// 1.4.1. Conventions use in 30DaysOfJavaScript

// In this challenge, we follow the regular JavaScript coding conventions, but we also add some of our own preferences.

// Here are our conventions:

// We use camelCase for variables and functions.
// All variable names start with a letter.
// We use const for constants, arrays, objects, and functions.
// We use single quotes or backticks for strings.
// We do not use semicolons.
// We put spaces around arithmetic operators, assignment operators, and after commas.
// We use arrow functions instead of function declarations.
// We use explicit returns instead of implicit returns for one-liner functions.
// We do not use trailing commas in the last value of an object.
// **We prefer the +=, -=, *=, /=, and = operators instead of the longer versions.
// When we use console.log(), we add a tag string to identify where the console output is coming from.

// 1.4.2. Variables

let firstName = 'Aamir';
let lastName = 'Shaikh';
let country = 'India';
let city = 'Mumbai';

const PI = Math.PI;
const gravity = 9.81;

// 1.4.3. Arrays

// We chose to make array names plural

const names = ['Aamir', 'John'];
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const languages = ['English'];
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python'];
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'];

// 1.4.4. Functions

// Functions are a way of grouping code together so that it can be reused. There are four types of functions in JavaScript: function declarations, expression functions, arrow functions, and anonymous functions.

// In this challenge, we will use arrow functions instead of the other types of functions. Arrow functions are a new feature in JavaScript that were introduced in ES6. They are a concise and easy-to-use way of creating functions.

// Arrow functions are not a replacement for other types of functions. They have some limitations, such as the fact that they cannot be used as constructors.

// We will use explicit returns instead of implicit returns for one-liner functions. This makes our code more explicit and easier to read.

// function which return full name of a person

const printFullName = (firstName, lastName) => firstName + ' ' + lastName;

// function which calculates a square of a number

const square = (n) => n * n;

// a function which generate random hexa colors

const hexaColor = () => {
  const str = '0123456789abcdef';
  let hexa = '#';
  let index;
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length);
    hexa += str[index];
  }
  return hexa;
};

// a function which shows date and time

const showDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  const dateMonthYear = date + '.' + month + '.' + year;
  const time = hours + ':' + minutes;
  const fullTime = dateMonthYear + ' ' + time;
  return fullTime;
};

// 1.4.5. Loops

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// declaring an array variable

const names2 = ['Aamir', 'John'];

// iterating an array using regular for loop

let len = names2.length;
for (let i = 0; i < len; i++) {
  console.log(names[i].toUpperCase());
}

// iterating an array using for of

for (const name of names2) {
  console.log(name.toUpperCase());
}

// iterating array using forEach

names2.forEach((name) => name.toUpperCase());

const person = {
  firstName: 'Aamir',
  lastName: 'Shaikh',
  age: 23,
  country: 'India',
  city: 'Mumbai',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python'],
  isMarried: false
};

for (const key in person) {
  console.log(key);
}

// 1.4.6. Objects

// declaring object literal

const person3 = {
  firstName: 'Aamir',
  lastName: 'Shaikh',
  age: 23,
  country: 'India',
  city: 'Mumbai',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python'],
  isMarried: false
};

// iterating through object keys

for (const key in person3) {
  console.log(key, person3[key]);
}

// 1.4.7. Conditional

// if else

let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
} else {
  console.log(`${num} is a negative number`);
}

// if else if else if else

let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a == 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is not a number`);
}

// Switch More Examples

// let dayUserInput = prompt('What day is today ?');
// let day = dayUserInput.toLowerCase();

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday');
//     break;
//   case 'tuesday':
//     console.log('Today is Tuesday');
//     break;
//   case 'wednesday':
//     console.log('Today is Wednesday');
//     break;
//   case 'thursday':
//     console.log('Today is Thursday');
//     break;
//   case 'friday':
//     console.log('Today is Friday');
//     break;
//   case 'saturday':
//     console.log('Today is Saturday');
//     break;
//   case 'sunday':
//     console.log('Today is Sunday');
//     break;
//   default:
//     console.log('It is not a week day.');
// }

// ternary

let isRaining = true;
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');

// 1.4.8. Classes

// defining class
class Person {
  constructor(firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
