// 2. Functional Programming

// 2.1. forEach

// Iterate an array elements.

const arr = [1, 2, 3, 4, 5, 6];

// arr.forEach(function (element, index, arr) {
//   console.log(index, element, arr);
// });

// The above code can be written using arrow function

// arr.forEach((element, index, arr) => {
//   console.log(index, element, arr);
// });

// The above code can be written using arrow function and explicit return

// arr.forEach((element, index, arr) => console.log(index, element, arr));

// eg.2

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => console.log(num));

// eg. 3

// let sum = 0;
// numbers.forEach((num) => (sum += num));
// console.log(sum);

// eg. 4

// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
// countries.forEach((element) => console.log(element.toUpperCase()));

// 2.2. map

//  Iterate an array elements and modify the array elements.

// const modifiedArray = arr.map(function (element, index, arr) {
//   return element * 2;
// });
// console.log(modifiedArray);

// Arrow function and explicit return

const modifiedArray = arr.map((element, index) => element * 2);
console.log(modifiedArray);

// eg. 2

// const numbers = [1, 2, 3, 4, 5];
// const numbersSquare = numbers.map((num) => num * num);
// console.log(numbersSquare);

// eg. 3

// const names = ['Aamir', 'Alex', 'Elias', 'Brook'];
// const namesToUpperCase = names.map((name) => name.toUpperCase());
// console.log(namesToUpperCase);

// eg. 4

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ];
// const countriesToUpperCase = countries.map((country) => country.toUpperCase());
// console.log(countriesToUpperCase);

// Arrow function

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ];
// const countriesToUpperCase = countries.map((country) => {
//   return country.toUpperCase();
// });

// Explicit return arrow function

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ];
// const countriesToUpperCase = countries.map((country) => country.toUpperCase());

// eg. 5

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ];

// const countriesFirstThreeLetters = countries.map((country) =>
//   country.toUpperCase().slice(0, 3)
// );

// console.log(countriesFirstThreeLetters);

// eg. 6 - Doubling all elements of an array

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// eg. 7 - Converting an array of objects into an array of specific properties

// const people = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 },
//   { name: 'David', age: 20 },
// ];

// const names = people.map((person) => person.name);
// console.log(names); // Output: ['Alice', 'Bob', 'Charlie', 'David']

// eg. 8 - Capitalizing the first letter of each word in a string

const sentence = 'tHe quiCk brown fox';
const capitalized = sentence
  .split(' ')
  .map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  })
  .join(' ');

console.log(capitalized); // Output: 'The Quick Brown Fox'

// eg. 9 - Mapping an array of numbers to an array of strings with their value and index

// const numbers = [2, 4, 6, 8, 10];
// const mapped = numbers.map((num, index) => `${index}: ${num}`);
// console.log(mapped); // Output: ['0: 2', '1: 4', '2: 6', '3: 8', '4: 10']

// 2.3. filter

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

// Filter countries containing land

const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
);
console.log(countriesContainingLand);

// eg. 2

const countriesEndsByIa = countries.filter((country) => country.endsWith('ia'));
console.log(countriesEndsByIa);

// eg. 3

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters);

// eg. 4

// const scores = [
//   { name: 'Aamir', score: 95 },
//   { name: 'John', score: 98 },
//   { name: 'Mathias', score: 80 },
//   { name: 'Elias', score: 50 },
//   { name: 'Martha', score: 85 },
//   { name: 'Jane', score: 100 },
// ];

// const scoresGreaterEighty = scores.filter((score) => score.score > 80);
// console.log(scoresGreaterEighty);

// eg. 5 - Filtering even numbers from an array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6, 8]

// eg. 6 - Filtering out null and undefined values from an array

const values = [1, null, 3, undefined, 5, '', 7];
const filteredValues = values.filter(
  (value) => value !== null && value !== undefined && value !== ''
);
console.log(filteredValues); // Output: [1, 3, 5, 7]

// 2.4. reduce

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// eg. 2 - Flattening an array of arrays

const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = arrays.reduce((acc, cur) => acc.concat(cur), []);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

// eg. 3 - Counting the occurrence of each word in an array of strings

// const words = ['apple', 'banana', 'cherry', 'apple', 'cherry', 'cherry'];
// const wordCount = words.reduce((acc, cur) => {
//   if (!acc[cur]) {
//     acc[cur] = 0;
//   }
//   acc[cur]++;
//   return acc;
// }, {});
// console.log(wordCount); // Output: { apple: 2, banana: 1, cherry: 3 }

// eg. 4 - Calculating the average value of an array of numbers

// const numbers = [1, 2, 3, 4, 5];
// const average = numbers.reduce((acc, cur, index, array) => {
//   acc += cur;
//   if (index === array.length - 1) {
//     return acc / array.length;
//   }
//   return acc;
// }, 0);
// console.log(average); // Output: 3

// 2.5. every

// Check if all the elements are similar in one aspect. It returns boolean

// eg. 1 - Are all strings

// const names = ['Asabeneh', 'Mathias', 'Elias', 1, 'Brook'];
// const areAllStr = names.every((name) => typeof name === 'string');

// console.log(areAllStr);

// eg. 2 - Are all true

// const bools = [true, true, true, true];
// const areAllTrue = bools.every((b) => b === true);

// console.log(areAllTrue); // true

// eg. 3 - Check if all elements in an array are even numbers

const arr1 = [2, 4, 6, 8];
const areAllEven1 = arr1.every((num) => num % 2 === 0);
console.log(areAllEven1); // Output: true

const arr2 = [2, 4, 6, 7];
const areAllEven2 = arr2.every((num) => num % 2 === 0);
console.log(areAllEven2); // Output: false

// eg. 4 - Check if all words in an array have at least 5 characters

const words1 = ['hello', 'world', 'how', 'are', 'you'];
const hasLongWords1 = words1.every((word) => word.length >= 5);
console.log(hasLongWords1); // Output: false

const words2 = ['banana', 'watermelon', 'orange', 'pineapple'];
const hasLongWords2 = words2.every((word) => word.length >= 5);
console.log(hasLongWords2); // Output: true

// eg. 5 - Check if all elements in an array of objects have a specific property

const people1 = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie' },
];
const hasAge1 = people1.every((person) => person.age !== undefined);
console.log(hasAge1); // Output: false

const people2 = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
];
const hasAge2 = people2.every((person) => person.age !== undefined);
console.log(hasAge2); // Output: true

// 2.6. find

// Return the first element which satisfies the condition

// eg. 1

// const ages = [24, 22, 25, 32, 35, 18];
// const age = ages.find((age) => age < 20);

// console.log(age);

// eg. 2

// const names = ['Aamir Shaikh', 'John', 'Jane', 'Brook'];
// const result = names.find((name) => name.length > 7);
// console.log(result);

// eg. 3

const scores = [
  { name: 'Aamir', score: 95 },
  { name: 'Jane', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
];

const score = scores.find((user) => user.score > 80);
console.log(score);

// 2.7. findIndex

// Return the position of the first element which satisfies the condition

// const names = ['Aamir Shaikh', 'Jane', 'Elias', 'Brook'];
// const ages = [24, 22, 25, 32, 35, 18];

// const result = names.findIndex((name) => name.length > 7);
// console.log(result); // 0

// const age = ages.findIndex((age) => age < 20);
// console.log(age); // 5

// 2.8. some

// Check if some of the elements are similar in one aspect. It returns boolean

const names = ['Aamie', 'Mathias', 'Elias', 'Brook'];
const bools = [true, true, true, true];

const areSomeTrue = bools.some((b) => b === true);

console.log(areSomeTrue); //true

// eg. 2 - Are all strings

const areAllStr = names.some((name) => typeof name === 'number');
console.log(areAllStr); // false

// eg. 3 - Check if any string in an array contains a specific substring

const words = ['hello', 'world', 'how', 'are', 'you'];

const containsO = words.some((word) => word.includes('o'));

console.log(containsO); // Output: true

// 2.9. sort

// The sort methods arranges the array elements either ascending or descending order.

// 2.9.1. Sorting string values

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];
console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']

// 2.9.2. Sorting Numeric values

const numbers = [9.81, 3.14, 100, 37];
console.log(numbers.sort()); //[100, 3.14, 37, 9.81]

numbers.sort((a, b) => a - b);

console.log(numbers); // [3.14, 9.81, 37, 100]

numbers.sort((a, b) => b - a);
console.log(numbers); //[100, 37, 9.81, 3.14]

// 2.9.3. Sorting Object Arrays

const users = [
  { name: 'Aamir', age: 23 },
  { name: 'Jane', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
];

users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); // sorted ascending

// or

users.sort((a, b) => a.age - b.age);
console.log(users); // sorted ascending

users.sort((a, b) => b.age - a.age);
console.log(users); // sorted descending
