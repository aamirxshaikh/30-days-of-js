document.addEventListener('DOMContentLoaded', () => {
  const totalCountriesElement = document.querySelector('.total-countries');
  const startWithFeedback = document.querySelector('.feedback-start-with');
  const containingFeedback = document.querySelector('.feedback-containing');
  const startWithWord = document.querySelector('.s-word');
  const startWithNumber = document.querySelector('.s-number');
  const containingWord = document.querySelector('.c-word');
  const containingNumber = document.querySelector('.c-number');
  const startWithButton = document.querySelector('.starting-word');
  const anyWordButton = document.querySelector('.any-word');
  const reverseButton = document.querySelector('.reverse');
  const inputElement = document.querySelector('.input');
  const countriesContainer = document.querySelector('.countries-container');

  let searchBy = 'anyWord';
  let searchDirAsc = true;
  let filteredCountries = [];

  startWithButton.addEventListener('click', () => {
    searchBy = 'startingWord';
    startWithButton.classList.add('active');
    anyWordButton.classList.remove('active');
  });

  anyWordButton.addEventListener('click', () => {
    searchBy = 'anyWord';
    startWithButton.classList.remove('active');
    anyWordButton.classList.add('active');
  });

  reverseButton.addEventListener('click', () => {
    searchDirAsc = !searchDirAsc;

    if (searchDirAsc) {
      reverseButton.classList.remove('active');
    } else {
      reverseButton.classList.add('active');
    }
  });

  inputElement.addEventListener('input', () => {
    clearBoxContent();

    const inputValue = inputElement.value.trim().toLowerCase();

    if (searchBy === 'anyWord') {
      filteredCountries = countries.filter((country) =>
        country.toLowerCase().includes(inputValue)
      );

      startWithFeedback.style.display = 'none';
      containingFeedback.style.display = 'block';

      containingWord.textContent = inputValue;
      containingNumber.textContent = filteredCountries.length;
      containingWord.classList.toggle('active', inputValue !== '');
      containingNumber.classList.toggle('active', inputValue !== '');
    } else if (searchBy === 'startingWord') {
      filteredCountries = countries.filter((country) =>
        country.toLowerCase().startsWith(inputValue)
      );

      containingFeedback.style.display = 'none';
      startWithFeedback.style.display = 'block';

      startWithWord.textContent = inputValue;
      startWithNumber.textContent = filteredCountries.length;
      startWithWord.classList.toggle('active', inputValue !== '');
      startWithNumber.classList.toggle('active', inputValue !== '');
    }

    if (filteredCountries.length > 0) {
      if (!searchDirAsc) filteredCountries.reverse();

      displayCountries(filteredCountries);
    } else {
      clearBoxContent();
    }
  });

  const displayCountries = (countries) => {
    countriesContainer.innerHTML = '';

    countries.forEach((country) => {
      const boxElement = document.createElement('div');
      boxElement.classList.add('box');

      const imgElement = document.createElement('img');
      imgElement.src = 'images/map_image.jpg';
      imgElement.alt = country;

      const pElement = document.createElement('p');
      pElement.textContent = country;

      boxElement.appendChild(imgElement);
      boxElement.appendChild(pElement);
      countriesContainer.appendChild(boxElement);
    });
  };

  const clearBoxContent = () => {
    countriesContainer.innerHTML = '';
  };

  totalCountriesElement.textContent = countries.length;
});
