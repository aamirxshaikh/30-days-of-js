// 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (sentence) => {
  const cleanedText = sentence.replace(/[^\w\s]/g, '');

  return cleanedText;
};

const cleanedText = cleanText(sentence);
console.log(cleanedText);

// I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher

// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

// console.log(mostFrequentWords(cleanedText))[
//   ({ word: 'I', count: 3 },
//   { word: 'teaching', count: 2 },
//   { word: 'teacher', count: 2 })
// ];

const mostFrequentWords = (cleanedText) => {
  const pattern = /\w+/g;
  const matches = cleanedText.match(pattern);

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
    .slice(0, 3)
    .map(([word, count]) => ({
      word,
      count,
    }));
};

console.log(mostFrequentWords(cleanedText));
