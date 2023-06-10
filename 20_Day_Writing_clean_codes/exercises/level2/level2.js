// 1. Create a program that prompts the user to enter their age, and then calculates and displays the number of days, hours, and minutes they have been alive.

function calculateAge() {
  let age = prompt('What is your age?');

  age = Number(age);

  const days = age * 365;
  const hours = days * 24;
  const minutes = hours * 60;

  return (
    'You have been alive for ' +
    days +
    ' days, ' +
    hours +
    ' hours, and ' +
    minutes +
    ' minutes.'
  );
}
console.log(calculateAge());

// 2. Write a program that prompts the user to enter a string, then outputs the reverse of the string.

function reverseString(string) {
  return string.split('').reverse().join('');
}
console.log(reverseString('Aamir'));

// 3. Create a program that prompts the user to enter two numbers, and then calculates and displays the greatest common divisor (GCD) of the two numbers.

function calculateGcd() {
  let a = Number(prompt('Enter the first number:'));
  let b = Number(prompt('Enter the second number:'));

  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }

  return a;
}
console.log(calculateGcd());
