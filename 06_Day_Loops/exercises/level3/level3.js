const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// 1. Copy countries array(Avoid mutation)

// let newArr = [];

// countries.forEach((country) => {
//   newArr.push(country);
// });

// console.log(newArr);

// or

// let newArr = countries.slice();
// console.log(newArr);

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

// let sortedCountries = countries.slice().sort();
// console.log(sortedCountries);

// 3. Sort the webTechs array and mernStack array

// webTechs.sort();
// mernStack.sort();

// console.log(webTechs);
// console.log(mernStack);

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array

// let landCountries = [];

// for (let country of countries) {
//   if (country.includes("land")) {
//     landCountries.push(country);
//   }
// }

// console.log(landCountries);

// 5. Find the country containing the hightest number of characters in the countries array

// let longestCountry = "";

// for (let country of countries) {
//   if (country.length > longestCountry.length) {
//     longestCountry = country;
//   }
// }

// console.log(longestCountry);

// 6. Extract all the countries contain the word 'land' from the countries array and print it as array

// let landCountries = [];

// for (let country of countries) {
//   if (country.includes("land")) {
//     landCountries.push(country);
//   }
// }

// console.log(landCountries);

// 7. Extract all the countries containing only four characters from the countries array and print it as array

// let fourCharCountries = [];

// for (let country of countries) {
//   if (country.length === 4) {
//     fourCharCountries.push(country);
//   }
// }

// console.log(fourCharCountries);

// 8. Extract all the countries containing two or more words from the countries array and print it as array

// let twoOrMoreWordsCountries = [];

// for (let country of countries) {
//   if (country.split(" ").length >= 2) {
//     twoOrMoreWordsCountries.push(country);
//   }
// }

// console.log(twoOrMoreWordsCountries);

// 9. Reverse the countries array and capitalize each country and stored it as an array

// let reverseAndCapitalizedCountries = [];

// countries.reverse();

// for (let country of countries) {
//   let capitalizedCountries = country.charAt(0).toUpperCase() + country.slice(1);

//   reverseAndCapitalizedCountries.push(capitalizedCountries);
// }

// console.log(reverseAndCapitalizedCountries);

// or

const reverseAndCapitalizedCountries = [];

countries.reverse();

for (let country of countries) {
  const words = country.split(" ");
  const capitalizedWords = [];

  for (let word of words) {
    const capitalizedWord =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    capitalizedWords.push(capitalizedWord);
  }

  const capitalizedCountry = capitalizedWords.join(" ");
  reverseAndCapitalizedCountries.push(capitalizedCountry);
}

console.log(reverseAndCapitalizedCountries);
