// 2. Callbacks

// eg. 1 - err = true

const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    callback('It did not go well', skills);
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething(callback);

// eg. 2 - err = false

const doSomething2 = (callback2) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    callback2(false, skills);
  }, 2000);
};

const callback2 = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething2(callback2);

// eg. 3

const getUserData = (id, callback) => {
  setTimeout(() => {
    const user = {
      id: id,
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 30,
    };
    callback(user);
  }, 2000);
};

const displayUserData = (userData) => {
  console.log('User ID:', userData.id);
  console.log('User Name:', userData.name);
  console.log('User Email:', userData.email);
  console.log('User Age:', userData.age);
};

getUserData(123, displayUserData);

// 2.1. Promise constructor

// eg. 1

const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject('Something wrong has happened');
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// eg. 2

const doPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    if (skills.includes('Node')) {
      resolve('fullstack developer');
    } else {
      reject('Something wrong has happened');
    }
  }, 2000);
});

doPromise2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));

// eg. 3

const buyPhone = new Promise((resolve, reject) => {
  setTimeout(() => {
    const phone = 'iPhone 14';
    if (phone) {
      resolve(phone);
    } else {
      reject('Error: Phone not available');
    }
  }, 2000);
});

buyPhone
  .then((result) => {
    console.log(`You bought a ${result}`);
  })
  .catch((error) => {
    console.log(error);
  });
