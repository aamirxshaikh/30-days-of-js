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
