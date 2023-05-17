const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'],
};

// 1. Stringify the students object with only firstName, lastName and skills properties

const jsonStudents = JSON.stringify(
  student,
  ['firstName', 'lastName', 'skills'],
  4
);
console.log(jsonStudents);
