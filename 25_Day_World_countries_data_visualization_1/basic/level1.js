document.addEventListener('DOMContentLoaded', () => {
  const totalCountriesElement = document.querySelector('.total-countries');
  const feedbackElement = document.querySelector('.feedback');
  const populationButtonElement = document.querySelector('.population');
  const languagesButtonElement = document.querySelector('.languages');
  const statElement = document.querySelector('#stat');

  populationButtonElement.addEventListener('click', () => {
    handleButtonClick('population', '10 Most Populated Countries in the World');
  });

  languagesButtonElement.addEventListener('click', () => {
    handleButtonClick('languages', '10 Most Spoken Languages in the World');
  });

  const handleButtonClick = (type, feedbackText) => {
    clearStatElement();
    feedbackElement.textContent = feedbackText;
    const data = getDataByType(type);
    const total = data[0].count;
    createGraphs(data, total, type);
  };

  const getDataByType = (type) => {
    const dataObj = {};

    countries.forEach((country) => {
      if (type === 'population') {
        dataObj[country.name] = country.population;
      } else if (type === 'languages') {
        country.languages.forEach((language) => {
          dataObj[language] = (dataObj[language] || 0) + 1;
        });
      }
    });

    const dataArray = Object.entries(dataObj)
      .map(([key, value]) => ({
        [type === 'population' ? 'country' : 'language']: key,
        count: value
      }))
      .sort((a, b) => b.count - a.count);

    if (type === 'population') {
      dataArray.unshift({
        country: 'World Population',
        count: getWorldPopulation()
      });
    } else if (type === 'languages') {
      dataArray.unshift({
        language: 'Total Languages',
        count: getTotalLanguages()
      });
    }

    return dataArray.slice(0, 11);
  };

  const createGraphs = (data, total, type) => {
    data.forEach((element) => {
      const percentage = (element.count / total) * 100;
      const entryElement = document.createElement('p');
      const barChartElement = document.createElement('span');
      const countElement = document.createElement('p');

      entryElement.textContent =
        type === 'population' ? element.country : element.language;
      barChartElement.textContent = '';
      countElement.textContent = element.count;

      barChartElement.setAttribute('class', 'bar-chart');
      barChartElement.style.width = `${percentage.toFixed(2) * 10}px`;

      statElement.appendChild(entryElement);
      statElement.appendChild(barChartElement);
      statElement.appendChild(countElement);
    });
  };

  const clearStatElement = () => {
    statElement.innerHTML = '';
  };

  const getWorldPopulation = () => {
    let worldPopulation = 0;

    countries.forEach((country) => {
      worldPopulation += country.population;
    });

    return worldPopulation;
  };

  const getTotalLanguages = () => {
    const languagesSet = new Set();

    countries.forEach((country) => {
      country.languages.forEach((language) => {
        languagesSet.add(language);
      });
    });

    return languagesSet.size;
  };

  totalCountriesElement.textContent = `${countries.length}`;
});
