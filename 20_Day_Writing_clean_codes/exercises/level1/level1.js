// 1. Write a simple JavaScript program that checks if a number is even or odd using a function declaration.

function checkEvenOrOdd(number) {
  return number % 2 === 0;
}
console.log(checkEvenOrOdd(10));

// 2. Create a program that prompts the user to enter their name, and then outputs a welcome message to the console using template literals.

const name = prompt('Enter your name');
console.log(`Welcome, ${name}`);

// 3. Write a program that prompts the user to enter a number, then checks if the number is positive, negative, or zero.

const number = prompt('Enter number');

if (number > 0) {
  console.log('Positive');
} else if (number < 0) {
  console.log('Negative');
} else {
  console.log('Zero');
}
