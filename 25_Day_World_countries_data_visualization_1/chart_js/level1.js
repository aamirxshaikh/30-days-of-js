// Get DOM elements
const countryCountElement = document.getElementById('country-count');
const populationBtn = document.getElementById('population-btn');
const languagesBtn = document.getElementById('languages-btn');
const graphTitle = document.getElementById('graph-title');
const graphContainer = document.getElementById('graph');
const feedback = document.getElementById('feedback');

// Calculate population count for each country
function calculatePopulationCount() {
  const populationData = countries.map((country) => ({
    name: country.name,
    population: country.population
  }));

  // Sort by population in descending order
  populationData.sort((a, b) => b.population - a.population);

  // Take top 10 countries
  const top10Countries = populationData.slice(0, 10);

  return top10Countries;
}

// Calculate language count for all countries
function calculateLanguageCount() {
  const languageData = {};

  countries.forEach((country) => {
    country.languages.forEach((language) => {
      if (languageData[language]) {
        languageData[language]++;
      } else {
        languageData[language] = 1;
      }
    });
  });

  // Convert language data to array
  const languageArray = Object.keys(languageData).map((language) => ({
    name: language,
    count: languageData[language]
  }));

  // Sort by count in descending order
  languageArray.sort((a, b) => b.count - a.count);

  // Take top 10 languages
  const top10Languages = languageArray.slice(0, 10);

  return top10Languages;
}

// Create a bar chart using Chart.js library
function createBarChart(labels, data, title) {
  const ctx = graphContainer.getContext('2d');

  // Clear previous chart
  if (window.barChart) {
    window.barChart.destroy();
  }

  window.barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: title,
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Update the graph and feedback based on button selection
function updateGraph(selection) {
  let data, title;

  if (selection === 'population') {
    data = calculatePopulationCount();
    title = 'Population (in billions)';
    feedback.textContent = '10 Most Populated Countries in the World';
  } else if (selection === 'languages') {
    data = calculateLanguageCount();
    title = 'Language Count';
    feedback.textContent = '10 Most Spoken Languages in the World';
  }

  const labels = data.map((item) => item.name);
  const values = data.map((item) => item.population || item.count);

  graphTitle.textContent = title;
  createBarChart(labels, values, title);
}

// Event listeners for button clicks
populationBtn.addEventListener('click', () => updateGraph('population'));
languagesBtn.addEventListener('click', () => updateGraph('languages'));

// Initialize the application
countryCountElement.textContent = countries.length;
updateGraph('population');
