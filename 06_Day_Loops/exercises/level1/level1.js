// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

// for

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// while

let i = 0;

while (i <= 10) {
  console.log(i);

  i++;
}

// do while

i = 0;

do {
  console.log(i);

  i++;
} while (i <= 10);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// while

i = 10;

while (i >= 00) {
  console.log(i);

  i--;
}

// do while

i = 10;

do {
  console.log(i);

  i--;
} while (i >= 0);

// 3. Iterate 0 to n using for loop

let n = 20;

for (let i = 0; i <= n; i++) {
  console.log(i);
}

// 4. Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

for (let i = 1; i <= 7; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "#";
  }

  console.log(row);
}

// 5. Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// 6. Using loop print the following pattern

// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

console.log("i\ti^2\ti^3");

for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i ** 2}\t${i ** 3}`);
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i);
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); ++j) {
    if (i % j === 0) {
      isPrime = false;

      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// The sum of all numbers from 0 to 100 is 5050.

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(sum);

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}

console.log(
  `The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`
);

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

// [2550, 2500]

sumEven = 0;
sumOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}

const sumArray = [sumEven, sumOdd];

console.log(sumArray);

// 13. Develop a small script which generate array of 5 random numbers

let arr = [];

for (let i = 0; i < 5; i++) {
  const random = Math.floor(Math.random() * 100);

  arr.push(random);
}

console.log(arr);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

arr = [];

while (arr.length < 5) {
  let random = Math.floor(Math.random() * 100);

  if (!arr.includes(random)) {
    arr.push(random);
  }
}

console.log(arr);

// 15. Develop a small script which generate a six characters random id:

// 5j2khz

let id = "";

while (id.length < 6) {
  const randomNumber = Math.floor(Math.random() * 10);
  const randomLetter = Math.floor(Math.random() * (122 - 97 + 1) + 97);

  if (
    !id.includes(randomNumber) &&
    !id.includes(String.fromCharCode(randomLetter))
  ) {
    id += randomNumber;
    id += String.fromCharCode(randomLetter);
  }
}

// or 

id = "";

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

while (id.length < 6) {
  const randomIndex = Math.floor(Math.random() * characters.length);

  if (!id.includes(characters[randomIndex])) {
    id += characters[randomIndex];
  }
}

console.log(id);
