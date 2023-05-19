// 3. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
  firstName: 'Aamir',
  lastName: 'Shaikh',
  incomes: {},
  expenses: {},

  totalIncome() {
    return Object.values(this.incomes).reduce((acc, cur) => acc + cur);
  },

  totalExpense() {
    return Object.values(this.expenses).reduce((acc, cur) => acc + cur);
  },

  accountInfo() {
    return `Name: ${this.firstName} ${
      this.lastName
    }\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}`;
  },

  addIncome(description, amount) {
    if (!this.incomes[description]) {
      this.incomes[description] = amount;
    } else {
      this.incomes[description] += amount;
    }
  },

  addExpense(description, amount) {
    if (!this.expenses[description]) {
      this.expenses[description] = amount;
    } else {
      this.expenses[description] += amount;
    }
  },

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
};

personAccount.addIncome('Salary', 5000);
personAccount.addIncome('Bonus', 1000);
personAccount.addExpense('Rent', 1500);
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());
personAccount.accountInfo();

localStorage.setItem(
  'personAccount',
  JSON.stringify(personAccount, undefined, 4)
);

console.log(localStorage.getItem('personAccount'));
