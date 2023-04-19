// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

// [
//   { word: 'love', count: 6 },
//   { word: 'you', count: 5 },
//   { word: 'can', count: 3 },
//   { word: 'what', count: 2 },
//   { word: 'teaching', count: 2 },
//   { word: 'not', count: 2 },
//   { word: 'else', count: 2 },
//   { word: 'do', count: 2 },
//   { word: 'I', count: 2 },
//   { word: 'which', count: 1 },
//   { word: 'to', count: 1 },
//   { word: 'the', count: 1 },
//   { word: 'something', count: 1 },
//   { word: 'if', count: 1 },
//   { word: 'give', count: 1 },
//   { word: 'develop', count: 1 },
//   { word: 'capabilities', count: 1 },
//   { word: 'application', count: 1 },
//   { word: 'an', count: 1 },
//   { word: 'all', count: 1 },
//   { word: 'Python', count: 1 },
//   { word: 'If', count: 1 },
// ];

// console.log(tenMostFrequentWords(paragraph, 10))[
//   ({ word: 'love', count: 6 },
//   { word: 'you', count: 5 },
//   { word: 'can', count: 3 },
//   { word: 'what', count: 2 },
//   { word: 'teaching', count: 2 },
//   { word: 'not', count: 2 },
//   { word: 'else', count: 2 },
//   { word: 'do', count: 2 },
//   { word: 'I', count: 2 },
//   { word: 'which', count: 1 })
// ];

const tenMostFrequentWords = (paragraph, count) => {
  const pattern = /\w+/g;
  const matches = paragraph.match(pattern);

  const wordsMap = new Map();

  for (const match of matches) {
    if (wordsMap.has(match)) {
      wordsMap.set(match, wordsMap.get(match) + 1);
    } else {
      wordsMap.set(match, 1);
    }
  }

  return Array.from(wordsMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([word, count]) => ({
      word,
      count,
    }));
};

const paragraph =
  'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.';

console.log(tenMostFrequentWords(paragraph, 5));

// or

// function tenMostFrequentWords(str, n) {
//   // Convert the string to lowercase and split into words
//   const words = str.match(/\b\w+\b/g);

//   // Create a word frequency object to store word counts
//   const wordFreq = {};
//   for (const word of words) {
//     wordFreq[word] = (wordFreq[word] || 0) + 1;
//   }

//   // Convert word frequency object to an array of {word, count} objects
//   const wordFreqArr = Object.keys(wordFreq).map((word) => ({
//     word: word,
//     count: wordFreq[word],
//   }));

//   wordFreqArr.sort((a, b) => b.count - a.count);

//   return wordFreqArr.slice(0, n);
// }

// const paragraph =
//   'love you can what teaching not else do I which to the something if give develop capabilities application an all Python If love you can what teaching not else do I which to the something if give develop capabilities application an all Python If love you can what teaching not else do I which to the something if give develop capabilities application an all Python If';
// const result = tenMostFrequentWords(paragraph, 10);
// console.log(result);
