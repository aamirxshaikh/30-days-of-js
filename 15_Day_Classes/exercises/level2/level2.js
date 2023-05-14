// 1. Override the method you create in Animal class

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  makeSound() {
    return 'The animal makes sound';
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

const animal = new Animal('abc', 4, 'white', 4);
console.log(animal);
console.log(animal.getInfo());
console.log(animal.makeSound());

// 2. Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal {
  makeSound() {
    return 'The dog makes sound';
  }
}

class Cat extends Animal {
  makeSound() {
    return 'The cat makes sound';
  }
}

const dog = new Dog();
console.log(dog.makeSound());

const cat = new Cat();
console.log(cat.makeSound());
