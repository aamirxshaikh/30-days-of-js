const flexContainerElement = document.querySelector('.flex-container');
const imageElement = document.querySelector('img');
const selectElement = document.querySelector('select');
const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const errorText = document.querySelector('.error-text');
const descriptionElement = document.querySelector('.description');

const surfaceGravityObject = {
  earth: 9.8,
  moon: 1.6,
  mars: 3.7,
  mercury: 3.7,
  venus: 8.87,
  jupiter: 24.79,
  saturn: 10.44,
  uranus: 8.69,
  neptune: 11.15,
  pluto: 0.62
};

buttonElement.addEventListener('click', function () {
  const mass = inputElement.value.trim();
  const selectedOption = selectElement.options[selectElement.selectedIndex];

  if (mass === '') {
    showError('Please enter a value');
  } else if (isNaN(mass)) {
    showError('Please enter a number');
  } else {
    if (selectedOption.value === '--select planet--') {
      showError('Please select an option');
    } else {
      errorText.textContent = '';

      const planetName = selectedOption.textContent.toLowerCase();
      const surfaceGravity = surfaceGravityObject[planetName];

      const src = imageElement.getAttribute('src');
      const filename = src.split('/').pop().split('.').slice(0, -1).join('.');
      const dynamicValue = filename.split('/').pop();
      const newFilename = filename.replace(dynamicValue, planetName);
      const newSrc = src.replace(filename, newFilename);

      imageElement.setAttribute('src', newSrc);

      const weight = (mass * surfaceGravity).toFixed(2) + ' N';

      descriptionElement.textContent = weight;
    }
  }
});

function showError(message) {
  errorText.textContent = message;
  descriptionElement.innerHTML = '';
}
