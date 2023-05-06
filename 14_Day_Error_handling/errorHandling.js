// 1. Error Handling

// eg. 1

try {
  let lastName = 'Aamir';
  let fullName = fistName + ' ' + lastName;
} catch (err) {
  console.log(err);
}

// eg. 2

try {
  let lastName2 = 'Shaikh';
  let fullName2 = fistName2 + ' ' + lastName2;
} catch (err) {
  console.error(err); // we can use console.log() or console.error()
} finally {
  console.log('In any case I will be executed');
}

// eg. 3

try {
  let lastName3 = 'Shaikh';
  let fullName3 = fistName3 + ' ' + lastName3;
} catch (err) {
  console.log('Name of the error', err.name);
  console.log('Error message', err.message);
} finally {
  console.log('In any case I will be executed');
}

// eg. 4

const throwErrorExampleFun = () => {
  let x = 3;
  try {
    if (x == '') throw 'empty';
    if (isNaN(x)) throw 'not a number';
    x = Number(x);
    if (x < 5) throw 'too low';
    if (x > 10) throw 'too high';
  } catch (err) {
    console.log(err);
  }
};
throwErrorExampleFun();

// 1.1. Error Types

// ReferenceError

// let firstName = 'Aamir';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// SyntaxError

// let square = 2 x 2
// console.log(square)
// console.log('Hello, world")

// TypeError

// let num = 10;
// console.log(num.toLowerCase());
