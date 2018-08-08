const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const dropDown = document.querySelector(`select#countries`);
  const selectView = new SelectView(dropDown);
  selectView.bindingEvents();

  const countries = new Countries();
  countries.bindEvents();
});
