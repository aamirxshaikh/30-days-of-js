const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

// 1. create an empty set

const set = new Set();
console.log(set);

// 2. Create a set containing 0 to 10 using loop

let set2 = new Set();
for (let i = 0; i <= 10; i++) {
  set2.add(i);
}
console.log(set2);

// 3. Remove an element from a set

set2.delete(0);
console.log(set2);

// 4. Clear a set

set2.clear();
console.log(set2);

// 5. Create a set of 5 string elements from array

const setFromArray = new Set(countries.slice(0, 5));
console.log(setFromArray);

// or

const arr = ['a', 'b', 'c', 'd', 'e'];
const set3 = new Set(arr);
console.log(set3);

// 6. Create a map of countries and number of characters of a country

const countryLengthsMap = new Map();

for (const country of countries) {
  countryLengthsMap.set(country, country.length);
}

console.log(countryLengthsMap);
