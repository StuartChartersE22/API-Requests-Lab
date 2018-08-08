const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (container) {
  this.container = container;
}

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-country-ready', (evt) => {
    const country = evt.detail;
    this.render(country)
  });
};

InfoView.prototype.render = function (country) {
  this.emptyDetails();
  addName(country.name, this.container);
  addFlag(country.flag, this.container);
  addRegion(country.region, this.container);
  addLanguages(country.languages, this.container);
};

InfoView.prototype.emptyDetails = function () {
  this.container.innerHTML = ` `;
};

module.exports = InfoView;

function addName(name, container) {
  const countryName = document.createElement(`h2`);
  countryName.classList.add(`country-name`);
  countryName.textContent = name;
  container.appendChild(countryName);
};

function addRegion(region, container) {
  const regionHeader = document.createElement(`h3`);
  regionHeader.classList.add(`header`);
  regionHeader.textContent = `Region:`;
  container.appendChild(regionHeader);

  const countryRegion = document.createElement(`p`);
  countryRegion.classList.add('country-region');
  countryRegion.textContent = region;
  container.appendChild(countryRegion);
};

function addFlag(flagSRC, container) {
  const countryFlag = document.createElement(`img`);
  countryFlag.classList.add(`country-flag`);
  countryFlag.src = flagSRC;
  container.appendChild(countryFlag);
};

function addLanguages(languages, container) {
  const languageTitle = document.createElement(`h3`);
  languageTitle.classList.add(`header`);
  languageTitle.textContent = `Languages:`;
  container.appendChild(languageTitle);

  const countryLanguages = document.createElement(`ul`);
  languages.forEach(language => {
    const listItem = document.createElement(`li`);
    listItem.classList.add(`language`);
    listItem.textContent = language.name;
    countryLanguages.appendChild(listItem);
  });
  container.appendChild(countryLanguages);
}
