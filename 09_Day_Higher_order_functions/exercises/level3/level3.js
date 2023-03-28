import countries from './countries.js';

// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population

const sortCountries = (countries, sortBy) => {
  return countries.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });
};
console.log(sortCountries(countries, 'population'));

// 2. Find the 10 most spoken languages:

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]

const mostSpokenLanguages = (countries, limit) => {
  let resultObj = {};

  countries.forEach((country) => {
    country.languages.forEach((language) => {
      if (resultObj[language]) {
        resultObj[language]++;
      } else {
        resultObj[language] = 1;
      }
    });
  });

  const resultArray = Object.entries(resultObj)
    .map(([country, count]) => ({
      country,
      count,
    }))
    .sort((a, b) => b.count - a.count);

  return resultArray.slice(0, limit);
};
console.log(mostSpokenLanguages(countries, 5));

// 3. Use countries_data.js file create a function which create the ten most populated countries
// console.log(mostPopulatedCountries(countries, 10))

// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]

const mostPopulatedCountries = (countries, limit) => {
  let resultObj = {};

  countries.forEach((country) => {
    resultObj[country.name] = country.population;
  });

  const resultArray = Object.entries(resultObj)
    .map(([country, population]) => ({
      country,
      population,
    }))
    .sort((a, b) => b.population - a.population);

  return resultArray.slice(0, limit);
};
console.log(mostPopulatedCountries(countries, 10));
