const allCountries = require('./countries.js');

const countries = [
  'Finland',
  'Sweden',
  'Denmark',
  'Norway',
  'IceLand',
  'Ethopia',
];
const names = ['Aamir', 'Jane', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const totalPriceUsingChaining = products
  .filter((product) => !isNaN(parseFloat(product.price)))
  .map((product) => product.price)
  .reduce((acc, price) => acc + price, 0);
console.log(totalPriceUsingChaining);

// 2. Find the sum of price of products using only reduce reduce(callback))

const totalPriceUsingOnlyReduce = products.reduce((acc, product) => {
  const price = parseFloat(product.price);
  if (!isNaN(price)) return acc + price;
  return acc;
}, 0);
console.log(totalPriceUsingOnlyReduce);

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

const categorizeCountries = (countries) => {
  const commonPatterns = ['land', 'ia', 'island', 'stan'];
  const matchingCountries = countries
    .filter((country) => {
      const name = country.name.toLowerCase();
      return commonPatterns.some((pattern) => name.includes(pattern));
    })
    .map((country) => country.name);
  return matchingCountries;
};

console.log(categorizeCountries(allCountries));

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

const numberOfTimesLettersStartsWithCountry = (countries) => {
  let resultObj = {};

  countries.forEach((country) => {
    const firstLetter = country.name.charAt(0).toUpperCase();
    if (resultObj[firstLetter]) {
      resultObj[firstLetter]++;
    } else {
      resultObj[firstLetter] = 1;
    }
  });

  const resultArray = Object.entries(resultObj).map(([letter, count]) => ({
    letter,
    count,
  }));

  return resultArray;
};

console.log(numberOfTimesLettersStartsWithCountry(allCountries));

// 5. Declare a getFirstTenCountries function and return an  array of ten countries. Use different functional programming to work on the countries.js array

const getFirstTenCountries = (countries) => {
  return countries.slice(0, 10).map((country) => country.name);
};
console.log(getFirstTenCountries(allCountries));

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

const getLastTenCountries = (countries) => {
  return countries.slice(-10).map((country) => country.name);
};
console.log(getLastTenCountries(allCountries));

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

const maxLetterForCountry = (countries) => {
  let resultObj = {};

  countries.forEach((country) => {
    const firstLetter = country.name.charAt(0).toUpperCase();
    if (resultObj[firstLetter]) {
      resultObj[firstLetter]++;
    } else {
      resultObj[firstLetter] = 1;
    }
  });

  let max = 0;
  let result;

  for (const key in resultObj) {
    if (resultObj[key] > max) {
      max = resultObj[key];
      result = key;
    }
  }

  return result;

  // or

  // const result = Object.keys(resultObj).reduce(
  //   (acc, letter) => {
  //     if (resultObj[letter] > acc.max) {
  //       return { letter, max: resultObj[letter] };
  //     } else {
  //       return acc;
  //     }
  //   },
  //   { letter: '', max: 0 }
  // );

  // return result.letter;
};

console.log(maxLetterForCountry(allCountries));
