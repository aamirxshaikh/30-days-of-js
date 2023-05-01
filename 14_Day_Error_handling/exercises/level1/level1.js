// 1. Write a function divide that takes two numbers as arguments and returns the result of dividing the first number by the second number. Handle the case where the second number is 0 by throwing an error with the message "Cannot divide by zero".

const divide = (a, b) => {
  try {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }

    return a / b;
  } catch (err) {
    console.log(err.message);
  }
};
console.log(divide(10, 0));

// 2. Write a function concat that takes two strings as arguments and returns the concatenation of the two strings. Handle the case where one or both arguments are not strings by throwing an error with the message "Arguments must be strings".

const concat = (a, b) => {
  try {
    if (typeof a !== 'string' || typeof b !== 'string') {
      throw new Error('Arguments must be strings');
    }

    return a + ' ' + b;
  } catch (err) {
    console.log(err.message);
  }
};
console.log(concat('Aamir', 'Shaikh'));
