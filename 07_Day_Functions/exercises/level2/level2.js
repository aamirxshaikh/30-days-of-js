// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c, x) {
  return (-a * x - c) / b;
}

const y = solveLinEquation(2, 3, 4, 1);
console.log(`y = ${y}`);

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadratic(a, b, c) {
  let x1, x2;

  const delta = b ** 2 - 4 * a * c;

  if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return {
      x1,
      x2,
    };
  } else if (delta === 0) {
    x1 = -b / (2 * a);

    return {
      x1,
    };
  } else {
    return {};
  }
}

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr) {
  for (let element of arr) {
    console.log(element);
  }
}

printArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const readable = `${day}/${month}/${year} ${hours}:${minutes}`;

  console.log(readable);
}

showDateTime(); // 08/03/2023 20:24

// 5. Declare a function name swapValues. This function swaps value of x to y.

function swapValues(x, y) {
  [x, y] = [y, x];
  console.log(`x = ${x}, y = ${y}`);
}

swapValues(3, 4); // x => 4, y=>3
swapValues(4, 5); // x = 5, y = 4

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arr) {
  let revArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }

  return revArr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); //[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"])); //['C', 'B', 'A']

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
  let capitalizeArray = [];

  for (let element of arr) {
    capitalizeArray.push(
      element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
    );
  }

  return capitalizeArray;
}

console.log(capitalizeArray(["abc", "bCd", "cdE"]));

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(arr, item) {
  arr.push(item);
  return arr;
}

let arr = ["apple", "banana"];
let newArr = addItem(arr, "orange");
console.log(newArr);

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(arr, index) {
  if (index < 0 || index >= arr.length) {
    return arr;
  }

  arr.splice(index, 1);

  return arr;
}

let arr2 = ["apple", "banana", "watermelon", "melon", "berry", "mango"];
let newArr2 = removeItem(arr2, 0);
console.log(newArr2);

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(number) {
  return (number * (number + 1)) / 2;
}

let sum = sumOfNumbers(5);
console.log(sum);

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(number) {
  let sum = 0;

  for (let i = 1; i <= number; i += 2) {
    sum += i;
  }

  return sum;
}

let sumOdds = sumOfOdds(5);
console.log(sumOdds);

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEven(number) {
  let sum = 0;

  for (let i = 0; i <= number; i += 2) {
    sum += i;
  }

  return sum;
}

let sumEven = sumOfEven(10);
console.log(sumEven);

// or

function sumOfEven2(number) {
  const n = Math.floor(number / 2);

  return n * (n + 1);
}

let sumEven2 = sumOfEven2(5);
console.log(sumEven2);

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(number) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      sumEven++;
    } else {
      sumOdd++;
    }
  }

  return [sumEven, sumOdd];
}

let evenOdds = evensAndOdds(100);
console.log(`The number of odds are ${evenOdds[1]}.`); // The number of odds are 50.
console.log(`The number of odds are ${evenOdds[0]}.`); // The number of evens are 51.

// or

function evensAndOdds2(number) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i <= number; i++) {
    if (i & 1) {
      sumOdd++;
    } else {
      sumEven++;
    }
  }

  return [sumEven, sumOdd];
}

let evenOdds2 = evensAndOdds2(100);
console.log(`The number of odds are ${evenOdds2[1]}.`); // The number of odds are 50.
console.log(`The number of odds are ${evenOdds2[0]}.`); // The number of evens are 51.

// 14. Write a function which takes any number of arguments and return the sum of the arguments

function sumOfArguments(...args) {
  let sum = 0;

  for (let arg of args) {
    sum += arg;
  }

  console.log(sum);
}

sumOfArguments(1, 2, 3); // -> 6
sumOfArguments(1, 2, 3, 4); // -> 10

// 15. Write a function which generates a randomUserIp.

function randomUserIp() {
  const octet1 = Math.floor(Math.random() * 256);
  const octet2 = Math.floor(Math.random() * 256);
  const octet3 = Math.floor(Math.random() * 256);
  const octet4 = Math.floor(Math.random() * 254) + 1; // ensure last octet is not 0 or 255

  console.log(`${octet1}.${octet2}.${octet3}.${octet4}`);
}

randomUserIp();

// or

function randomUserIp2() {
  const octets = Array.from(
    {
      length: 4,
    },
    () => Math.floor(Math.random() * 256)
  );

  // change the last octet to a value between 1 and 254
  octets[3] = Math.floor(Math.random() * 254) + 1;

  return octets.join(".");
}

console.log(randomUserIp2());

// 16. Write a function which generates a randomMacAddress

function randomMacAddress() {
  let macArr = [];
  let characters = "ABCDEF0123456789";

  for (let i = 0; i < 12; i++) {
    const randomIndex1 = Math.floor(Math.random() * characters.length);
    const randomIndex2 = Math.floor(Math.random() * characters.length);

    macArr.push(characters[randomIndex1] + "" + characters[randomIndex2]);
  }

  console.log(macArr.join(":"));
}

randomMacAddress();

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator() {
  let hex = "#";
  let characters = "abcdef0123456789";

  while (hex.length < 7) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    hex += characters[randomIndex];
  }

  return hex;
}

console.log(randomHexaNumberGenerator());

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function userIdGenerator() {
  let id = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    id += characters[randomIndex];
  }

  return id;
}

console.log(userIdGenerator());

// or

function userIdGenerator2() {
  return Math.random().toString(36).substr(2, 7).toUpperCase();
}

console.log(userIdGenerator2());
