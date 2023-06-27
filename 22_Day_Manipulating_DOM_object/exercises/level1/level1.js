// 1. Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.

// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red

const divContainer = document.createElement('div');
divContainer.classList.add('column-container');
document.body.appendChild(divContainer);

function generateNumberElements() {
  for (let i = 0; i <= 101; i++) {
    const number = document.createElement('h1');
    number.textContent = i;

    styleNumber(number, i);

    divContainer.appendChild(number);
  }
}

const styleNumber = (number, i) => {
  if (isPrime(i)) {
    number.classList.add('red');
  } else if (i % 2 === 0) {
    number.classList.add('green');
  } else {
    number.classList.add('yellow');
  }
};

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

generateNumberElements();
