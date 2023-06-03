// 1. Create a closure which has three inner functions

const outer = () => {
  let x = 10;

  const inner = () => {
    x++;
    return x;
  };

  const inner2 = () => {
    x += 2;
    return x;
  };

  const inner3 = () => {
    x += 3;
    return x;
  };

  return {
    inner: inner(),
    inner2: inner2(),
    inner3: inner3(),
  };
};

const innerFuncs = outer();
console.log(innerFuncs.inner);
console.log(innerFuncs.inner2);
console.log(innerFuncs.inner3);

// or

function outer2() {
  const str = 'Hello';

  function inner() {
    console.log(str + ' World!');
  }

  function inner2() {
    console.log(str + ' Everyone!');
  }

  function inner3() {
    console.log(str + ' Universe!');
  }

  return {
    inner,
    inner2,
    inner3,
  };
}

const innerFuncs2 = outer2();

innerFuncs2.inner();
innerFuncs2.inner2();
innerFuncs2.inner3();
