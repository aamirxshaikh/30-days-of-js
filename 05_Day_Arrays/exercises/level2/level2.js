// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// console.log(countries);
// console.log(webTechs);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let words = text.replace(/[^\w\s]/gi, "").split(/\s+/);

console.log(words.length);

// 3. In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added

if (!shoppingCart.includes("Meat")) shoppingCart.unshift("Meat");

console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added

if (!shoppingCart.includes("Sugar")) shoppingCart.push("Sugar");

console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey

const allergy = "Honey";
let index = shoppingCart.indexOf(allergy);

if (allergy && index !== -1) shoppingCart.splice(index, 1);

console.log(shoppingCart);

// modify Tea to 'Green Tea'

const item = "Tea";
index = shoppingCart.indexOf(item);

if (item && index !== -1) shoppingCart.splice(index, 1, "Green Tea");

console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

countries.includes("Ethiopia")
  ? console.log("ETHIOPIA")
  : countries.push("Ethiopia");

console.log(countries);

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

webTechs.includes("Sass")
  ? console.log("Sass is a CSS preprocess")
  : webTechs.push("Sass");

console.log(webTechs);

// 6. Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
