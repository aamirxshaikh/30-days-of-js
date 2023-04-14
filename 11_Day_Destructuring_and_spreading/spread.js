// 2. Spread

// 2.1 Spread or Rest Operator

// When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that we use spread operator to spread array elements to another array.

// 2.2 Spread operator to get the rest of array elements

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);

// eg. 2

const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland',
];

let [gem, fra, , ...nordicCountries] = countries;

console.log(gem);
console.log(fra);
console.log(nordicCountries);

// 2.3 Spread operator to copy array

const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

// eg. 3

const frontEnd = ['HTML', 'CSS', 'JS', 'React'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [...frontEnd, ...backEnd];

console.log(fullStack);

// 2.4 Spread operator to copy object

const user = {
  name: 'Aamir',
  title: 'Developer',
  country: 'India',
  city: 'Mumbai',
};

const copiedUser = { ...user };
console.log(copiedUser);

// Modifying or changing the object while copying

const user2 = {
  name: 'Aamir',
  title: 'Developer',
  country: 'India',
  city: 'Mumbai',
};

const copiedUser2 = { ...user, title: 'Instructor' };
console.log(copiedUser2);

// eg. 2 - Changing property values

const original = { a: 1, b: 2 };
const copy = { ...original, b: 3 };
console.log(copy);

// eg. 3 - Removing properties

const original2 = { a2: 1, b2: 2 };
const { b2, ...copy2 } = original2;
console.log(copy2);

// eg. 4 - Modifying nested properties

const original3 = { a3: { b3: 2 } };
const copy3 = { ...original3, a3: { ...original3.a3, c3: 3 } };
console.log(copy3);

// 2.4.1 Spread operator with arrow function

// Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.

const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5, 6, 7);

// eg. 2

const sumAllNums2 = (...args) => {
  let sum = 0;

  for (const num of args) {
    sum += num;
  }

  return sum;
};

console.log(sumAllNums2(1, 2, 3, 4, 5));
