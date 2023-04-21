// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const text =
  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const pattern = /\d+/g;
const matches = text.match(pattern);
const annualSalary =
  Number(matches[0] * 12) + Number(matches[1]) + Number(matches[2] * 12);

console.log(annualSalary);

// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12

const text2 =
  'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';
const pattern2 = /-?\d+/g;
const points = text2.match(pattern2);

points.sort((a, b) => Number(a) - Number(b));
const distance = points[points.length - 1] - points[0];

console.log(distance);

// 3. Write a pattern which identify if a string is a valid JavaScript variable

// isValidVariable('first_name') # True
// isValidVariable('first-name') # False
// isValidVariable('1first_name') # False
// isValidVariable('firstname') # True

const isValidVariable = (variableName) => {
  const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  const matches = pattern.test(variableName);

  return matches;
};

console.log(isValidVariable('variableName'));
