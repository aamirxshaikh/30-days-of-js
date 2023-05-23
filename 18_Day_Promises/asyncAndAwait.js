// 4. Async and Await

import fetch from 'node-fetch';

const square = async function (n) {
  return n * n;
};

const value = await square(2);
console.log(value);

// eg. 2 - promise

const url = 'https://restcountries.com/v2/all';
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));

// eg. 2 - async and await

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
fetchData();
