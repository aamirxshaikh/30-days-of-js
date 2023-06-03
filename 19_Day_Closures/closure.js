// 1. Closure

// eg. 1 - Counter

function outerFunction() {
  let count = 0;

  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}

const innerFunc = outerFunction();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

// eg. 2

function outerFunction2() {
  let x = 10;

  function innerFunction2() {
    console.log(x);
  }

  return innerFunction2;
}

const closure = outerFunction2();
closure();

// eg. 3 - Private variables using closure

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    get count() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.count);

// eg. 4

function outerFunction3() {
  let count = 0;

  function plusOne() {
    count++;
    return count;
  }

  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}

const innerFuncs = outerFunction3();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);

// Refactor getItemAndComments function to use Promise.all() for better performance
