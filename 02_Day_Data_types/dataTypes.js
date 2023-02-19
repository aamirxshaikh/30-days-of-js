// Primitive Data Types

let word = "JavaScript";

word[0] = "X"; // This expression does not change the string stored in the variable word. So, we can say that strings are not modifiable or in other words immutable.

console.log(word); // JavaScript

let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // true

let js = "JavaScript";
let py = "Python";

console.log(js == py); //false

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // false

// Non-Primitive Data Types

let nums = [1, 20, 30];
nums[0] = 10; // As you can see, an array, which is a non-primitive data type is mutable.

console.log(nums); // [10, 20, 30]

nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums == numbers); // false

// Non-primitive data types cannot be compared by value.

let userOne = {
  name: "Aamir",
  country: "India",
};

let userTwo = {
  name: "Xyz",
  country: "India",
};

console.log(userOne == userTwo); // false

// Non-primitive values are referred to as reference types, because they are being compared by reference instead of value.

nums = [1, 2, 3];
numbers = nums;

console.log(nums == numbers); // true

userOne = {
  name: "Aamir",
  country: "India",
};

userTwo = userOne;

console.log(userOne == userTwo); // true
