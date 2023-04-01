// 1. Set

// 1.1. Creating an empty set

const companies = new Set();
console.log(companies);

// 1.2. Creating set from array

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

// Set is an iterable object and we can iterate through each elements.

for (const language of setOfLanguages) {
  console.log(language);
}

// 1.3. Adding an element to a set

const companies2 = new Set(); // creating an empty set
console.log(companies.size); // 0

companies2.add('Google'); // add element to the set
companies2.add('Facebook');
companies2.add('Amazon');
companies2.add('Oracle');
companies2.add('Microsoft');
console.log(companies2.size); // 5 elements in the set
console.log(companies2);

// We can also use loop to add element to a set.

const companies3 = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'];
setOfCompanies = new Set();
for (const company of companies3) {
  setOfCompanies.add(company);
}
console.log(setOfCompanies);

// 1.4. Deleting an element a set

console.log(companies2.delete('Google'));
console.log(companies2.size); // 4 elements left in the set

// 1.5. Checking an element in the set

console.log(companies2.has('Apple')); // false
console.log(companies2.has('Facebook')); // true

// 1.6. Clearing the set

companies2.clear();
console.log(companies2);

// See the example below to learn how to use set.

const languages2 = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
];
const langSet = new Set(languages2);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size); // 4

const counts = [];
const count = {};

for (const l of langSet) {
  const filteredLang = languages2.filter((lng) => lng === l);
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

// Other use case of set. For instance to count unique item in an array.

const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);
console.log(setOfNumbers);

// 1.7. Union of sets

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);

// 1.8. Intersection of sets

let a2 = [1, 2, 3, 4, 5];
let b2 = [3, 4, 5, 6];

let A2 = new Set(a2);
let B2 = new Set(b2);

let c2 = a2.filter((num) => B2.has(num));
let C2 = new Set(c2);

console.log(C2);

// 1.9. Difference of sets

let a3 = [1, 2, 3, 4, 5];
let b3 = [3, 4, 5, 6];

let A3 = new Set(a3);
let B3 = new Set(b3);

let c3 = a3.filter((num) => !B3.has(num));
let C3 = new Set(c3);

console.log(C3);
