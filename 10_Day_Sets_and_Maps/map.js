// 2. Map

// 2.1. Creating an empty Map

const map = new Map();
console.log(map);

// 2.2. Creating an Map from array

countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];
const map2 = new Map(countries);
console.log(map2);
console.log(map2.size);

// 2.3. Adding values to the Map

const countriesMap = new Map();
console.log(countriesMap.size); // 0
countriesMap.set('Finland', 'Helsinki');
countriesMap.set('Sweden', 'Stockholm');
countriesMap.set('Norway', 'Oslo');
console.log(countriesMap);
console.log(countriesMap.size);

// 2.4. Getting a value from Map

console.log(countriesMap.get('Finland'));

// 2.5. Checking key in Map

console.log(countriesMap.has('Finland'));

// Getting all values from map using loop

for (const country of countriesMap) {
  console.log(country);
}

for (const [country, city] of countriesMap) {
  console.log(country, city);
}
