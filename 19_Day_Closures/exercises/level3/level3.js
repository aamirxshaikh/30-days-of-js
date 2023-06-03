// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount(firstname, lastname) {
  const incomes = [];
  const expenses = [];

  function totalIncome() {
    return incomes.reduce((acc, income) => acc + income.amount, 0);
  }

  function totalExpense() {
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
  }

  function accountInfo() {
    return {
      firstname,
      lastname,
      totalIncome: totalIncome(),
      totalExpense: totalExpense(),
    };
  }

  function addIncome(income) {
    incomes.push(income);
  }

  function addExpense(expense) {
    expenses.push(expense);
  }

  function accountBalance() {
    return totalIncome() - totalExpense();
  }

  return {
    addIncome,
    addExpense,
    accountBalance,
    accountInfo,
  };
}

const account = personAccount('John', 'Doe');

account.addIncome({
  amount: 1000,
  description: 'Salary',
});
account.addIncome({
  amount: 500,
  description: 'Bonus',
});

account.addExpense({
  amount: 200,
  description: 'Rent',
});
account.addExpense({
  amount: 100,
  description: 'Groceries',
});

const totalIncome = account.accountInfo().totalIncome;
console.log('Total income:', totalIncome); // 1500

const totalExpense = account.accountInfo().totalExpense;
console.log('Total expense:', totalExpense);

const accountBalance = account.accountBalance();
console.log('Account balance:', accountBalance);

const accountInfo = account.accountInfo();
console.log('Account information:', accountInfo);
