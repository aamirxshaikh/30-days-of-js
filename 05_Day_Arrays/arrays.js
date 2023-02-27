// 1. How to create an empty array

// Using Array constructor

// const arr = Array();

// or

// let arr = new Array();

// Using square brackets([])
// This the most recommended way to create an empty list

// const arr = [];

// console.log(arr); // []

// 2. How to create an array with values

let numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
let fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
let vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
let animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
let webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
let countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// Print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);

// Array can have items of different data types

let arr = [
  "Aamir",
  250,
  true,
  { country: "India", city: "Mumbai" },
  { skills: ["HTML", "CSS", "JS", "React", "Linux"] },
]; // arr containing different data types

console.log(arr);

// 3. Creating an array using split

let js = "JavaScript";
const charsInJavaScript = js.split("");
console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");
console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

txt = txt.replace(/[^a-zA-Z0-9\s]/g, "");

const words = txt.split(" ");
console.log(words);
//TODO: // the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// 4. Accessing array items using index

fruits = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[0]; // we are accessing the first item using its index

console.log(firstFruit); // banana

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit); // lemon

// 5. Modifying array element

numbers = [1, 2, 3, 4, 5];
numbers[0] = 10; // changing 1 at index 0 to 10
numbers[1] = 20; // changing  2 at index 1 to 20

console.log(numbers); // [10, 20, 3, 4, 5]

// 6. Methods to manipulate array

// 6.1. Array Constructor

arr = Array(); // creates an an empty array
console.log(arr);

const emptyValues = Array(8); // it creates eight empty values
console.log(emptyValues); // [empty x 8]

// 6.1. Creating static values with fill

const nValues = Array(8).fill("N"); // it creates eight element values filled with 'X'
console.log(nValues); // ['N', 'N','N','N','N','N','N','N']

// 6.2. Concatenating array using concat

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]

// 6.3. Getting array length

console.log(nValues.length); // 8

// 6.4. Getting index of an element in arr array

numbers = [1, 2, 3, 4, 5];

console.log(numbers.indexOf(5)); // -> 4
console.log(numbers.indexOf(0)); // -> -1
console.log(numbers.indexOf(1)); // -> 0
console.log(numbers.indexOf(6)); // -> -1

// 6.5. Check an element if it exist in an array.

fruits = ["banana", "orange", "mango", "lemon"];
let index = fruits.indexOf("banana"); // 0

if (index === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}

// or

// we can use also ternary here
index === -1
  ? console.log("This fruit does not exist in the array")
  : console.log("This fruit does exist in the array");

// 6.6. Getting last index of an element in array

numbers = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers.lastIndexOf(2)); // 7
console.log(numbers.lastIndexOf(0)); // -1
console.log(numbers.lastIndexOf(1)); //  6
console.log(numbers.lastIndexOf(4)); //  3
console.log(numbers.lastIndexOf(6)); // -1

// 6.7. includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(5)); // true
console.log(numbers.includes(0)); // false
console.log(numbers.includes(1)); // true
console.log(numbers.includes(6)); // false

// 6.8. Checking array

console.log(Array.isArray(numbers)); // true

console.log(Array.isArray(10)); // false

// 6.9. Converting array to string

numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // 1,2,3,4,5

// 6.10. Joining array elements

numbers = [1, 2, 3, 4, 5];
console.log(numbers.join()); // 1,2,3,4,5

const names = ["John", "Jane", "Max", "Mark"];

console.log(names.join()); // John,Jane,Max,Mark
console.log(names.join("")); //JohnJaneMaxMark
console.log(names.join(" ")); //John Jane Max Mark
console.log(names.join(", ")); //John, Jane, Max, Mark
console.log(names.join(" # ")); //John # Jane # Max # Mark

// 6.11. Slice array elements

// Slice: To cut out a multiple items in range. It takes two parameters: starting and ending position. It doesn't include the ending position.

numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice()); // -> it copies all  item
console.log(numbers.slice(0)); // -> it copies all  item
console.log(numbers.slice(0, numbers.length)); // it copies all  item
console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position

// 6.12. Splice method in array

// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

numbers = [1, 2, 3, 4, 5];
numbers.splice();

console.log(numbers); // -> remove all items

numbers = [1, 2, 3, 4, 5];
numbers.splice(0, 1);

console.log(numbers); // remove the first item

numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(3, 3, 7, 8, 9);
console.log(numbers); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
console.log(numbers.splice(3, 3, 7, 8, 9)); // -> [7, 8, 9] // it returns remove elements from numbers

// 6.13. Adding item to an array using push

arr = ["item1", "item2", "item3"];
arr.push("new item");

console.log(arr); // ['item1', 'item2','item3','new item']

numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers); // -> [1,2,3,4,5,6]

numbers.pop(); // -> remove one item from the end
console.log(numbers); // -> [1,2,3,4,5]

fruits = ["banana", "orange", "mango", "lemon"];
fruits.push("apple");
console.log(fruits); // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push("lime");
console.log(fruits); // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']

// 6.14. Removing the end element using pop

numbers = [1, 2, 3, 4, 5];
numbers.pop(); // -> remove one item from the end
console.log(numbers); // -> [1,2,3,4]

// 6.15. Removing an element from the beginning

numbers = [1, 2, 3, 4, 5];
numbers.shift(); // -> remove one item from the beginning
console.log(numbers); // -> [2,3,4,5]

// 6.16. Add an element from the beginning

numbers = [1, 2, 3, 4, 5];
numbers.unshift(0); // -> add one item from the beginning
console.log(numbers); // -> [0,1,2,3,4,5]

// 6.17. Reversing array order

numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // -> reverse array order
console.log(numbers); // [5, 4, 3, 2, 1]

numbers.reverse();
console.log(numbers); // [1, 2, 3, 4, 5]

// 6.18. Sorting elements in array

webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];

webTechs.sort();
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse(); // after sorting we can reverse it
console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// 6.19. Array of arrays

const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arrayOfArray[0]); // [1, 2, 3]

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
