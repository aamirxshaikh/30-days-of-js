import fetch from 'node-fetch';

const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// 1. Read the cats api and find the average weight of cat in metric unit.

const findAverageWeight = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();

    const avgCatWeightInMetrics = cats
      .map((cat) => cat.weight.metric)
      .reduce((acc, metrics) => {
        const [min, max] = metrics.match(/\d+/g).map((num) => parseInt(num));
        const average = (min + max) / 2;

        return acc + average;
      }, 0);

    return (avgCatWeightInMetrics / cats.length).toFixed(2);
  } catch (err) {
    console.error(err);
  }
};
console.log(await findAverageWeight());

// 2. Read the countries api and find out the 10 largest countries

const find10LargestCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    return countries
      .sort((a, b) => b.area - a.area)
      .slice(0, 10)
      .map((country) => country.name);
  } catch (err) {
    console.error(err);
  }
};
console.log(await find10LargestCountries());

// 3. Read the countries api and count total number of languages in the world used as officials.

const findTotalLanguages = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    const languages = countries
      .flatMap((country) => country.languages)
      .map((language) => language.name);

    return Array.from(new Set(languages));
  } catch (err) {
    console.error(err);
  }
};
console.log(await findTotalLanguages());

// or

const findTotalLanguages2 = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    const languages = countries.reduce((acc, country) => {
      country.languages.forEach((language) => acc.add(language.name));

      return acc;
    }, new Set());

    return Array.from(languages);
  } catch (err) {
    console.error(err);
  }
};
console.log(await findTotalLanguages2());
