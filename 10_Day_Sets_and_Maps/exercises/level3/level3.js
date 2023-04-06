const countries = require('./countries.js');

// 1. How many languages are there in the countries object file.

const totalLanguages = (countries) => {
  let languages = [];

  countries.forEach((country) => {
    country.languages.forEach((language) => {
      if (!languages.includes(language)) languages.push(language);
    });
  });

  return languages.length;
};
console.log(totalLanguages(countries));

// or

const totalLanguages2 = (countries) => {
  let languages = [];

  countries.forEach((country) => {
    country.languages.forEach((language) => {
      languages.push(language);
    });
  });

  const languagesSet = new Set(languages);

  return languagesSet.size;
};
console.log(totalLanguages2(countries));

// 2. Use the countries data to find the 10 most spoken languages:

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
//   ({ English: 91 },
//   { French: 45 },
//   { Arabic: 25 },
//   { Spanish: 24 },
//   { Russian: 9 },
//   { Portuguese: 9 },
//   { Dutch: 8 },
//   { German: 7 },
//   { Chinese: 5 },
//   { Swahili: 4 },
//   { Serbian: 4 })
// ];

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
//   ({ English: 91 }, { French: 45 }, { Arabic: 25 })
// ];

function mostSpokenLanguages(countries, count) {
  const languagesMap = new Map();

  for (const country of countries) {
    for (const language of country.languages) {
      if (languagesMap.has(language)) {
        languagesMap.set(language, languagesMap.get(language) + 1);
      } else {
        languagesMap.set(language, 1);
      }
    }
  }

  const sortedLanguages = Array.from(languagesMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count);

  return sortedLanguages.map(([language, count]) => ({ [language]: count }));
}

console.log(mostSpokenLanguages(countries, 100));
