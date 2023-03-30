// 1. Higher Order Function

// 1.1. Callback

// A callback is a function which can be passed as parameter to other function.

const callback = (n) => {
  return n ** 2;
};

// function that takes other function as a callback

function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));

const addTwo = (n) => {
  return n + 2;
};

// eg. 2

function multiplyByFive(callback, n) {
  return callback(n) * 5;
}

console.log(multiplyByFive(addTwo, 3));

// eg. 3

function filterArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const numbersForFilterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven = (num) => num % 2 === 0;
console.log(filterArray(numbersForFilterArray, isEven));

// eg. 4

function mapString(str, callback) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += callback(str[i]);
  }
  return result;
}

const message = 'Hello World!';
const toUpper = (char) => char.toUpperCase();
console.log(mapString(message, toUpper));

// eg. 5

function sortArray(arr, callback) {
  return arr.sort(callback);
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 20 },
];

const sortByAge = (a, b) => a.age - b.age;
console.log(sortArray(people, sortByAge));

// 1.2. Returning function

// Higher order functions return function as a value​

const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};

console.log(higherOrder(2)(3)(10));

// eg. 2

const multiplyBy = (n) => {
  const add = (m) => {
    const multiply = (t) => {
      return n * m * t;
    };
    return multiply;
  };
  return add;
};

console.log(multiplyBy(2)(3)(5));

// eg. 3

const multiplyBySum = (a, b) => {
  return (num) => {
    return num * (a + b);
  };
};

const multiplyByFivePlusThree = multiplyBySum(5, 3);
console.log(multiplyByFivePlusThree(10));

// eg. 4

const addFixedValue = (value) => {
  return (num) => {
    console.log(num + value);
  };
};

const addTen = addFixedValue(10);
addTen(5);

// eg. 5

const generateOperations = (operationType) => {
  const operations = {
    addition: (a, b) => a + b,
    subtraction: (a, b) => a - b,
    multiplication: (a, b) => a * b,
    division: (a, b) => a / b,
  };

  const selectedOperation = operations[operationType];

  if (selectedOperation) {
    const executeOperation = (num1) => {
      const doWhatEver = (num2) => {
        return selectedOperation(num1, num2);
      };
      return doWhatEver;
    };
    return executeOperation;
  } else {
    return 'Invalid operation';
  }
};

const add = generateOperations('addition')(5)(10);
console.log(add); // Output: 15

const multiply = generateOperations('multiplication')(3)(5);
console.log(multiply); // Output: 15

// forEach method uses call back.

const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;

  const callback = function (element) {
    sum += element;
  };

  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers));

// The above example can be simplified as follows:

const sumArray2 = (arr) => {
  let sum = 0;

  arr.forEach(function (element) {
    sum += element;
  });

  return sum;
};
console.log(sumArray2(numbers));

// 1.3. Setting time

// In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

// 1.3.1. setInterval

function sayHello() {
  console.log('Hello');
}
// setInterval(sayHello, 1000); // it prints hello in every second, 1000ms is 1s

// eg. 2

const displayTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  console.log(time);
};

// setInterval(displayTime, 1000);

// eg. 3

let count = 10;

const countdown = () => {
  console.log(count);
  count--;
  if (count < 0) {
    clearInterval(timer);
    console.log('Time is up!');
  }
};

const timer = setInterval(countdown, 1000);

// 1.3.2. setTimeout

function sayHello() {
  console.log('Hello');
}

setTimeout(sayHello, 2000); // it prints hello after it waits for 2 seconds.
