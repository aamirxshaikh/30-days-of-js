// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

    let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

    let matches = sentence.match(/love/g);
    let count = matches ? matches.length : 0;

    console.log(count);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

    sentence = 'You cannot end a sentence with because because because is a conjunction';

    matches = sentence.match(/because/g);

    count = matches ? matches.length : 0;

    console.log(count);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

    let clean = sentence.replace(/[^a-zA-Z0-9\s]/g, "");

    let arr = clean.split(' ');

    // Create an object to store word frequency counts
    let wordCount = {};

    // Loop through the words and count frequency

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    // Find the most frequent word

    let mostFrequentWord = '';
    let highestFrequency = 0;

    for (let word in wordCount) {
        if (wordCount[word] > highestFrequency) {
            mostFrequentWord = word;
            highestFrequency = wordCount[word];
        }
    }
    
    console.log(mostFrequentWord);

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

    sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

    arr = sentence.match(/\d+/g);
    
    let salary = Number(arr[0]) * 12;
    let bonus = Number(arr[1]);
    let onlineCourses = Number(arr[2]) * 12;
    
    let annualIncome = salary + bonus + onlineCourses;

    console.log(annualIncome);
