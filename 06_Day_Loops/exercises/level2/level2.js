// 1. Develop a small script which generate any number of characters random id:

//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba

// let id = "";

// let characters = "abcdefghijklmnopqrstuvwxyz0123456789";

// let noOfChar = Math.floor(Math.random() * (50 - 5 + 1) + 5);

// while (id.length < noOfChar) {
//   const randomIndex = Math.floor(Math.random() * characters.length);

//   if (!id.includes(characters[randomIndex])) {
//     id += characters[randomIndex];
//   }
// }

// console.log(id);

// 2. Write a script which generates a random hexadecimal number.

// '#ee33df'

// let hex = "#";

// characters = "abcdef0123456789";

// while (hex.length < 7) {
//   const randomIndex = Math.floor(Math.random() * characters.length);

//   hex += characters[randomIndex];
// }

// console.log(hex);

// or

// hex = Math.floor(Math.random() * 16777215).toString(16);
// const formattedHex = "#" + ("000000" + hex).slice(-6);
// console.log(formattedHex);

// 3. Write a script which generates a random rgb color number.

// rgb(240,180,80)

// const r = Math.floor(Math.random() * 256);
// const g = Math.floor(Math.random() * 256);
// const b = Math.floor(Math.random() * 256);

// const color = `rgb(${r},${g},${b})`;

// console.log(color);

// 4. Using the below countries array, create the following new array.

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// newArr = [];

// countries.forEach((country) => {
//   newArr.push(country.toUpperCase());
// });

// console.log(newArr);

// 5. Using the above countries array, create an array for countries length'.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

// newArr = [];

// countries.forEach((country) => {
//   newArr.push(country.length);
// });

// console.log(newArr);

// 6. Use the countries array to create the following array of arrays:

// [
// ['Albania', 'ALB', 7],
// ['Bolivia', 'BOL', 7],
// ['Canada', 'CAN', 6],
// ['Denmark', 'DEN', 7],
// ['Ethiopia', 'ETH', 8],
// ['Finland', 'FIN', 7],
// ['Germany', 'GER', 7],
// ['Hungary', 'HUN', 7],
// ['Ireland', 'IRE', 7],
// ['Iceland', 'ICE', 7],
// ['Japan', 'JAP', 5],
// ['Kenya', 'KEN', 5]
// ]

// let newArr = [];

// countries.forEach((country) => {
//   newArr.push([country, country.slice(0, 3).toUpperCase(), country.length]);
// });

// console.log(newArr);

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland']

// let arr = [];

// countries.forEach((country) => {
//   if (country.includes("land")) {
//     arr.push(country);
//   }
// });

// if (arr.length > 0) {
//   console.log(arr);
// } else {
//   console.log("All these countries are without land");
// }

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// ['Albania', 'Bolivia','Ethiopia']

// let arr = [];

// countries.forEach((country) => {
//   if (country.endsWith("ia")) {
//     arr.push(country);
//   }
// });

// if (arr.length > 0) {
//   console.log(arr);
// } else {
//   console.log("These are countries ends without ia");
// }

// 9. Using the above countries array, find the country containing the biggest number of characters.

// Ethiopia

// let max = 0;
// let longestCountries = [];

// countries.forEach((country) => {
//   if (country.length > max) {
//     max = country.length;
//     longestCountries = [country];
//   } else if (country.length === max) {
//     longestCountries.push(country);
//   }
// });

// console.log(longestCountries);

// 10. Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']

// let longestCountries = [];

// countries.forEach((country) => {
//   if (country.length === 5) {
//     longestCountries.push(country);
//   }
// });

// console.log(longestCountries);

//

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 11. Find the longest word in the webTechs array

// let max = 0;
// let longestWord;

// webTechs.forEach((webTech) => {
//   if (webTech.length > max) {
//     max = webTech.length;
//     longestWord = webTech;
//   }
// });

// console.log(longestWord);

// 12. Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

// let arr = [];

// webTechs.forEach((webTech) => {
//   arr.push([webTech, webTech.length]);
// });

// console.log(arr);

//

const mernStack = ["MongoDB", "Express", "React", "Node"];

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// let acronym = "";

// mernStack.forEach((item) => {
//   acronym += item[0];
// });

// console.log(acronym);

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// for (let i = 0; i < webTechs.length; i++) {
//   console.log(webTechs[i]);
// }

// for (let webTech of webTechs) {
//   console.log(webTech);
// }

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// let fruits = ["banana", "orange", "mango", "lemon"];
// let rev = [];

// console.log(fruits);

// for (let i = fruits.length - 1; i >= 0; i--) {
//   rev.push(fruits[i]);
// }

// console.log(rev);

// 16. Print all the elements of array as shown below.

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];

// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

console.log(fullStack);

fullStack.forEach((techs) => {
  techs.forEach((tech) => {
    console.log(tech.toUpperCase());
  });
});

// or

for (const techs of fullStack) {
  for (const tech of techs) {
    console.log(tech.toUpperCase());
  }
}
