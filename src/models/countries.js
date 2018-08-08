const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Countries = function (){
  this.countries = null;
}

Countries.prototype.bindEvents = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) =>{
    this.countries = data;
    PubSub.publish('Countries:All-countries-ready', this.countries)
  });

    PubSub.subscribe('SelectView:country-selected', (evt) => {
    const indexNumber = evt.detail;
    const foundCountry = this.findCountry(indexNumber);
    PubSub.publish('Countries:found-country', foundCountry);
  });
};

Countries.prototype.findCountry = function (countryIndex) {
  const selectedCountry = this.countries[countryIndex];
  PubSub.publish('Countries:selected-country-ready', selectedCountry)
console.dir(selectedCountry);
};

module.exports = Countries;
