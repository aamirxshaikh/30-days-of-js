// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

// let b = Number(prompt("Enter base"));
// let h = Number(prompt("Enter height"));

// const area = 0.5 * b * h;

// console.log(`The area of the triangle is ${area}`);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

// let a = Number(prompt("Enter side a"));
// let b = Number(prompt("Enter side b"));
// let c = Number(prompt("Enter side c"));

// const perimeter = a + b + c;

// console.log(`The perimeter of the triangle is ${perimeter}`);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let length = Number(prompt("Enter length"));
// let width = Number(prompt("Enter width"));

// const area = length * width;
// const perimeter = 2 * (length + width);

// console.log(`area of rectangle is ${area}`);
// console.log(`perimeter of rectangle is ${perimeter}`);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// const pi = Math.PI;

// let r = Number(prompt("Enter radius"));

// const area = pi * r * r;
// const c = 2 * pi * r;

// console.log(`area of circle is ${area}`);
// console.log(`circumference of circle is ${c}`);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

const slope = 2;
const xIntercept = 1; // x-intercept is 1 (when y = 0)
const yIntercept = -2; // y-intercept is -2 (when x = 0)

console.log(
  `Slope: ${slope}, x-intercept: ${xIntercept}, y-intercept: ${yIntercept}`
);

// 6. slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let slope2 = (10 - 2) / (6 - 2);

console.log(slope2);

// 7. Compare the slope of above two questions.

console.log(`Slopes are equal: ${slope === slope2}`);

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

function y(x) {
  return Math.pow(x, 2) + 6 * x + 9;
}

let x = -3;
while (y(x) > 0) {
  x += 0.1;
}

console.log(`The value of x where y = 0 is approximately ${x.toFixed(2)}.`);

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

// let hours = Number(prompt("Enter hours"));
// let rate = Number(prompt("Enter rate/hour"));

// const pay = hours * rate;

// console.log(`Your weekly earning is ${pay}`);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

// let name = "Aamir";

// console.log(name.length > 7 ? "your name is long" : "your name is short");

// 11. Compare your first name length and your family name length and you should get this output.

// Your first name, Asabeneh is longer than your family name, Yetayeh

// let firstName = "Aamir";
// let lastName = "Shaikh";

// if (firstName.length > lastName.length) {
//   console.log(
//     `Your first name, ${firstName} is longer than your family name, ${lastName}`
//   );
// } else if (firstName.length < lastName.length) {
//   console.log(
//     `Your family name, ${lastName} is longer than your first name, ${firstName}`
//   );
// } else {
//   console.log(
//     `Your first name, ${firstName} is equal to your family name, ${lastName}`
//   );
// }

// or

// console.log(
//   firstName.length > lastName.length
//     ? `Your first name, ${firstName} is longer than your family name, ${lastName}`
//     : `Your family name, ${lastName} is longer than your first name, ${firstName}`
// );

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// I am 225 years older than you.

// let myAge = 24;
// let yourAge = 26;

// let diff = myAge > yourAge ? myAge - yourAge : yourAge - myAge;

// console.log(
//   `I am ${diff} ${diff > 1 ? `years` : `year`} ${
//     myAge > yourAge ? `older` : `younger`
//   } than you.`
// );

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

// let now = new Date();

// let birthYear = Number(prompt("Enter birth year"));
// let age = now.getFullYear() - birthYear;
// let isEighteen = age < 18 ? false : true;

// if (!isEighteen) {
//     console.log(`You are ${age}. You will be allowed to drive after ${18 - age} ${18 - age > 1 ? `years` : `year`}.`);
// } else {
//    console.log(`You are ${age}. You are old enough to drive`);
// }

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.

// const years = Number(prompt("Enter number of years you live"));

// const seconds = years * 365 * 24 * 60 * 60;

// console.log(`You lived ${seconds} seconds.`);

// 15. Create a human readable time format using the Date time object

// i. YYYY-MM-DD HH:mm

// const now = new Date();

// const year = now.getFullYear();
// const month = (now.getMonth() + 1).toString().padStart(2, '0');
// const day = now.getDate().toString().padStart(2, '0');
// const hours = now.getHours().toString().padStart(2, '0');
// const minutes = now.getMinutes().toString().padStart(2, '0');

// const readable = `${year}-${month}-${day} ${hours}:${minutes}`;

// console.log(readable);

// ii. DD-MM-YYYY HH:mm

// const now = new Date();

// const year = now.getFullYear();
// const month = (now.getMonth() + 1).toString().padStart(2, '0');
// const day = now.getDate().toString().padStart(2, '0');
// const hours = now.getHours().toString().padStart(2, '0');
// const minutes = now.getMinutes().toString().padStart(2, '0');

// const readable = `${day}-${month}-${year} ${hours}:${minutes}`;

// console.log(readable);

// iii. DD/MM/YYYY HH:mm

// const now = new Date();

// const year = now.getFullYear();
// const month = (now.getMonth() + 1).toString().padStart(2, "0");
// const day = now.getDate().toString().padStart(2, "0");
// const hours = now.getHours().toString().padStart(2, "0");
// const minutes = now.getMinutes().toString().padStart(2, "0");

// const readable = `${day}/${month}/${year} ${hours}:${minutes}`;

// console.log(readable);
