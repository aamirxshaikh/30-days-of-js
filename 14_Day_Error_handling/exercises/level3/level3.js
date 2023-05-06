// 1. Write a function calculateArea that takes two numbers as arguments representing the length and width of a rectangle, and returns the area of the rectangle. Handle the case where either argument is not a number by throwing an error with the message "Arguments must be numbers".

const calculateArea = (length, width) => {
  try {
    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('Arguments must be numbers');
    }

    return length * width;
  } catch (err) {
    console.log(err.message);
  }
};
console.log(calculateArea(5, 10));

// 2. Write a function findWord that takes a string and a word as arguments, and returns true if the word is present in the string and false otherwise. Handle the case where either argument is not a string by throwing an error with the message "Arguments must be strings".

const findWord = (str, word) => {
  try {
    if (typeof str !== 'string' || typeof word !== 'string') {
      throw new Error('Arguments must be strings');
    }

    return str.includes(word);
  } catch (err) {
    console.log(err.message);
  }
};
console.log(findWord('Aamir', 'mir'));
