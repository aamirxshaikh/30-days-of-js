// 1. Find a union b

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);

// 2. Find a intersection b

let a2 = [1, 2, 3, 4, 5];
let b2 = [3, 4, 5, 6];

let A2 = new Set(a2);
let B2 = new Set(b2);

let c2 = a2.filter((num) => B2.has(num));
let C2 = new Set(c2);

console.log(C2);

// 3. Find a with b

let a3 = [1, 2, 3, 4, 5];
let b3 = [3, 4, 5, 6];

let A3 = new Set(a3);
let B3 = new Set(b3);

let c3 = a3.filter((num) => !B3.has(num));
let C3 = new Set(c3);

console.log(C3);
