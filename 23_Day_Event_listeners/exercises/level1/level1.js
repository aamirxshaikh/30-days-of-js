// Generating numbers and marking evens, odds and prime numbers with three different colors.

const wrapper = document.querySelector('.wrapper');
const input = document.getElementById('input');
const errorText = document.querySelector('.error-text');
const generateButton = document.getElementById('generateButton');

generateButton.addEventListener('click', handleClick);

function handleClick() {
  const inputValue = input.value.trim();

  if (inputValue === '') {
    showError('Please enter a value');
  } else if (isNaN(inputValue)) {
    showError('Please enter a number');
  } else {
    errorText.textContent = '';
    generateNumberElements(Number(inputValue));
  }
}

function generateNumberElements(number) {
  wrapper.innerHTML = '';

  for (let i = 0; i <= number; i++) {
    const numberElement = document.createElement('h1');
    numberElement.textContent = i;

    styleNumber(numberElement, i);

    wrapper.appendChild(numberElement);
  }
}

function styleNumber(numberElement, i) {
  if (isPrime(i)) {
    numberElement.classList.add('red');
  } else if (i % 2 === 0) {
    numberElement.classList.add('green');
  } else {
    numberElement.classList.add('yellow');
  }
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let j = 2; j <= Math.sqrt(number); j++) {
    if (number % j === 0) {
      return false;
    }
  }

  return true;
}

function showError(message) {
  errorText.textContent = message;
  wrapper.innerHTML = '';
}
