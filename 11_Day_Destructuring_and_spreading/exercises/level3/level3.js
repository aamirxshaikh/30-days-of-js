const countries = require('./countries.js');

// 1. Destructure the countries object print name, capital, population and languages of all countries

for (const { name, capital, population, languages } of countries) {
  console.log(`Name: ${name}`);
  console.log(`Capital: ${capital}`);
  console.log(`Population: ${population}`);
  console.log(`Languages: ${languages.join(', ')}`);
}

// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = student;

console.log(name);
console.log(skills);
console.log(jsScore);
console.log(reactScore);

// 3. Write a function called convertArrayToObject which can convert the array to a structure object.

// Output:
// [
//   {
//     name: 'David',
//     skills: ['HTM', 'CSS', 'JS', 'React'],
//     scores: [98, 85, 90, 95],
//   },
//   {
//     name: 'John',
//     skills: ['HTM', 'CSS', 'JS', 'React'],
//     scores: [85, 80, 85, 80],
//   },
// ];

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
];

const convertArrayToObject = (students) =>
  students.map(([name, skills, scores]) => ({
    name,
    skills,
    scores,
  }));
console.log(convertArrayToObject(students));

// 4. Copy the student object to newStudent without mutating the original object. In the new object add the following:

// Output:
// {
//   name: 'David',
//   age: 25,
//   skills: {
//     frontEnd: [
//       { skill: 'HTML', level: 10 },
//       { skill: 'CSS', level: 8 },
//       { skill: 'JS', level: 8 },
//       { skill: 'React', level: 9 },
//       { skill: 'BootStrap', level: 8 },
//     ],
//     backEnd: [
//       { skill: 'Node', level: 7 },
//       { skill: 'GraphQL', level: 8 },
//       { skill: 'Express', level: 9 },
//     ],
//     dataBase: [
//       { skill: 'MongoDB', level: 7.5 },
//       { skill: 'SQL', level: 8 },
//     ],
//     dataScience: ['Python', 'R', 'D3.js', 'SQL'],
//   },
// };

const student2 = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 },
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js'],
  },
};

// 4.1. Add Bootstrap with level 8 to the front end skill sets

const newStudent = JSON.parse(JSON.stringify(student2));

newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });

// or

// const newStudent = {
//   ...student,
//   skills: {
//     ...student.skills,
//     frontEnd: [...student.skills.frontEnd, { skill: 'Bootstrap', level: 8 }],
//   },
// };

// 4.2. Add Express with level 9 to the back end skill sets

newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });

// 4.3. Add SQL with level 8 to the data base skill sets

newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });

// 4.4. Add SQL without level to the data science skill sets

newStudent.skills.dataScience.push('SQL');

console.log(newStudent);
