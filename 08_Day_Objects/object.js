// 2. Object

// 2.1. Creating an empty object

// const person = {};

// console.log(person);

// 2.2. Creating an objecting with values

const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

// const person = {
//   firstName: 'Aamir',
//   lastName: 'shaikh',
//   age: 23,
//   country: 'India',
//   'phone number': 1234567891,
//   city: 'Mumbai',
//   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Git'],
//   isMarried: false,
// };
// console.log(person);

// 2.3. Getting values from an object

// using . followed by key name if the key-name is a one word

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.location); // undefined

// using square bracket and a quote

// console.log(person['firstName']);
// console.log(person['lastName']);
// console.log(person['age']);
// console.log(person['age']);
// console.log(person['location']); // undefined

// for instance to access the phone number we only use the square bracket method
// console.log(person['phone number']);

// 2.4. Creating object methods

// const person = {
//   firstName: 'Aamir',
//   lastName: 'shaikh',
//   age: 23,
//   country: 'India',
//   'phone number': 1234567891,
//   city: 'Mumbai',
//   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Git'],
//   isMarried: false,
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.getFullName()); // Aamir Shaikh

// 2.5. Setting new key for an object

// person.nationality = 'Indian';
// person.country = 'India';
// person.title = 'employee';
// person.skills.push('Azure');
// person.skills.push('SasS');
// person.isMarried = true;

// person.getFullName = () => {
//   return `${person.lastName} ${person.firstName}`;
// };

// person.getPersonInfo = function () {
//   let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 1)
//     .join(', ');
//   let lastSkill = this.skills.splice(this.skills.length - 1)[0];

//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
//   let fullName = this.getFullName();
//   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;

//   return statement;
// };

// console.log(person);
// console.log(person.getFullName());
// console.log(person.getPersonInfo());

// 2.6. Object Methods

// 2.6.1. Object.assign: To copy an object without modifying the original object

const person = {
  firstName: 'Aamir',
  lastName: 'shaikh',
  age: 23,
  country: 'India',
  'phone number': 1234567891,
  city: 'Mumbai',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Git'],
  isMarried: false,
  address: {
    street: 'XYZ 16',
    pin: 400000,
    city: 'XYZ',
  },
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const copyPerson = Object.assign({}, person);

console.log(copyPerson);

// 2.6.2. Object.keys: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson);
console.log(keys); //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']

const address = Object.keys(copyPerson.address);
console.log(address); //['street', 'pin', 'city']

// 2.6.3. Object.values:To get values of an object as an array

const values = Object.values(copyPerson);
console.log(values);

const addressValues = Object.values(copyPerson.address);
console.log(addressValues);

// 2.6.4. Object.entries:To get the keys and values in an array

const entries = Object.entries(copyPerson);
console.log(entries);

// 2.6.5. hasOwnProperty: To check if a specific key or property exist in an object

console.log(copyPerson.hasOwnProperty('name'));
console.log(copyPerson.hasOwnProperty('firstName'));
console.log(copyPerson.hasOwnProperty('address'));
