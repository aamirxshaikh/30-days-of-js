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

// 1. Explain the difference between forEach, map, filter, and reduce.

// forEach: It is used to iterate through each element in an array and perform a callback function on it. It does not return a new array but instead modifies the existing one.
// map: It is used to create a new array by performing a callback function on each element in an existing array. It returns a new array of the same length as the original array.
// filter: It is used to create a new array by filtering out elements from an existing array based on a given condition. It returns a new array that contains only the elements that meet the condition.
// reduce: It is used to reduce an array into a single value by performing a callback function on each element in the array. It returns a single value that is the result of the callback function.

// 2. Define a callback function before you use it in forEach, map, filter or reduce.

// 2.1. forEach

const callback = (country) => {
  console.log(country);
};

countries.forEach(callback);

// 2.2. map

const callback2 = (number) => number * 2;

const modifiedNumbers = numbers.map(callback2);
console.log(modifiedNumbers);

// 2.3. filter

const callback3 = (country) => country.includes('land');

const countriesContainingLand = countries.filter(callback3);
console.log(countriesContainingLand);

// 2.4. reduce

const callback4 = (acc, cur) => acc + cur;

const sum = numbers.reduce(callback4, 0);
console.log(sum);

// 3. Use forEach to console.log each country in the countries array.

countries.forEach((country) => console.log(country));

// 4. Use forEach to console.log each name in the names array.

names.forEach((name) => console.log(name));

// 5. Use forEach to console.log each number in the numbers array.

numbers.forEach((number) => console.log(number));

// 6. Use map to create a new array by changing each country to uppercase in the countries array.

const uppercaseCountries = countries.map((country) => country.toUpperCase());
console.log(uppercaseCountries);

// 7. Use map to create an array of countries length from countries array.

const lengthOfCountries = countries.map((country) => country.length);
console.log(lengthOfCountries);

// 8. Use map to create a new array by changing each number to square in the numbers array

const sqaureOfNumbers = numbers.map((number) => number * number);
console.log(sqaureOfNumbers);

// 9. Use map to change to each name to uppercase in the names array

names.map((name, index, arr) => {
  arr[index] = name.toUpperCase();
});

console.log(names);

// 10. Use map to map the products array to its corresponding prices.

const productPrices = products.map((product) => {
  const price = parseFloat(product.price);
  return isNaN(price) ? null : price;
});
console.log(productPrices);

// 11. Use filter to filter out countries containing land.

const filterCountriesContainingLand = countries.filter(
  (country) => !country.includes('land')
);
console.log(filterCountriesContainingLand);

// 12. Use filter to filter out countries having six character.

const filterCountriesHavingSixCharacters = countries.filter(
  (country) => country.length !== 6
);
console.log(filterCountriesHavingSixCharacters);

// 13. Use filter to filter out countries containing six letters and more in the country array.

const filterCountriesHavingSixCharactersOrMore = countries.filter(
  (country) => country.length < 6
);
console.log(filterCountriesHavingSixCharactersOrMore);

// 14. Use filter to filter out country start with 'E';

const filterCountriesStartsWithE = countries.filter(
  (country) => !country.startsWith('E')
);
console.log(filterCountriesStartsWithE);

// 15. Use filter to filter out only prices with values.

const filterPricesWithValues = products.filter(
  (product) => !isNaN(parseFloat(product.price))
);
console.log(filterPricesWithValues);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringLists = (arr) => arr.filter((el) => typeof el === 'string');
console.log(
  getStringLists([1, 2, 3, 4, 'hello', 'world', true, { name: 'Aamir' }])
);

// 17. Use reduce to sum all the numbers in the numbers array.

const sumAllNumbers = numbers.reduce((acc, el) => acc + el);
console.log(sumAllNumbers);

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const concatAllCountries = countries.reduce((acc, el) => `${acc} , ${el}`);
console.log(concatAllCountries);

// 19. Explain the difference between some and every

// some method tests whether at least one element in the array satisfies the given condition
// every method tests whether all elements in the array satisfy the given condition

// 20. Use some to check if some names' length greater than seven in names array

const someNamesGreaterThan7 = names.some((name) => name.length > 7);
console.log(someNamesGreaterThan7);

// 21. Use every to check if all the countries contain the word land

const allCountriesContainsWordLand = countries.every((country) =>
  country.includes('land')
);
console.log(allCountriesContainsWordLand);
