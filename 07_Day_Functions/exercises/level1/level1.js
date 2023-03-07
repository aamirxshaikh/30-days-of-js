// 1. Declare a function fullName and it print out your full name.

function fullName() {
  console.log("Aamir Shaikh");
}

fullName();

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName("Aamir", "Shaikh"));

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(10, 10));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
  return length * width;
}

console.log(`Area of a rectangle is ${areaOfRectangle(4, 2)}`);

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

console.log(`Perimeter of a rectangle is ${perimeterOfRectangle(4, 2)}`);

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

console.log(`Volume of a rectangle prism is ${volumeOfRectPrism(4, 2, 4)}`);

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(radius) {
  return Math.PI * radius ** 2;
}

console.log(`Area of a circle is ${areaOfCircle(4)}`);

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(radius) {
  return 2 * Math.PI * radius;
}

console.log(`Circumference of a circle is ${circumOfCircle(2)}`);

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function densityOfSubstance(mass, volume) {
  return mass / volume;
}

console.log(`Density of a substance is ${densityOfSubstance(10, 2)}`);

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speedOfMovingObject(distance, time) {
  return distance / time;
}

console.log(`Speed is ${speedOfMovingObject(500, 25)}`);

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function calculateWeight(mass, gravity) {
  return mass * gravity;
}

console.log(`Weight of a substance is ${calculateWeight(50, 9.8)}`);

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(oC) {
  return (oC * 9) / 5 + 32;
}

console.log(`convertCelsiusToFahrenheit ${convertCelsiusToFahrenheit(25)}`);

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function calculateBMIGroup(weightInKG, heightInMeters) {
  let group;
  const bmi = weightInKG / (heightInMeters * heightInMeters);

  if (bmi < 18.5) {
    group = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    group = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    group = "Overweight";
  } else {
    group = "Obese";
  }

  return [bmi, group];
}

let bmiGroup = calculateBMIGroup(70, 1.75);

console.log(`Body mass index(BMI) ${bmiGroup[0]} and group ${bmiGroup[1]}`);

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  const seasonObj = {
    September: "Autumn",
    October: "Autumn",
    November: "Autumn",
    December: "Winter",
    January: "Winter",
    February: "Winter",
    March: "Spring",
    April: "Spring",
    May: "Spring",
    June: "Summer",
    July: "Summer",
    August: "Summer",
  };

  return seasonObj[month] || undefined;
}

const season = checkSeason("January");

console.log(season ? `The season is ${season}` : `Input is invalid`);

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

function findMax(a, b, c) {
  let largest = a;

  if (b > largest) {
    largest = b;
  }

  if (c > largest) {
    largest = c;
  }

  return largest;
}

console.log(`Max is ${findMax(100, 2000, 300)}`);
