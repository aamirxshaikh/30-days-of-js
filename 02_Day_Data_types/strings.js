let space = " "; // an empty space string
let firstName = "Aamir";
let lastName = "Shaikh";
let country = "India";
let city = "Mumbai";
let age = 23;
let language = "JavaScript";
let quote =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo nibh, luctus ullamcorper rutrum iaculis, interdum id velit. Praesent vulputate sagittis nibh et dapibus.";
let quotWithBackTick = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo nibh, luctus ullamcorper rutrum iaculis, interdum id velit. Praesent vulputate sagittis nibh et dapibus.`;

// String Concatenation

let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

// Concatenating Using Addition Operator

let personInfoOne = fullName + ". I am " + age + ". I live in " + country; // ES5 string addition

console.log(personInfoOne);

// Long Literal Strings

// We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line.

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor \
quam vitae dolor consequat, vitae pellentesque ipsum dapibus. Curabitur ac leo accumsan,\
posuere lectus eu, faucibus lorem. Nam tincidunt, nisi quis tristique hendrerit, \
urna magna pellentesque odio, ac scelerisque tellus arcu et erat. Nulla facilisi. \
Duis vitae orci sagittis, vehicula felis sed, venenatis est. Nullam euismod tellus \
augue, vel tincidunt ante elementum id. Integer at ultricies eros. Vestibulum eget ex\
 sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos";

console.log(paragraph);

// Escape Sequences in Strings

console.log("Hello .\nHow are you ?"); // line break
console.log("Days\tTopics\tExercises");
console.log("Day 1\t3\t5");
console.log("Day 2\t3\t5");
console.log("Day 3\t3\t5");
console.log("Day 4\t3\t5");
console.log("This is a backslash  symbol (\\)"); // To write a backslash
console.log('In every programming language it starts with "Hello, World!"');
console.log("In every programming language it starts with 'Hello, World!'");
console.log("The saying 'Seeing is Believing' isn't correct in 2020");

// Template Literals (Template Strings)

console.log(`The sum of 2 and 3 is 5`); // statically writing the data

let a = 12;
let b = 13;

console.log(`The sum of ${a} and ${b} is ${a + b}`); // injecting the data dynamically
console.log(`${a} is greater than ${b}: ${a > b}`);

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //ES6 - String interpolation method

console.log(personInfoTwo);

// String Methods

// length: The string length method returns the number of characters in a string included empty space.

let js = "JavaScript";
console.log(js.length); // 10

console.log(firstName.length); // 5

// Let us access different characters in 'JavaScript' string.

let string = "JavaScript";
let firstLetter = string[0];

console.log(firstLetter); // J

let secondLetter = string[1]; // a
let thirdLetter = string[2];
let lastLetter = string[9];

console.log(lastLetter); // t

let lastIndex = string.length - 1;

console.log(lastIndex); // 9
console.log(string[lastIndex]); // t

// toUpperCase(): this method changes the string to uppercase letters.

console.log(string.toUpperCase()); // JAVASCRIPT

console.log(firstName.toUpperCase()); // AAMIR

console.log(country.toUpperCase()); // INDIA

// toLowerCase(): this method changes the string to lowercase letters.

console.log(string.toLowerCase()); // javascript

console.log(firstName.toLowerCase()); // aamir

console.log(country.toLowerCase()); // india

// substr(): It takes two arguments, the starting index and number of characters to slice.

console.log(string.substr(4, 6)); // Script

console.log(country.substr(2, 4)); // dia

// substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

console.log(string.substring(0, 4)); // Java
console.log(string.substring(4, 10)); // Script
console.log(string.substring(4)); // Script

console.log(country.substring(0, 2)); // In
console.log(country.substring(2, 5)); // dia
console.log(country.substring(2)); // dia

// split(): The split method splits a string at a specified place.

string = "30 Days Of JavaScript";

console.log(string.split()); // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(" ")); // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

console.log(firstName.split()); // Change to an array - > ["Aamir"]
console.log(firstName.split("")); // Split to an array at each letter ->  ["A", "a", "m", "i", "r"]

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(",")); // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

// trim(): Removes trailing space in the beginning or the end of a string.

string = "   30 Days Of JavaScript   ";

console.log(string);
console.log(string.trim(" "));

firstName = " Aamir ";

console.log(firstName);
console.log(firstName.trim()); // still removes spaces at the beginning and the end of the string

// includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

string = "30 Days Of JavaScript";

console.log(string.includes("Days")); // true
console.log(string.includes("days")); // false - it is case sensitive!
console.log(string.includes("Script")); // true
console.log(string.includes("script")); // false
console.log(string.includes("java")); // false
console.log(string.includes("Java")); // true

country = "Finland";

console.log(country.includes("fin")); // false
console.log(country.includes("Fin")); // true
console.log(country.includes("land")); // true
console.log(country.includes("Land")); // false

// replace(): takes as a parameter the old substring and a new substring.

string = "30 Days Of JavaScript";
console.log(string.replace("JavaScript", "Python")); // 30 Days Of Python

// charAt(): Takes index and it returns the value at that index

string = "30 Days Of JavaScript";
console.log(string.charAt(0)); // 3

lastIndex = string.length - 1;
console.log(string.charAt(lastIndex)); // t

// charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index

string = "30 Days Of JavaScript";
console.log(string.charCodeAt(3)); // D ASCII number is 68

lastIndex = string.length - 1;
console.log(string.charCodeAt(lastIndex)); // t ASCII is 116

// indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

string = "30 Days Of JavaScript";

console.log(string.indexOf("D")); // 3
console.log(string.indexOf("Days")); // 3
console.log(string.indexOf("days")); // -1
console.log(string.indexOf("a")); // 4
console.log(string.indexOf("JavaScript")); // 11
console.log(string.indexOf("Script")); //15
console.log(string.indexOf("script")); // -1

// lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

string = "I love JavaScript.";

console.log(string.lastIndexOf("love")); // 2
console.log(string.lastIndexOf("you")); // -1
console.log(string.lastIndexOf("JavaScript")); // 7

// concat(): it takes many substrings and joins them.

string = "30";
console.log(string.concat("Days", "Of", "JavaScript")); // 30DaysOfJavaScript

country = "In";
console.log(country.concat("dia")); // India

// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

string = "I love JavaScript.";

console.log(string.startsWith("I")); // true
console.log(string.startsWith("love")); // false
console.log(string.startsWith("hello")); // false

country = "India";

console.log(country.startsWith("I")); // true
console.log(country.startsWith("i")); // false
console.log(country.startsWith("ia")); //  false

// endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).

string = "I love JavaScript";

console.log(string.endsWith("Script")); // true
console.log(string.endsWith("script")); // false
console.log(string.endsWith("love JavaScript")); // true

country = "Finland";

console.log(country.endsWith("land")); // true
console.log(country.endsWith("fin")); // false
console.log(country.endsWith("Fin")); //  false

// search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.

string = "I love JavaScript.";

console.log(string.search("love")); // 2
console.log(string.search(/javascript/gi)); // 7

// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null.

string = "love";
let patternOne = /love/; // with out any flag
let patternTwo = /love/gi; // g-means to search in the whole text, i - case insensitive

string = "I love JavaScript.";

console.log(string.match("love"));

let pattern = /love/gi;
console.log(string.match(pattern)); // ["love"]

// Let us extract numbers from text using a regular expression.

let txt = "This is 30 days of JavaScript.";
let regEx = /\d+/;

console.log(txt.match(regEx));
console.log(txt.match(/\d+/g)); // ["30"]

// repeat(): it takes a number as argument and it returns the repeated version of the string.

string = "love";
console.log(string.repeat(10)); // lovelovelovelovelovelovelovelovelovelove
