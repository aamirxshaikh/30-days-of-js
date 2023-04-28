// 1. Console Object Methods

//   1.1. console.log()

// 1.1.1. Showing output on browser console

console.log('30 Days of JavaScript');

// 1.1.2. Substitution

console.log('%d %s of JavaScript', 30, 'Days');

// 1.1.3. CSS

// log output is green
console.log('%c30 Days Of JavaScript', 'color:green');

// log output green red and yellow text
console.log(
  '%c30 Days%c %cOf%c %cJavaScript',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
);

//   1.2. console.warn()

console.warn('This is a warning');

//   1.3. console.error()

console.error('This is an error message');

//   1.4. console.table()

// 1.4.1. array
const names = ['Aamir', 'Jane', 'David', 'John'];
console.table(names);

// 1.4.2. object
const user = {
  name: 'Aamir',
  title: 'Developer',
  country: 'India',
  city: 'Mumbai',
  age: 23,
};
console.table(user);

// 1.4.3. array of arrays
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];
console.table(countries);

// 1.4.4. array of objects
const users = [
  {
    name: 'Aamir',
    title: 'Developer',
    country: 'India',
    city: 'Mumbai',
    age: 23,
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25,
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22,
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28,
  },
];
console.table(users);

//   1.5. console.time()

const countries2 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];

console.time('Regular for loop');
for (let i = 0; i < countries2.length; i++) {
  console.log(countries2[i][0], countries2[i][1]);
}
console.timeEnd('Regular for loop');

console.time('for of loop');
for (const [name, city] of countries2) {
  console.log(name, city);
}
console.timeEnd('for of loop');

console.time('forEach loop');
countries2.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd('forEach loop');

//   1.6. console.info()

console.info('30 Days Of JavaScript challenge is trending on Github');

//   1.7. console.assert()

console.assert(4 > 3, '4 is greater than 3'); // no result
console.assert(3 > 4, '3 is not greater than 4'); // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`;
  console.log('the # is ' + i);
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
}

//   1.8. console.group()

console.group('Names');
console.log(names);
console.groupEnd();

console.group('Countries');
console.log(countries);
console.groupEnd();

console.group('Users');
console.log(user);
console.log(users);
console.groupEnd();

//   1.9. console.count()

const func = () => {
  console.count('Function has been called');
};
func();
func();
func();

//   1.10. console.clear()

// The console.clear() cleans the browser console.
