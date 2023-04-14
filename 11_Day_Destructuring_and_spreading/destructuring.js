// 1. Destructuring

// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

// 1.1 Destructing Arrays

const numbers = [1, 2, 3];
const [one, two, three] = numbers;

console.log(one, two, three);

// eg. 2

const names = ['Aamir', 'Jane', 'David', 'John'];
const [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

// eg. 3

const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;

console.log(e, pi, gravity, bodyTemp, boilingTemp);

// eg. 4

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB'],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);

// If we like to skip one of the values in the array we use additional comma. The comma helps to omit the value at that specific index

const numbers2 = [1, 2, 3];
const [numOne, , numThree] = numbers2; // 2 is omitted

console.log(numOne, numThree);

// eg. 2

const names2 = ['Aamir', 'Jane', 'David', 'John'];
const [, secondPerson2, , fourthPerson2] = names2; // first and third person is omitted

console.log(secondPerson2, fourthPerson2);

// We can use default value in case the value of array for that index is undefined

const names3 = [undefined, 'Brook', 'David', undefined];
const [
  firstPerson3 = 'Aamir',
  secondPerson3,
  thirdPerson3,
  fourthPerson3 = 'John',
  fifthPerson3 = 'Jim',
  sixthPerson3 = 'Lin',
] = names3;

console.log(
  firstPerson3,
  secondPerson3,
  thirdPerson3,
  fourthPerson3,
  fifthPerson3,
  sixthPerson3
);

// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);

// 1.2 Destructuring during iteration

const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];

for (const [country, city] of countries) {
  console.log(country, city);
}

// eg. 2

const fullStack2 = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB', 'GraphQL', 'PostgreSQL'],
];

for (const [first, second, third, ...rest] of fullStack2) {
  console.log(first, second, third, rest.join(', '));
}

// eg. 3

const myArray = [1, 2, 3, 4, 5];

for (const [index, value] of myArray.entries()) {
  console.log(`Index: ${index}, Value: ${value}`);
}

// 1.3 Destructuring Object

// When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter);

// eg. 2 - Assigning default values

const user = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName, age = 30 } = user;

console.log(firstName);
console.log(lastName);
console.log(age);

// eg. 3 - Nested object destructuring

const user2 = {
  firstName2: 'John',
  lastName2: 'Doe',
  age2: 30,
  address2: { city2: 'New York', state2: 'NY' },
};

const {
  firstName2,
  lastName2,
  age2,
  address2: { city2, state2 },
} = user2;

console.log(firstName2);
console.log(lastName2);
console.log(age2);
console.log(city2);
console.log(state2);

// 1.4 Renaming during structuring

const rectangle2 = {
  width: 20,
  height: 10,
  area: 200,
};
let { width: w, height: h, area: a, perimeter: p } = rectangle2;

console.log(w, h, a, p);

// If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a default value during declaration

const rectangle3 = {
  width3: 20,
  height3: 10,
  area3: 200,
};
let { width3, height3, area3, perimeter3 = 60 } = rectangle3;

console.log(width3, height3, area3, perimeter3);

// Let us modify the object:width to 30 and perimeter to 80

const rectangle4 = {
  width4: 30,
  height4: 10,
  area4: 200,
  perimeter4: 80,
};
let { width4, height4, area4, perimeter4 = 60 } = rectangle4;

console.log(width4, height4, area4, perimeter4);

// Destructuring keys as a function parameters. Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle

// 1.5 Object parameter without destructuring

const rect = {
  width: 20,
  height: 10,
};
const calculatePerimeter = (rectangle) =>
  2 * (rectangle.width + rectangle.height);

console.log(calculatePerimeter(rect));

// eg. 2

const person = {
  firstName: 'Aamir',
  lastName: 'Shaikh',
  age: 23,
  country: 'India',
  job: 'Developer',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB'],
  languages: ['English'],
};

const getPersonInfo = (person) => {
  const skills = person.skills;
  const languages = person.languages;

  return `${person.firstName} ${person.lastName} lives in ${person.country}. He is ${person.age} years old. He is an ${person.job}. He teaches ${skills}. He speaks ${languages}.`;
};

console.log(getPersonInfo(person));

// 1.6 Object parameter with destructuring

const rect2 = {
  width: 20,
  height: 10,
};
const calculatePerimeter2 = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter2(rect2));

// eg. 2

const person2 = {
  firstName: 'Aamir',
  lastName: 'Shaikh',
  age: 23,
  country: 'India',
  job: 'Developer',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB'],
  languages: ['English'],
};

const getPersonInfo2 = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) =>
  `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${skills}. He speaks ${languages}.`;

console.log(getPersonInfo2(person2));

// 1.7 Destructuring object during iteration

const todoList = [
  {
    task: 'Prepare JS Test',
    time: '4/1/2023 8:30',
    completed: true,
  },
  {
    task: 'Give JS Test',
    time: '4/1/2023 10:00',
    completed: false,
  },
  {
    task: 'Assess Test Result',
    time: '4/1/2023 1:00',
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

// eg. 2

const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Mike', age: 40 },
];

const userNames = users.map(({ name }) => name);

console.log(userNames);

// eg. 3

const user3 = { name: 'John', age: 30 };

Object.entries(user3).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
