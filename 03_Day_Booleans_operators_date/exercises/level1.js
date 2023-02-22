// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = "Aamir";
const lastName = "Shaikh";
let country = "India";
let city = "Mumbai";
let age = 23;
let isMarried = false;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10

console.log(typeof "10" === typeof 10);

// 3. Check if parseInt('9.8') is equal to 10

console.log(typeof parseInt("9.8") === typeof 10);

// 4. Boolean value is either true or false.

// i. Write three JavaScript statement which provide truthy value.

if (1) {
  console.log(1);
}

if ("truthy") {
  console.log("truthy");
}

if (true) {
  console.log(true);
}

// ii. Write three JavaScript statement which provide falsy value.

if (0) {
  console.log(0);
}

if ("") {
  console.log("");
}

if (false) {
  console.log(false);
}

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 // true
// 4 >= 3 // true
// 4 < 3 // false
// 4 <= 3 // false
// 4 == 4 // true
// 4 === 4 // true
// 4 != 4 // false
// 4 !== 4 // false
// 4 != '4' false
// 4 == '4' // true
// 4 === '4' // false
// Find the length of python and jargon and make a falsy comparison statement.

console.log("python".length !== "jargon".length);

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 // true
// 4 > 3 && 10 > 12 // false
// 4 > 3 || 10 < 12 // true
// 4 > 3 || 10 > 12 // true
// !(4 > 3) // false
// !(4 < 3) true
// !(false) // true
// !(4 > 3 && 10 < 12) // false
// !(4 > 3 && 10 > 12) // true
// !(4 === '4') // true
// There is no 'on' in both dragon and python

console.log(!"dragon".includes("on") && !"python".includes("on"));

// 7. Use the Date object to do the following activities

const now = new Date();

// What is the year today?

console.log(now.getFullYear());

// What is the month today as a number?

console.log(now.getMonth() + 1);

// What is the date today?

console.log(now.getDate());

// What is the day today as a number?

console.log(now.getDay());

// What is the hours now?

console.log(now.getHours());

// What is the minutes now?

console.log(now.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.

console.log(now.getTime());
