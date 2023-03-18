const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// 1. Find the person who has many skills in the users object.

const findMaxSkills = (users) => {
  const entries = Object.entries(users);

  let max = 0;
  let maxUser;

  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1].skills.length > max) {
      max = entries[i][1].skills.length;

      maxUser = entries[i][0];
    }
  }

  return maxUser;
};

console.log(findMaxSkills(users));

// or

const findMaxSkills2 = (users) => {
  return Object.keys(users).reduce((maxUser, user) => {
    return users[user].skills.length > users[maxUser].skills.length
      ? user
      : maxUser;
  }, Object.keys(users)[0]);
};

console.log(findMaxSkills2(users));

// 2. Count logged in users, count users having greater than equal to 50 points from the users object.

const countUserStats = (users) => {
  const entries = Object.entries(users);

  let maxPointsUsers = [];
  let loggedInUsers = [];

  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1].points >= 50) {
      maxPointsUsers.push(entries[i][0]);
    }

    if (entries[i][1].isLoggedIn) {
      loggedInUsers.push(entries[i][0]);
    }
  }

  return [loggedInUsers.length, maxPointsUsers.length];
};

console.log(
  `Logged in users are ${
    countUserStats(users)[0]
  } and users having greater than or equal to 50 points are ${
    countUserStats(users)[1]
  }`
);

// 3. Find people who are MERN stack developer from the users object

const findMernDevelopers = (users) => {
  const entries = Object.entries(users);

  let mernDevelopers = [];

  for (let i = 0; i < entries.length; i++) {
    if (
      entries[i][1].skills.includes('MongoDB') &&
      entries[i][1].skills.includes('Express') &&
      entries[i][1].skills.includes('React') &&
      entries[i][1].skills.includes('Node')
    ) {
      mernDevelopers.push(entries[i][0]);
    }
  }

  return mernDevelopers;
};

console.log(findMernDevelopers(users));

// 4. Set your name in the users object without modifying the original users object

const copyUsers = Object.assign({}, users);

Object.assign(copyUsers, {
  Aamir: {
    email: 'aamir@aamir.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 23,
    isLoggedIn: true,
    points: 30,
  },
});

console.log(copyUsers);

// 5. Get all keys or properties of users object

const keys = Object.keys(copyUsers);
console.log(keys);

// 6. Get all the values of users object

const values = Object.values(copyUsers);
console.log(values);

// 7. Use the countries object to print a country name, capital, populations and languages.

const countries = {
  USA: {
    name: 'United States of America',
    capital: 'Washington D.C.',
    population: 331449281,
    languages: ['English', 'Spanish', 'Mandarin', 'French', 'German'],
  },
  India: {
    name: 'Republic of India',
    capital: 'New Delhi',
    population: 1380004385,
    languages: ['Hindi', 'English', 'Bengali', 'Telugu', 'Marathi'],
  },
  China: {
    name: "People's Republic of China",
    capital: 'Beijing',
    population: 1393800000,
    languages: ['Mandarin', 'Cantonese', 'Shanghainese', 'Hokkien', 'Hakka'],
  },
  Japan: {
    name: 'Japan',
    capital: 'Tokyo',
    population: 126300000,
    languages: ['Japanese'],
  },
  Canada: {
    name: 'Canada',
    capital: 'Ottawa',
    population: 38008005,
    languages: ['English', 'French'],
  },
};

for (let country in countries) {
  console.log(`Country: ${countries[country].name}`);
  console.log(`Capital: ${countries[country].capital}`);
  console.log(`Population: ${countries[country].population}`);
  console.log(`Languages: ${countries[country].languages.join(', ')}`);
}
