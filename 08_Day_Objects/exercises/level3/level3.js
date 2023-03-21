// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: 'Aamir',
  lastName: 'Shaikh',
  incomes: [],
  expenses: [],

  totalIncome() {
    let totalIncome = 0;

    for (const income of this.incomes) {
      totalIncome += income.amount;
    }

    return totalIncome;
  },

  totalExpense() {
    let totalExpense = 0;

    for (const expense of this.expenses) {
      totalExpense += expense.amount;
    }

    return totalExpense;
  },

  accountInfo() {
    console.log(`Account Information for ${this.firstName} ${this.lastName}:`);
    console.log(`- Total Income: $${this.totalIncome()}`);
    console.log(`- Total Expenses: $${this.totalExpense()}`);
    console.log(`- Account Balance: $${this.accountBalance()}`);
  },

  addIncome(amount, description) {
    this.incomes.push({ amount, description });
  },

  addExpense(amount, description) {
    this.expenses.push({ amount, description });
  },

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
};

personAccount.addIncome(5000, 'Salary');
personAccount.addIncome(1000, 'Bonus');
personAccount.addExpense(1500, 'Rent');
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());
personAccount.accountInfo();

// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
];

// Imagine you are getting the above users collection from a MongoDB database.

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

const signUp = (newUser) => {
  const exists = users.find(
    (user) =>
      user._id === newUser._id ||
      user.username === newUser.username ||
      user.email === newUser.email
  );

  if (exists) {
    console.log('User already exists.');

    return;
  }

  users.push(newUser);

  console.log('User created successfully.');

  // signIn();
};

const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 6);
};

const getCurrentDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const createdAt = `${day}/${month}/${year} ${
    hours > 12 ? hours - 12 : hours
  }:${minutes} ${hours > 12 ? 'PM' : 'AM'}`;

  return createdAt;
};

const newUser = {
  _id: generateRandomId(),
  username: 'aamir',
  email: 'aamir@aamir.com',
  password: '789789',
  createdAt: getCurrentDateTime(),
  isLoggedIn: false,
};

signUp(newUser);

console.log(users);

// b. Create a function called signIn which allows user to sign in to the application

const signIn = (username, password) => {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const loggedInUser = { ...user, isLoggedIn: true };

    console.log('User logged-in.');

    return loggedInUser;
  } else {
    console.log('Invalid username or password.');

    return null;
  }
};

console.log(signIn('aamir', '789789'));

// 3. The products array has three elements and each of them has six properties.

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
];

// a. Create a function called rateProduct which rates the product

const rateProduct = (productId, userId, rate) => {
  const product = products.find((p) => p._id === productId);

  if (!product) {
    console.log('Product not found.');
    return;
  }

  const existingRating = product.ratings.find((r) => r.userId === userId);

  if (existingRating) {
    console.log('User already rated the product.');
    return;
  }

  product.ratings.push({ userId, rate });
  console.log('Product rated successfully.');
};

rateProduct('hedfcg', 'zwf8md', 2);

console.log(products);

// b. Create a function called averageRating which calculate the average rating of a product

const averageRating = (productId) => {
  const product = products.find((p) => p._id === productId);

  if (!product || !product.ratings.length) {
    console.log('Product not found or has no ratings.');
    return;
  }

  let max = 0;

  for (const rating of product.ratings) {
    max += rating.rate;
  }

  return max / product.ratings.length;
};

console.log(averageRating('eedfcf'));

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

const likeProduct = (productId, userId) => {
  const product = products.find((p) => p._id === productId);

  if (!product) {
    console.log('Product not found.');
    return;
  }

  const userLiked = product.likes.includes(userId);

  if (userLiked) {
    product.likes.splice(product.likes.indexOf(userId, 1));
    console.log('Product unliked successfully.');
  } else {
    product.likes.push(userId);
    console.log('Product liked successfully.');
  }
};

likeProduct('hedfcg', 'fg12cy');

console.log(products);
