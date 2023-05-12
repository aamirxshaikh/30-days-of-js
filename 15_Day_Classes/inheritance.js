// 2. Inheritance

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `${this.getFirstName} knows ${skills}` : '';
    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;

    return info;
  }
}

class Student extends Person {
  saySomething() {
    return 'I am a child of the person class';
  }
}

const student1 = new Student('Aamir', 'Shaikh', 23, 'India', 'Mumbai');
console.log(student1);
console.log(student1.saySomething());
console.log(student1.getFullName());
console.log(student1.getPersonInfo());

// 2.1. Overriding methods

class Animal {
  makeSound() {
    console.log('The animal makes a sound.');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('The dog barks.');
  }
}

const animal = new Animal();
const dog = new Dog();

animal.makeSound();
dog.makeSound();

// eg. 2

class Employee {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  getEmployeeInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `${this.getFirstName} knows ${skills}` : '';
    let info = `${fullName} is ${this.age}. ${this.getFirstName} lives in ${this.city}, ${this.country}. ${formattedSkills}`;

    return info;
  }

  get getFirstName() {
    return this.firstName;
  }

  set setScore(score) {
    this.score += score;
  }

  set setSkill(skill) {
    this.skills.push(skill);
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }

  saySomething() {
    return 'I am a developer';
  }

  getEmployeeInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : '';
    let pronoun = this.gender == 'Male' ? 'He' : 'She';

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
}

const developer1 = new Developer(
  'Aamir',
  'Shaikh',
  23,
  'India',
  'Mumbai',
  'Male'
);

const developer2 = new Developer(
  'Lidiya',
  'Tekle',
  28,
  'Finland',
  'Helsinki',
  'Female'
);

developer1.setScore = 2;
developer1.setSkill = 'HTML';
developer1.setSkill = 'CSS';
developer1.setSkill = 'JavaScript';

developer2.setScore = 1;
developer2.setSkill = 'Planning';
developer2.setSkill = 'Managing';
developer2.setSkill = 'Organizing';

console.log(developer1);

console.log(developer1.saySomething());
console.log(developer1.getFullName());
console.log(developer1.getEmployeeInfo());

console.log(developer2);

console.log(developer2.saySomething());
console.log(developer2.getFullName());
console.log(developer2.getEmployeeInfo());
