// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

// let age = prompt("Enter your age:");

// console.log(
//   age >= 18
//     ? `You are old enough to drive.`
//     : `You are left with ${18 - age} years to drive.`
// );

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.

// let myAge = 23;
// let yourAge = prompt("Enter your age:");

// if (myAge > yourAge) {
//   console.log(`You are ${myAge - yourAge} years younger than me.`);
// } else {
//   console.log(`You are ${yourAge - myAge} years older than me.`);
// }

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//   let a = 4
//   let b = 3
//   4 is greater than 3

// using if else

// let a = 4;
// let b = 3;

// if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} is less than ${b}`);
// }

// using ternary operator

// console.log(`${a} is ${a > b ? "greater" : "less"} than ${b}`);

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number.

// Enter a number: 9
// 9 is is an odd number.

// using if else

let number = prompt("Enter a number:");

if (number % 2 === 0) {
  console.log(`${number} is an even number.`);
} else {
  console.log(`${number} is an odd number.`);
}

// using ternary operator

console.log(`${number} is an ${number % 2 === 0 ? "even" : "odd"} number.`);
