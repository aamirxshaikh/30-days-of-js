// 2. HTML5 Web Storage Objects

// Web Storage is a way to store data on the client-side and provides two objects:

// window.localStorage: stores data without expiration date
// window.sessionStorage: stores data for one session only (data is lost when the browser tab is closed).
// Most modern browsers support Web Storage, but it's important to check browser support for localStorage and sessionStorage. Here are the available methods for Web Storage:

// localStorage: displays the localStorage object
// localStorage.clear(): removes everything in localStorage
// localStorage.setItem(key, value): stores data in localStorage with a key-value pair
// localStorage.getItem(key): displays data stored in localStorage with a specific key
// localStorage.removeItem(key): removes a specific item from localStorage with a given key
// localStorage.key(index): displays the key of the item in localStorage with a specific index.

// 2.1. Setting item to the localStorage

// 2.1.1. Storing string in a localStorage

localStorage.setItem('firstName', 'Aamir'); // since the value is string we do not stringify it
console.log(localStorage.getItem('firstName'));

// 2.1.2. Storing number in a local storage

localStorage.setItem('age', 200);
console.log(localStorage.getItem('age'));

// 2.1.3. Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first.

const skills = ['HTML', 'CSS', 'JS', 'React'];
const skillsJSON = JSON.stringify(skills, undefined, 4);

localStorage.setItem('skills', skillsJSON);
console.log(localStorage.getItem('skills'));

// eg. 2

let skills2 = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 },
];

let skillsJSON2 = JSON.stringify(skills2, undefined, 4);
localStorage.setItem('skills2', skillsJSON2);
console.log(localStorage.getItem('skills2'));

// 2.1.4. Storing an object in a localStorage.

const user = {
  firstName: 'Aamir',
  age: 23,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

const userText = JSON.stringify(user, undefined, 4);
localStorage.setItem('user', userText);
console.log(localStorage.getItem('user'));

// 2.2. Getting item from localStorage

let firstName = localStorage.getItem('firstName');
let age = localStorage.getItem('age');
let skills3 = JSON.parse(localStorage.getItem('skills'));
console.log(firstName, age, skills3);

// 2.3. Clearing the localStorage

// localStorage.clear();
