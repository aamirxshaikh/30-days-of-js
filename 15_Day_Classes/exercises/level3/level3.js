// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

class Statistics {
  constructor(ages) {
    this.ages = ages.sort((a, b) => a - b);
  }

  count() {
    return this.ages.length;
  }

  sum() {
    return this.ages.reduce((acc, e) => acc + e);
  }

  min() {
    return this.ages[0];
  }

  max() {
    return this.ages[this.ages.length - 1];
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return Math.floor(this.sum() / this.count());
  }

  median() {
    const mid = Math.floor(this.count() / 2);

    return this.count() % 2 === 0
      ? (this.ages[mid] + this.ages[mid + 1]) / 2
      : this.ages[mid];
  }

  mode() {
    let resultObj = {};

    this.ages.forEach((age) => {
      if (resultObj[age]) {
        resultObj[age]++;
      } else {
        resultObj[age] = 1;
      }
    });

    const resultArray = Object.entries(resultObj)
      .map(([mode, count]) => ({
        mode,
        count,
      }))
      .sort((a, b) => b.count - a.count);

    return resultArray.slice(0, 1)[0];
  }

  var() {
    const count = this.count();
    const mean = this.mean();

    return (
      this.ages.map((age) => (age - mean) ** 2).reduce((acc, e) => acc + e) /
      (count - 1)
    ).toFixed(1);
  }

  std() {
    return Math.sqrt(this.var()).toFixed(1);
  }

  freqDist() {
    let resultObj = {};

    this.ages.forEach((age) => {
      if (resultObj[age]) {
        resultObj[age]++;
      } else {
        resultObj[age] = 1;
      }
    });

    const resultArray = Object.entries(resultObj)
      .map(([age, count]) => ({
        age: Number(age),
        count,
      }))
      .sort((a, b) => b.count - a.count);

    const total = resultArray.reduce((acc, { count }) => acc + count, 0);

    return resultArray.map(({ age, count }) => ({
      age,
      percent: ((count / total) * 100).toFixed(1),
    }));
  }

  describe() {
    return `
    Count: ${this.count()}
    Sum: ${this.sum()}
    Min: ${this.min()}
    Max: ${this.max()}
    Range: ${this.range()}
    Mean: ${this.mean()}
    Median: ${this.median()}
    Mode: ${JSON.stringify(this.mode())}
    Variance: ${this.var()}
    Standard Deviation: ${this.std()}
    Frequency Distribution: ${JSON.stringify(this.freqDist())}
  `;
  }
}

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = new Statistics(ages);
console.log(statistics);
console.log('Count:', statistics.count()); // 25
console.log('Sum: ', statistics.sum()); // 744
console.log('Min: ', statistics.min()); // 24
console.log('Max: ', statistics.max()); // 38
console.log('Range: ', statistics.range()); // 14
console.log('Mean: ', statistics.mean()); // 30
console.log('Median: ', statistics.median()); // 29
console.log('Mode: ', statistics.mode()); // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()); // 17.5
console.log('Standard Deviation: ', statistics.std()); // 4.2
console.log('Frequency Distribution: ', statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
console.log(statistics.describe());

// 2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = {};
    this.expenses = {};
  }

  get totalIncome() {
    return Object.values(this.incomes).reduce((acc, cur) => acc + cur);
  }

  get totalExpense() {
    return Object.values(this.expenses).reduce((acc, cur) => acc + cur);
  }

  get accountInfo() {
    return `Name: ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome}\nTotal Expense: ${this.totalExpense}`;
  }

  addIncome(description, amount) {
    if (!this.incomes[description]) {
      this.incomes[description] = amount;
    } else {
      this.incomes[description] += amount;
    }
  }

  addExpense(description, amount) {
    if (!this.expenses[description]) {
      this.expenses[description] = amount;
    } else {
      this.expenses[description] += amount;
    }
  }

  get accountBalance() {
    return this.totalIncome - this.totalExpense;
  }
}

const personAccount = new PersonAccount('Aamir', 'Shaikh');

personAccount.addIncome('Salary', 5000);
personAccount.addIncome('Bonus', 1000);
personAccount.addExpense('Rent', 1500);
console.log(personAccount.totalIncome);
console.log(personAccount.totalExpense);
console.log(personAccount.accountBalance);
console.log(personAccount.accountInfo);
