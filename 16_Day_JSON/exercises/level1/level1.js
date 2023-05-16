const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
let age = 250;
let isMarried = true;
const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'],
};

// 1. Change skills array to JSON using JSON.stringify()

const jsonSkills = JSON.stringify(skills);
console.log(jsonSkills);

// 2. Stringify the age variable

const jsonAge = JSON.stringify(age);
console.log(jsonAge);

// 3. Stringify the isMarried variable

const jsonIsMarried = JSON.stringify(isMarried);
console.log(jsonIsMarried);

// 4. Stringify the student object

const jsonStudent = JSON.stringify(student, undefined, 4);
console.log(jsonStudent);
