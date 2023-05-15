// 1. JSON

const users = {
  users: [
    {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      age: 250,
      email: 'asab@asb.com',
    },
    {
      firstName: 'Alex',
      lastName: 'James',
      age: 25,
      email: 'alex@alex.com',
    },
    {
      firstName: 'Lidiya',
      lastName: 'Tekle',
      age: 28,
      email: 'lidiya@lidiya.com',
    },
  ],
};

// 1.1. Converting JSON to JavaScript Object
// 1.1.1. JSON.parse()

const usersText = `
{
    "users": [
      {
        "firstName": "Asabeneh",
        "lastName": "Yetayeh",
        "age": 250,
        "email": "asab@asb.com"
      },
      {
        "firstName": "Alex",
        "lastName": "James",
        "age": 25,
        "email": "alex@alex.com"
      },
      {
        "firstName": "Lidiya",
        "lastName": "Tekle",
        "age": 28,
        "email": "lidiya@lidiya.com"
      }
    ]
}
`;

const usersObj = JSON.parse(usersText, undefined, 4);
console.log(usersObj);

// 1.2. Using a reviver function with JSON.parse()

const usersText2 = `
{
    "users": [
      {
        "firstName": "Asabeneh",
        "lastName": "Yetayeh",
        "age": 250,
        "email": "asab@asb.com"
      },
      {
        "firstName": "Alex",
        "lastName": "James",
        "age": 25,
        "email": "alex@alex.com"
      },
      {
        "firstName": "Lidiya",
        "lastName": "Tekle",
        "age": 28,
        "email": "lidiya@lidiya.com"
      }
    ]
}
`;

const usersObj2 = JSON.parse(usersText2, (key, value) => {
  let newValue =
    typeof value === 'string' && key !== 'email' ? value.toUpperCase() : value;

  return newValue;
});
console.log(usersObj2);

// 1.3. Converting Object to JSON

const users2 = {
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

const txt = JSON.stringify(users2, undefined, 4);
console.log(txt);

// 1.4. Using a Filter Array with JSON.stringify

const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 250,
  isLoggedIn: false,
  points: 30,
};

const txt2 = JSON.stringify(
  user,
  ['firstName', 'lastName', 'country', 'city', 'age'],
  4
);
console.log(txt2);

// eg. 2

const myObj = {
  name: 'Alice',
  age: 25,
  hobbies: ['reading', 'cooking', 'hiking'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
  },
};

const jsonString = JSON.stringify(
  myObj,
  (key, value) => {
    if (key === 'age') {
      return value * 2;
    }
    return value;
  },
  4
);

console.log(jsonString);
