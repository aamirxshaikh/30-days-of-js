// Global variables
let searchType = 'any-word'; // Updated initial search type
let sortOrder = 'asc';
let filteredCountries = countries.slice();

// Get DOM elements
const totalCountries = document.getElementById('total-countries');
const searchInput = document.getElementById('search-input');
const startsWithBtn = document.getElementById('starts-with-btn');
const anyWordBtn = document.getElementById('any-word-btn');
const orderBtn = document.getElementById('order-btn');
const feedback = document.getElementById('feedback');
const resultsContainer = document.getElementById('results-container');

// Event listeners
searchInput.addEventListener('input', handleSearch);
startsWithBtn.addEventListener('click', () => {
  updateSearchType('starts-with');
});
anyWordBtn.addEventListener('click', () => {
  updateSearchType('any-word');
});
orderBtn.addEventListener('click', toggleSortOrder);

// Search handler
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase().trim('');

  if (searchTerm === '') {
    filteredCountries = [...countries];
    updateFeedback('');
  } else {
    if (searchType === 'starts-with') {
      filteredCountries = countries.filter((country) =>
        country.toLowerCase().startsWith(searchTerm)
      );
      updateFeedback(
        `Countries starting with "${searchTerm}" are ${filteredCountries.length}`
      );
    } else if (searchType === 'any-word') {
      filteredCountries = countries.filter((country) =>
        country.toLowerCase().includes(searchTerm)
      );
      updateFeedback(
        `Countries containing "${searchTerm}" are ${filteredCountries.length}`
      );
    }
  }

  if (sortOrder === 'asc') {
    filteredCountries.sort();
  } else if (sortOrder === 'desc') {
    filteredCountries.sort().reverse();
  }

  updateResults();
}

// Update the search type
function updateSearchType(type) {
  searchType = type;
  startsWithBtn.classList.toggle('active', searchType === 'starts-with');
  anyWordBtn.classList.toggle('active', searchType === 'any-word');
  handleSearch();
}

// Toggle the sort order
function toggleSortOrder() {
  sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  orderBtn.classList.toggle('asc', sortOrder === 'asc');
  orderBtn.classList.toggle('desc', sortOrder === 'desc');
  handleSearch();
}

// Update the visual feedback
function updateFeedback(message) {
  feedback.textContent = message;
}

// Update the search results
function updateResults() {
  resultsContainer.innerHTML = '';

  filteredCountries.forEach((country) => {
    const countryBox = document.createElement('div');
    countryBox.className = 'country-box';

    const countryName = document.createElement('p');
    countryName.className = 'country-name';
    countryName.textContent = country;

    countryBox.appendChild(countryName);
    resultsContainer.appendChild(countryBox);
  });
}

// Initial setup
totalCountries.textContent = `Total number of countries: ${countries.length}`;
updateResults();
