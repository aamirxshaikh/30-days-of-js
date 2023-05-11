// 1. Classes

// 1.1. Defining a classes

class Person {}

// 1.2. Class Instantiation

const person = new Person();
console.log(person);

// 1.3. Class Constructor

class Student {
  constructor(firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const student = new Student();
const student2 = new Student('Aamir', 'Shaikh');
const student3 = new Student('John', 'Doe');
const student4 = new Student('Jane', 'Doe');

console.log(student);
console.log(student2);
console.log(student3);
console.log(student4);

// 1.4. Default values with constructor

class Employee {
  constructor(
    firstName = 'Aamir',
    lastName = 'Shaikh',
    age = 23,
    country = 'India',
    city = 'Mumbai'
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const employee1 = new Employee(); // default values
const employee2 = new Employee('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');

console.log(employee1);
console.log(employee2);

// 1.5. Class methods

class Customer {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const customer1 = new Customer('Aamir', 'Shaikh', 23, 'India', 'Mumbai');
const customer2 = new Customer('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');

console.log(customer1.getFullName());
console.log(customer2.getFullName());

// 1.6. Properties with initial value

class Client {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
}

const client1 = new Client('Aamir', 'Shaikh', 23, 'India', 'Mumbai');
const client2 = new Client('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');

console.log(client1.score);
console.log(client2.score);

console.log(client1.skills);
console.log(client2.skills);

// 1.7. getter

class User {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }

  get getScore() {
    return this.score;
  }

  get getSkills() {
    return this.skills;
  }
}

const user1 = new User('Aamir', 'Shaikh', 23, 'India', 'Mumbai');
const user2 = new User('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');

// We do not need parenthesis to call a getter method
console.log(user1.getScore);
console.log(user2.getScore);

console.log(user1.getSkills);
console.log(user2.getSkills);

// 1.8. setter

class Admin {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }

  get getFirstName() {
    return this.firstName;
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
    let info = `${fullName} is ${this.age}. ${this.getFirstName} lives in ${this.city}, ${this.country}. ${formattedSkills}`;

    return info;
  }

  set setScore(score) {
    this.score += score;
  }

  set setSkill(skill) {
    this.skills.push(skill);
  }
}

const admin1 = new Admin('Aamir', 'Shaikh', 23, 'India', 'Mumbai');
const admin2 = new Admin('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');

admin1.setScore = 1;
admin1.setSkill = 'HTML';
admin1.setSkill = 'CSS';
admin1.setSkill = 'JavaScript';

admin2.setScore = 2;
admin2.setSkill = 'Planning';
admin2.setSkill = 'Managing';
admin2.setSkill = 'Organizing';

console.log(admin1.score);
console.log(admin2.score);

console.log(admin1.skills);
console.log(admin2.skills);

console.log(admin1.getPersonInfo());
console.log(admin2.getPersonInfo());

// 1.9. Static method

class Member {
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'];
    const index = Math.floor(Math.random() * skills.length);

    return skills[index];
  }

  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    let dateMonthYear = date + '.' + month + '.' + year;
    let time = hours + ':' + minutes;
    let fullTime = dateMonthYear + ' ' + time;

    return fullTime;
  }
}

console.log(Member.favoriteSkill());
console.log(Member.showDateTime());
