// 1. Write a function findLargest that takes an array of numbers as an argument and returns the largest number in the array. Handle the case where the argument is not an array or contains no numbers by throwing an error with the message "Argument must be an array of numbers".

const findLargest = (numbers) => {
  try {
    const isAllNumbers = numbers.every((item) => typeof item === 'number');

    if (!Array.isArray(numbers) || !isAllNumbers) {
      throw new Error('Argument must be an array of numbers');
    }

    return Math.max(...numbers);
  } catch (err) {
    console.log(err.message);
  }
};
console.log(findLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2. Write a function reverseString that takes a string as an argument and returns the reversed string. Handle the case where the argument is not a string by throwing an error with the message "Argument must be a string".

const reverseString = (str) => {
  try {
    if (typeof str !== 'string') {
      throw new Error('Argument must be a string');
    }

    return str.split('').reverse().join('');
  } catch (err) {
    console.log(err.message);
  }
};
console.log(reverseString('aamir'));
