// 1. for Loop

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// 0 1 2 3 4 5

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 5 4 3 2 1 0

for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

let countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
let newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}

console.log(newArr);
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

// Adding all elements in the array

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]; // can be shorten, sum += numbers[i]
}

console.log(sum); // 15

// Creating a new array based on the existing array

numbers = [1, 2, 3, 4, 5];
newArr = [];
sum = 0;

for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] ** 2);
}

console.log(newArr); // [1, 4, 9, 16, 25]

countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
newArr = [];

for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}

console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// 2. while loop

let i = 0;

while (i <= 5) {
  console.log(i);
  i++;
}

// 0 1 2 3 4 5

// 3. do while loop

i = 0;

do {
  console.log(i);
  i++;
} while (i <= 5);

// 0 1 2 3 4 5

// 4. for of loop

numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}

// 1 2 3 4 5

for (const number of numbers) {
  console.log(number * number);
}

// 1 4 9 16 25

// adding all the numbers in the array

sum = 0;

for (const number of numbers) {
  sum = sum + number;
  // can be also shorten like this, sum += number
}

console.log(sum); // 15

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const webTech of webTechs) {
  console.log(webTech.toUpperCase());
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const webTech of webTechs) {
  console.log(webTech[0]); // get only the first letter of each element,  H C J R N M
}

countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
newArr = [];

for (const country of countries) {
  newArr.push(country.toUpperCase());
}

console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// 5. break

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }

  console.log(i);
}

// 0 1 2

// 5. continue

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// 0 1 2 4 5
