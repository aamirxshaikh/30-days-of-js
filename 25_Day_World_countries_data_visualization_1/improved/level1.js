// Function to display population data as a bar graph
function displayPopulationData() {
  const chartContainer = document.getElementById('chart-container');
  chartContainer.innerHTML = ''; // Clear previous graph

  const populationData = countries
    .sort((a, b) => b.population - a.population)
    .slice(0, 10); // Get top 10 countries by population

  const chart = document.createElement('div');
  chart.className = 'bar-chart';

  // Create bars for each country population
  populationData.forEach((country) => {
    const barContainer = document.createElement('div');
    barContainer.className = 'bar-container';

    const countryName = document.createElement('div');
    countryName.className = 'country-name';
    countryName.textContent = country.name;
    barContainer.appendChild(countryName);

    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.width = country.population / 1000000 + 'px'; // Adjust bar width based on population (example calculation)
    bar.textContent = country.population.toLocaleString(); // Display population count as label
    barContainer.appendChild(bar);

    chart.appendChild(barContainer);
  });

  chartContainer.appendChild(chart);
}

// Function to display language data as a bar graph
function displayLanguageData() {
  const chartContainer = document.getElementById('chart-container');
  chartContainer.innerHTML = ''; // Clear previous graph

  const languageData = {};
  countries.forEach((country) => {
    country.languages.forEach((language) => {
      languageData[language] = (languageData[language] || 0) + 1;
    });
  });

  const sortedLanguages = Object.keys(languageData)
    .sort((a, b) => languageData[b] - languageData[a])
    .slice(0, 10); // Get top 10 spoken languages

  const chart = document.createElement('div');
  chart.className = 'bar-chart';

  // Create bars for each language count
  sortedLanguages.forEach((language) => {
    const barContainer = document.createElement('div');
    barContainer.className = 'bar-container';

    const languageName = document.createElement('div');
    languageName.className = 'country-name';
    languageName.textContent = language;
    barContainer.appendChild(languageName);

    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.width = languageData[language] * 10 + 'px'; // Adjust bar width based on language count (example calculation)
    bar.textContent = languageData[language];
    barContainer.appendChild(bar);

    chart.appendChild(barContainer);
  });

  chartContainer.appendChild(chart);
}

// Function to update the feedback message
function updateFeedbackMessage(message) {
  const feedback = document.getElementById('feedback');
  feedback.textContent = message;
}

// Add event listeners to the buttons
document.getElementById('population-button').addEventListener('click', () => {
  updateFeedbackMessage('10 Most Populated Countries in the World');
  displayPopulationData();
});

document.getElementById('languages-button').addEventListener('click', () => {
  updateFeedbackMessage('10 Most Spoken Languages in the World');
  displayLanguageData();
});

// Update the total number of countries
document.getElementById('total-countries').textContent =
  'Total Countries: ' + countries.length;
