// 1. Create a closure which has one inner function

const outer = () => {
  let x = 10;

  const inner = () => {
    x++;
    return x;
  };

  return inner;
};

const inner = outer();
console.log(inner());
console.log(inner());
console.log(inner());
console.log(inner());
console.log(inner());
