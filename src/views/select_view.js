const PubSub = require('../helpers/pub_sub.js');
const DropDownHelper = require('../helpers/drop_down_helper.js');

const SelectView = function (dropDown) {
  this.dropDown = dropDown;
};

SelectView.prototype.bindingEvents = function () {
  PubSub.subscribe(`Countries:All-countries-ready`, (evt) => {
    const countries = evt.detail;
    DropDownHelper.createOptions(this.dropDown, countries, `name`)
  });

  this.dropDown.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:country-selected', selectedIndex);
  });
};




module.exports = SelectView;
