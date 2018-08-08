const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const DropDownHelper = require(`../helpers/drop_down_helper.js`)

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
    const foundCountry = DropDownHelper.selectOption(this.countries, indexNumber);
    PubSub.publish('Countries:found-country', foundCountry);
  });
};

module.exports = Countries;
