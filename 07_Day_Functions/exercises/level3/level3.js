// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '

function userIdGeneratedByUser() {
  let noOfCharacters = Number(prompt("Enter number of characters"));
  let noOfIds = Number(prompt("Enter number of ids"));

  let ids = [];
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < noOfIds; i++) {
    let id = "";

    for (let j = 0; j < noOfCharacters; j++) {
      const randomIndex = Math.floor(Math.random() * characters.length);

      id += characters[randomIndex];
    }

    ids.push(id);
  }

  return ids;
}

console.log(userIdGeneratedByUser().join("\n"));

// 2. Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const color = `rgb(${r},${g},${b})`;

  console.log(color);
}

rgbColorGenerator(); // rgb(125,244,255)

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

const arrayOfHexaColors = (noOfHex) => {
  let hexArr = [];

  const characters = "abcdef0123456789";

  for (let i = 0; i < noOfHex; i++) {
    let hex = "#";

    while (hex.length < 7) {
      const randomIndex = Math.floor(Math.random() * characters.length);

      hex += characters[randomIndex];
    }

    hexArr.push(hex);
  }

  console.log(hexArr);
};

arrayOfHexaColors(10);

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

const arrayOfRgbColors = (noOfRgbColors) => {
  let colors = [];

  for (let i = 0; i < noOfRgbColors; i++) {
    const r = getRandomInt(256);
    const g = getRandomInt(256);
    const b = getRandomInt(256);

    const color = `rgb(${r},${g},${b})`;

    colors.push(color);
  }

  console.log(colors);
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

arrayOfRgbColors(10);

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

const convertHexaToRgb = (hex) => {
  hex = hex.replace("#", "");

  let r = hex.substr(0, 2);
  r = convertHexToDecimal(r);

  let g = hex.substr(2, 4);
  g = convertHexToDecimal(g);

  let b = hex.substr(4, 6);
  b = convertHexToDecimal(b);

  const color = `rgb(${r},${g},${b})`;

  console.log(color);
};

const convertHexToDecimal = (hex) => {
  let decimalSubArr = [];

  for (let i = 0; i < hex.length; i++) {
    if (isNaN(hex[i])) {
      switch (hex[i]) {
        case "a":
          decimalSubArr.push("10");
          break;
        case "b":
          decimalSubArr.push("11");
          break;
        case "c":
          decimalSubArr.push("12");
          break;
        case "d":
          decimalSubArr.push("13");
          break;
        case "e":
          decimalSubArr.push("14");
          break;
        case "f":
          decimalSubArr.push("15");
          break;
      }
    } else {
      decimalSubArr.push(hex[i]);
    }
  }

  let decimal =
    decimalSubArr[0] * Math.pow(16, 1) + decimalSubArr[1] * Math.pow(16, 0);

  return decimal;
};

convertHexaToRgb("#30aa8e");

// or

function convertHexaToRgb2(hex) {
  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const rgb = `rgb(${r}, ${g}, ${b})`;

  return rgb;
}

const rgbColor = convertHexaToRgb2("#ff0000");

console.log(rgbColor);

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

const convertRgbToHexa = (rgb) => {
  let rgbArr = rgb.replace(/[^\d,]/g, "").split(",");
  let hexArr = [];

  for (const rgbValue of rgbArr) {
    let hexValue = Number(rgbValue).toString(16).padStart(2, "0");
    hexArr.push(hexValue);
  }

  const hexCode = "#" + hexArr.join("");

  console.log(hexCode);
};

convertRgbToHexa("rgb(255,0,128)");

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.

const generateColors = (type, noOfColors) => {
  if (type === "hexa") {
    const hex = generateHex(noOfColors);

    return hex.length === 1 ? hex.toString() : hex;
  } else if (type === "rgb") {
    const rgb = generateRgb(noOfColors);

    return rgb.length === 1 ? rgb.toString() : rgb;
  } else {
    return "Invalid choice";
  }
};

function generateRgb(noOfColors) {
  let rgbArr = [];

  for (let i = 0; i < noOfColors; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgb = `rgb(${r},${g},${b})`;

    rgbArr.push(rgb);
  }

  return rgbArr;
}

const generateHex = (noOfColors) => {
  let hexArr = [];

  const characters = "abcdef0123456789";

  for (let i = 0; i < noOfColors; i++) {
    let hex = "#";

    while (hex.length < 7) {
      const randomIndex = Math.floor(Math.random() * characters.length);

      hex += characters[randomIndex];
    }

    hexArr.push(hex);
  }

  return hexArr;
};

console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

const shuffleArray = (arr) => {
  const shuffledArr = [];

  while (arr.length > 0) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomElement = arr[randomIndex];

    shuffledArr.push(randomElement);
    arr.splice(randomIndex, 1);
  }

  return shuffledArr;
};

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

const factorial = (number) => {
  let fact = 1;

  for (let i = number; i > 0; i--) {
    fact *= i;
  }

  return fact;
};

console.log(factorial(10));

// or

const factorial2 = (number) => {
  if (number === 0) return 1;

  return number * factorial2(number - 1);
};

console.log(factorial2(5));

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

const isEmpty = (value) => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string" && value.trim() === "") {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === "object" && Object.keys(value).length === 0) {
    return true;
  }

  return false;
};

console.log(isEmpty(""));

// 11. Call your function sum, it takes any number of arguments and it returns the sum.

const sum = (...args) => {
  let sum = 0;

  for (const arg of args) {
    sum += arg;
  }

  return sum;
};

console.log(sum(1, 2, 3, 4, 5, 6));

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

const sumOfArrayItems = (arr) => {
  if (!Array.isArray(arr)) {
    return "Input is not an array";
  }

  if (!arr.every((item) => typeof item === "number")) {
    return "Array contains non-number elements";
  }

  let sum = 0;

  for (const arg of arr) {
    sum += arg;
  }

  return sum;
};

console.log(sumOfArrayItems([1, 2, 3, 4, 5]));

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

const average = (arr) => {
  if (!Array.isArray(arr)) {
    return "Input is not an array";
  }

  if (!arr.every((item) => typeof item === "number")) {
    return "Array contains non-number elements";
  }

  let sum = 0;

  for (const arg of arr) {
    sum += arg;
  }

  return sum / arr.length;
};

console.log(average([1, 2, 3, 4, 5]));

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

const modifyArray = (arr) => {
  if (arr.length < 5) return "Not Found";

  arr.splice(4, 1, arr[4].toUpperCase());

  return arr;
};

console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);
console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));

// 15. Write a function called isPrime, which checks if a number is prime number.

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let j = 2; j <= Math.sqrt(number); ++j) {
    if (number % j === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(7));

// 16. Write a functions which checks if all items are unique in the array.

const checkUniqueItems = (arr) => {
  for (i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }

  return true;
};

console.log(checkUniqueItems([1, 2, 3, 4, 5]));

// or

const checkUniqueItems2 = (arr) => {
  const uniqueSet = new Set(arr);
  return arr.length === uniqueSet.size;
};

console.log(checkUniqueItems2([1, 2, 3, 4, 5, 1]));

// 17. Write a function which checks if all the items of the array are the same data type.

const checkArrSameDatatype = (arr) => {
  if (
    arr.every((item) => typeof item === "number") ||
    arr.every((item) => typeof item === "boolean") ||
    arr.every((item) => typeof item === "string") ||
    arr.every((item) => typeof item === "object")
  ) {
    return true;
  }

  return false;
};

console.log(checkArrSameDatatype([1, 2, 3]));

// or

const checkArrSameDatatype2 = (arr) => {
  const types = new Set(arr.map((item) => typeof item));
  return types.size === 1;
};

console.log(checkArrSameDatatype2([1, 2, 3, true]));

// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

const isValidVariable = (variable) => {
  // Check if variable starts with a number
  if (/^[0-9]/.test(variable)) {
    return false;
  }

  // Check if variable contains invalid characters
  if (/[^a-zA-Z0-9_$]/.test(variable)) {
    return false;
  }

  // Check if variable is a reserved keyword
  const reservedKeywords = [
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "export",
    "extends",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "let",
    "new",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
  ];

  if (reservedKeywords.includes(variable)) {
    return false;
  }

  return true;
};

console.log(isValidVariable("num"));

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

const sevenRandomNumbers = () => {
  let arr = [];

  for (let i = 0; arr.length < 7; i++) {
    const rand = Math.floor(Math.random() * 10);

    if (!arr.includes(rand)) arr.push(rand);
  }

  return arr;
};

console.log(sevenRandomNumbers()); // [(1, 4, 5, 7, 9, 8, 0)]

// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

const reverseCountries = (countries) => {
  const reversedCountries = [];

  for (let i = countries.length - 1; i >= 0; i--) {
    reversedCountries.push(countries[i]);
  }

  return reversedCountries;
};

console.log(
  reverseCountries(["Finland", "Sweden", "Denmark", "Norway", "Iceland"])
);
