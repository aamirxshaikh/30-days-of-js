let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Check the speed difference among the following loops: while, for, for of, forEach

console.time('while');

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

console.timeEnd('while');

console.time('for');

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.timeEnd('for');

console.time('for of');

for (const e of arr) {
  console.log(e);
}

console.timeEnd('for of');

console.time('forEach');

arr.forEach((e) => {
  console.log(e);
});

console.timeEnd('forEach');
