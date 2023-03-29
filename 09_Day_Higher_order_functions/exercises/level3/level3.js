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

// or

const mostPopulatedCountries2 = (countries, limit) => {
  const countryPopulations = [];

  countries.forEach((country) => {
    const { name, population } = country;
    countryPopulations.push({ country: name, population });
  });

  countryPopulations.sort((a, b) => b.population - a.population);

  return countryPopulations.slice(0, limit);
};

console.log(mostPopulatedCountries2(countries, 10));

// 4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode)
// and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile,
// and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical
// calculations as method for the statistics object. Check the output below.

// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = {
  count() {
    return ages.length;
  },
  sum() {
    return ages.reduce((acc, e) => acc + e);
  },
  min() {
    return Math.min(...ages);
  },
  max() {
    return Math.max(...ages);
  },
  range() {
    return this.max() - this.min();
  },
  mean() {
    return this.sum() / this.count();
  },
  median() {
    ages.sort();
    let mid = Math.floor(ages.length / 2);

    return ages.length % 2 === 0 ? (ages[mid] + ages[mid - 1]) / 2 : ages[mid];
  },
  mode() {
    let resultObj = {};

    ages.forEach((age) => {
      if (resultObj[age]) {
        resultObj[age]++;
      } else {
        resultObj[age] = 1;
      }
    });

    const resultArray = Object.entries(resultObj)
      .map(([mode, count]) => ({
        mode,
        count,
      }))
      .sort((a, b) => b.count - a.count);

    return resultArray.slice(0, 1)[0];
  },
  var() {
    const count = this.count();
    const mean = this.mean();

    return (
      ages.map((age) => (age - mean) ** 2).reduce((acc, e) => acc + e, 0) /
      (count - 1)
    ).toFixed(1);
  },
  std() {
    return Math.sqrt(this.var()).toFixed(1);
  },
  freqDist() {
    ages.sort();
    let resultObj = {};

    ages.forEach((age) => {
      if (resultObj[age]) {
        resultObj[age]++;
      } else {
        resultObj[age] = 1;
      }
    });

    const resultArray = Object.entries(resultObj)
      .map(([age, count]) => ({
        age: Number(age),
        count,
      }))
      .sort((a, b) => b.count - a.count);

    const total = resultArray.reduce((acc, { count }) => acc + count, 0);

    return resultArray.map(({ age, count }) => ({
      age,
      percent: ((count / total) * 100).toFixed(1),
    }));
  },
  describe() {
    console.log('Count:', this.count());
    console.log('Sum: ', this.sum());
    console.log('Min: ', this.min());
    console.log('Max: ', this.max());
    console.log('Range: ', this.range());
    console.log('Mean: ', this.mean());
    console.log('Median: ', this.median());
    console.log('Mode: ', this.mode());
    console.log('Variance: ', this.var());
    console.log('Standard Deviation: ', this.std());
    console.log('Frequency Distribution: ', this.freqDist());
  },
};

console.log('Count:', statistics.count()); // 25
console.log('Sum: ', statistics.sum()); // 744
console.log('Min: ', statistics.min()); // 24
console.log('Max: ', statistics.max()); // 38
console.log('Range: ', statistics.range()); // 14
console.log('Mean: ', statistics.mean()); // 30
console.log('Median: ', statistics.median()); // 29
console.log('Mode: ', statistics.mode()); // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()); // 18.3
console.log('Standard Deviation: ', statistics.std()); // 4.3
console.log('Frequency Distribution: ', statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
statistics.describe();
