// 1. Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.

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

let index = 0;

function displayDateTime() {
  const datetimeElement = document.getElementById('date-time');
  const now = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const date = now.toLocaleDateString('en-US', options);
  const time = now.toLocaleTimeString('en-US');

  const datetimeString = `${date} ${time}`;

  datetimeElement.innerText = datetimeString;

  datetimeElement.style.backgroundColor = colors[index];

  index = (index + 1) % colors.length;
}

setInterval(displayDateTime, 1000);

const displayChallenges = () => {
  const challengesContainerElement = document.querySelector(
    '.challenges-container'
  );

  aamirChallenges2023.challenges.forEach((challenge) => {
    const challengeContainerWrapper = document.createElement('div');
    challengeContainerWrapper.classList.add('challenges-container-wrapper');

    const nameElement = document.createElement('div');
    const skillsElement = document.createElement('details');
    const summaryElement = document.createElement('summary');
    const pElement = document.createElement('p');
    const statusElement = document.createElement('div');

    nameElement.textContent = challenge.name;
    summaryElement.textContent = challenge.topics[0];
    pElement.textContent = challenge.topics;
    statusElement.textContent = challenge.status;

    skillsElement.appendChild(summaryElement);
    skillsElement.appendChild(pElement);

    challengeContainerWrapper.appendChild(nameElement);
    challengeContainerWrapper.appendChild(skillsElement);
    challengeContainerWrapper.appendChild(statusElement);

    challengesContainerElement.appendChild(challengeContainerWrapper);

    if (statusElement.textContent === 'Done') {
      challengeContainerWrapper.classList.add('class', 'green');
    } else if (statusElement.textContent === 'Ongoing') {
      challengeContainerWrapper.classList.add('class', 'yellow');
    } else if (statusElement.textContent === 'Coming') {
      challengeContainerWrapper.classList.add('class', 'red');
    }
  });
};
displayChallenges();

const displaySocialsAndBio = () => {
  const nameContainerElement = document.querySelector('.name-container');
  const socialLinksContainerElement = document.querySelector(
    '.social-links-container'
  );
  const bioContainerElement = document.querySelector('.bio-container');

  const h1 = document.createElement('h1');
  h1.textContent =
    aamirChallenges2023.author.firstName +
    ' ' +
    aamirChallenges2023.author.lastName;

  nameContainerElement.appendChild(h1);

  aamirChallenges2023.author.socialLinks.forEach((link) => {
    const a = document.createElement('a');
    a.setAttribute('href', link.url);
    a.innerHTML = link.fontawesomeIcon;
    a.textContent = link.social;

    socialLinksContainerElement.appendChild(a);
  });

  const p = document.createElement('p');
  p.textContent = aamirChallenges2023.author.bio;

  bioContainerElement.appendChild(p);
};
displaySocialsAndBio();

const displayTitleSkillsAndQualifications = () => {
  const titlesList = document.getElementById('titles');
  const skillsList = document.getElementById('skills');
  const qualificationsList = document.getElementById('qualifications');

  aamirChallenges2023.author.titles.forEach((title) => {
    const li = document.createElement('li');
    li.textContent = title;
    titlesList.appendChild(li);
  });

  aamirChallenges2023.author.skills.forEach((skill) => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  aamirChallenges2023.author.qualifications.forEach((qualification) => {
    const li = document.createElement('li');
    li.textContent = qualification;
    qualificationsList.appendChild(li);
  });
};
displayTitleSkillsAndQualifications();

const displayKeywords = () => {
  const keywordsContainerElement = document.querySelector(
    '.keywords-container'
  );

  aamirChallenges2023.keywords.forEach((keyword) => {
    const span = document.createElement('span');
    span.classList.add('keyword');
    span.textContent = keyword;
    span.style.backgroundColor = getRandomColor();

    keywordsContainerElement.appendChild(span);
  });
};
displayKeywords();

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
