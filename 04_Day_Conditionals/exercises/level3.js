// Write a program which tells the number of days in a month.

//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

// let input = prompt("Enter a month:");
// let days;

// input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

// console.log(input);

// switch (input) {
//   case "January":
//   case "March":
//   case "May":
//   case "July":
//   case "August":
//   case "October":
//   case "December":
//     days = 31;
//     break;
//   case "April":
//   case "June":
//   case "September":
//   case "November":
//     days = 30;
//     break;
//   case "February":
//     days = 28;
//     break;
//   default:
//     console.log("Invalid input");
// }

// if (days) console.log(`${input} has ${days} days.`);

// 2. Write a program which tells the number of days in a month, now consider leap year.

let now = new Date();
let year = now.getFullYear();
let isLeapYear = false;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}

let input = prompt("Enter a month:");
let days;

input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

console.log(input);

switch (input) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    days = 31;
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    days = 30;
    break;
  case "February":
    days = isLeapYear ? 29 : 28;
    break;
  default:
    console.log("Invalid input");
}

if (days) console.log(`${input} has ${days} days.`);
