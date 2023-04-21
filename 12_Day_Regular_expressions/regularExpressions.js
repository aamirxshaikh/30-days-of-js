// 1. Regular Expressions
//     1.1 RegExp parameters
//         1.1.1 Pattern

// A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.

//         1.1.2 Flags

// Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:

// g: a global flag which means looking for a pattern in whole text
// i: case insensitive flag(it searches for both lowercase and uppercase)
// m: multiline

//     1.2 Creating a pattern with RegExp Constructor

let pattern = 'love';
let regEx = new RegExp(pattern);

// eg. 2

let pattern2 = 'love';
let flag2 = 'gi';
let regEx2 = new RegExp(pattern2, flag2);

// eg. 3

let regEx3 = new RegExp('love', 'gi');

//     1.3 Creating a pattern without RegExp Constructor

let regEx4 = /love/gi;

//     1.4 RegExpp Object Methods

//         1.4.1 Testing for a match
// test():Tests for a match in a string. It returns true or false.

const str = 'I love JavaScript';
const pattern3 = /love/;
const result = pattern3.test(str);
console.log(result);

//         1.4.2 Array containing all of the match
// match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

const str2 = 'I love JavaScript';
const pattern4 = /love/;
const result2 = str2.match(pattern4);
console.log(result2);

// eg. 2

const str3 = 'I love JavaScript';
const pattern5 = /love/g;
const result3 = str3.match(pattern5);
console.log(result3);

// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

const str4 = 'I love JavaScript';
const pattern6 = /love/g;
const result4 = str4.search(pattern6);
console.log(result4);

//         1.4.3 Replacing a substring
// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

const txt =
  'Python is the most beautiful language that a human being has ever created.\
I recommend python for a first programming language';

const matchReplaced = txt.replace(/Python|python/, 'JavaScript');
console.log(matchReplaced);

// eg. 2 - With global flag

const txt2 =
  'Python is the most beautiful language that a human being has ever created.\
I recommend python for a first programming language';

const matchReplaced2 = txt2.replace(/Python|python/g, 'JavaScript');
console.log(matchReplaced2);

// eg. 3 - With global and case insensitive flag

const txt3 =
  'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language';

const matchReplaced3 = txt3.replace(/Python/gi, 'JavaScript');
console.log(matchReplaced3);

// eg. 4 - Cleaning the txt4

const txt4 =
  '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.';

const matches = txt4.replace(/%/g, '');
console.log(matches);

//     1.5 Square Bracket

const pattern7 = '[Aa]pple'; // this square bracket means either A or a
const txt5 =
  'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ';
const matches2 = txt5.match(pattern7);

console.log(matches2);

// eg. 2 - with global flag

const pattern8 = /[Aa]pple/g; // this square bracket means either A or a
const txt6 =
  'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. ';
const matches3 = txt6.match(pattern8);

console.log(matches3);

// eg. 3 - apple or banana

const pattern9 = /[Aa]pple|[Bb]anana/g; // this square bracket mean either A or a
const txt7 =
  'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.';
const matches4 = txt7.match(pattern9);

console.log(matches4);

//     1.6 Escape character(\) in RegExp

const pattern10 = /\d/g; // d is a special character which means digits
const txt8 = 'This regular expression example was made in January 12,  2020.';
const matches5 = txt8.match(pattern10);

console.log(matches5); // ["1", "2", "2", "0", "2", "0"], this is not what we want

//     1.7 One or more times(+)

const pattern11 = /\d+/g; // d is a special character which means digits
const txt9 = 'This regular expression example was made in January 12,  2020.';
const matches6 = txt9.match(pattern11);

console.log(matches6); // ["12", "2020"]

// eg. 2

const pattern12 = /\w+/g; // d is a special character which means digits
const txt10 = 'hello there';
const matches7 = txt10.match(pattern12);

console.log(matches7);

//     1.8 Period(.)

const pattern13 = /[a]./g; // this square bracket means a and . means any character except new line
const txt11 = 'Apple and banana are fruits';
const matches8 = txt11.match(pattern13);

console.log(matches8); // ["an", "an", "an", "a ", "ar"]

// eg. 2

const pattern14 = /[a].+/g; // . any character, + any character one or more times
const txt12 = 'Apple and banana are fruits';
const matches9 = txt12.match(pattern14);

console.log(matches9); // ['and banana are fruits']

// eg. 3

const regex1 = /./;
console.log(regex1.test('a')); // true

// eg. 4

const regex2 = /.o/;
console.log(regex2.test('bo')); // true
console.log(regex2.test('go')); // true

// eg. 5

const regex3 = /.o./;
console.log(regex3.test('bow')); // true
console.log(regex3.test('now')); // true

//     1.9 Zero or more times(*)

const pattern15 = /[a].*/g; // . any character, * zero or many times
const txt13 = 'Apple and banana are fruits';
const matches10 = txt13.match(pattern15);

console.log(matches10); // ['and banana are fruits']

//     1.10 Zero or one times(?)

const txt14 =
  'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.';
const pattern16 = /[Ee]-?mail/g; // ? means optional
const matches11 = txt14.match(pattern16);

console.log(matches11); // ["e-mail", "email", "Email", "E-mail"]

// eg. 2

const pattern17 = /apples?/gi;
const txt15 = 'apple apples Apple Apples';
const matches12 = txt15.match(pattern17);

console.log(matches12);

//     1.11 Quantifier in RegExp

// eg. 1 - exactly four character words

const txt16 = 'This regular expression example was made in December 6,  2019.';
const pattern18 = /\b\w{4}\b/g; //  exactly four character words
const matches13 = txt16.match(pattern18);
console.log(matches13); // ['This', 'made', '2019']

// eg. 2 - exactly four character  words without numbers

const txt17 = 'This regular expression example was made in December 6,  2019.';
const pattern19 = /\b[a-zA-Z]{4}\b/g; //  exactly four character  words without numbers
const matches14 = txt17.match(pattern19);
console.log(matches14); // ['This', 'made']

// eg. 3 - a number and exactly four digits

const txt18 = 'This regular expression example was made in December 6,  2019.';
const pattern20 = /\b\d{4}\b/g; // a number and exactly four digits
const matches15 = txt18.match(pattern20);
console.log(matches15); // ['2019']

// eg. 4 - 1 to 4

const txt19 = 'This regular expression example was made in December 6,  2019.';
const pattern21 = /\d{1,4}/g; // 1 to 4
const matches16 = txt19.match(pattern21);
console.log(matches16); // ['6', '2019']

//     1.12 Cart ^

// Starts with

const txt20 =
  'This this regular expression example was made in December 6,  2019.';
const pattern22 = /^This/; // ^ means starts with
const matches17 = txt20.match(pattern22);
console.log(matches17); // ['This']

// Negation

const txt21 = 'This regular expression example was made in December 6,  2019.';
const pattern23 = /[^A-Za-z,. ]+/g; // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches18 = txt21.match(pattern23);
console.log(matches18); // ["6", "2019"]

//     1.13 Exact match - It should have ^ starting and $ which is an end.

let pattern24 = /^[A-Z][a-z]{3,12}$/;
let name = 'Aamir';
let result5 = pattern24.test(name);

console.log(result5); // true
