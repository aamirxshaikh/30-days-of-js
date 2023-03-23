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

const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare);

// eg. 3

const names = ['Aamir', 'Alex', 'Elias', 'Brook'];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

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

const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
);

console.log(countriesFirstThreeLetters);
