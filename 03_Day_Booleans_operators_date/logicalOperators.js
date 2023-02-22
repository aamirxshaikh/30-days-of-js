// && ampersand operator example

let check = 4 > 3 && 10 > 5; // true && true -> true
check = 4 > 3 && 10 < 5; // true && false -> false
check = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator, example

check = 4 > 3 || 10 > 5; // true  || true -> true
check = 4 > 3 || 10 < 5; // true  || false -> true
check = 4 < 3 || 10 < 5; // false || false -> false

//! Negation examples

check = 4 > 3; // true
check = !(4 > 3); //  false
let isEnabled = true;
let isDisabled = !isEnabled; // false
let isMarried = !false; // true
