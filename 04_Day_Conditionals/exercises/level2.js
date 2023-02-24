// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F

// if .. else

// let score = 88;

// if (score >= 80) {
//   console.log("A");
// } else if (score >= 70) {
//   console.log("B");
// } else if (score >= 60) {
//   console.log("C");
// } else if (score >= 50) {
//   console.log("D");
// } else if (score >= 0) {
//   console.log("F");
// } else {
//   console.log("Invalid score");
// }

// switch

// let score = 88;
// let grade;

// switch (true) {
//   case score >= 80:
//     grade = "A";
//     break;
//   case score >= 70:
//     grade = "B";
//     break;
//   case score >= 60:
//     grade = "C";
//     break;
//   case score >= 50:
//     grade = "D";
//     break;
//   case score >= 0:
//     grade = "F";
//     break;
//   default:
//     grade = "Invalid score";
// }

// console.log(grade);

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// if .. else

// let input = "September";
// let season;

// if (input === "September" || input === "October" || input === "November") {
//   season = "Autumn";
// } else if (
//   input === "December" ||
//   input === "January" ||
//   input === "February"
// ) {
//   season = "Winter";
// } else if (input === "March" || input === "April" || input === "May") {
//   season = "Spring";
// } else if (input === "June" || input === "July" || input === "August") {
//   season = "Summer";
// } else {
//   season = undefined;
// }

// console.log(season ? `The season is ${season}` : `Input is invalid`);

// switch

// let input = "July";
// let season;

// switch (input) {
//   case "September":
//   case "October":
//   case "November":
//     season = "Autumn";
//     break;
//   case "December":
//   case "January":
//   case "February":
//     season = "Winter";
//     break;
//   case "March":
//   case "April":
//   case "May":
//     season = "Spring";
//     break;
//   case "June":
//   case "July":
//   case "August":
//     season = "Summer";
//     break;
//   default:
//     season = undefined;
// }

// console.log(season ? `The season is ${season}` : `Input is invalid`);

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.

let input = prompt("Enter day");

input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

switch (input) {
  case "Saturday":
  case "Sunday":
    console.log(`${input} is a weekend.`);
    break;
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log(`${input} is a working day.`);
    break;
  default:
    console.log("Invalid input");
}
