const countries = require('./countries.js');
let countries2 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];

// 1. Display the countries array as a table

console.table(countries2);

// 2. Display the countries object as a table

console.table(countries);

// 3. Use console.group() to group logs

console.group('Countries');
console.log(countries2);
console.groupEnd();
