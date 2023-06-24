// 1. Use the countries array to display all the countries.

const countriesWrapper = document.querySelector('.countries-wrapper');

const displayCountries = () => {
  for (const country of countries) {
    const countryElement = document.createElement('h1');

    countryElement.textContent = country.toUpperCase();

    countriesWrapper.appendChild(countryElement);
  }
};

displayCountries();
