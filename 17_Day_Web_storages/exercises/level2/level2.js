// 2. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
  firstName: 'Aamir',
  lastName: 'Shaikh',
  age: 23,
  skills: ['HTML', 'CSS', 'JS', 'React'],
  country: 'India',
  enrolled: true,
};

localStorage.setItem('student', JSON.stringify(student, undefined, 4));

console.log(localStorage.getItem('student'));
