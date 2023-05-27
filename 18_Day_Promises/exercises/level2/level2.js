import fetch from 'node-fetch';

const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// 1. Print out all the cat names in to catNames variable.

const fetchData = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();

    const catNames = cats.map((cat) => cat.name);
    console.log(catNames);
    return catNames;
  } catch (err) {
    console.error(err);
  }
};
fetchData();
