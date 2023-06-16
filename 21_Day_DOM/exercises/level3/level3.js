// 1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// 1.1. The year color is changing every 1 second

const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
let currentIndex = 0;

function changeColor() {
  const h1 = document.querySelector('h1');
  const year = h1.textContent.match(/\d+/g)[0];

  h1.innerHTML = h1.innerHTML.replace(
    year,
    `<span style="color: ${colors[currentIndex]}">${year}</span>`
  );

  currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeColor, 1000);

// 1.2. The date and time background color is changing every one seconds

let index = 0;

function displayDateTime() {
  const datetimeElement = document.getElementById('date-time');
  const now = new Date();

  const date = now.toLocaleDateString('en-US');
  const time = now.toLocaleTimeString('en-US');

  const datetimeString = `${date} ${time}`;

  datetimeElement.innerText = datetimeString;

  datetimeElement.style.backgroundColor = colors[index];

  index = (index + 1) % colors.length;
}

setInterval(displayDateTime, 1000);

// 1.3. Completed challenge has background green
// 1.4. Ongoing challenge has background yellow
// 1.5. Coming challenges have background red

const liElements = document.querySelectorAll('li');

liElements.forEach((li) => {
  if (li.textContent.includes('Done')) {
    li.classList.add('class', 'green');
  } else if (li.textContent.includes('Ongoing')) {
    li.classList.add('class', 'yellow');
  } else if (li.textContent.includes('Coming')) {
    li.classList.add('class', 'red');
  }
});
