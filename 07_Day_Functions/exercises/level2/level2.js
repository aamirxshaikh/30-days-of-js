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

    return { x1, x2 };
  } else if (delta === 0) {
    x1 = -b / (2 * a);

    return { x1 };
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
