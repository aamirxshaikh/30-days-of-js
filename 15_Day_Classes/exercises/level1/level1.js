// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  getInfo() {
    return `Name: ${this.getName} Age: ${this.getAge} Color: ${this.getColor} Legs: ${this.getLegs}`;
  }

  get getName() {
    return this.name;
  }

  get getAge() {
    return this.age;
  }

  get getColor() {
    return this.color;
  }

  get getLegs() {
    return this.legs;
  }

  set setName(name) {
    this.name = name;
  }

  set setAge(age) {
    this.age = age;
  }

  set setColor(color) {
    this.color = color;
  }

  set setLegs(legs) {
    this.legs = legs;
  }
}

// 2. Create a Dog and Cat child class from the Animal Class.

const animal = new Animal('abc', 4, 'white', 4);
console.log(animal);
console.log(animal.getInfo());

class Dog extends Animal {}

class Cat extends Animal {}
