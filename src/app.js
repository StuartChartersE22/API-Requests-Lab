const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const InfoView = require('./views/info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const dropDown = document.querySelector(`select#countries`);
  const selectView = new SelectView(dropDown);
  selectView.bindingEvents();

  const container = document.querySelector(`div#country`)
  const infoView = new InfoView(container);
  infoView.bindEvents();

  const countries = new Countries();
  countries.bindEvents();
});
