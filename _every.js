var _ = require("lodash");

var worker = function(city) {
  var sorted = {
    hot: [],
    warm: []
  }

  function checkTemperature(city) {
    return city > 19;
  }

  _.forEach(city, function(temps, name){
    if (_.every(temps, checkTemperature)) {
      sorted.hot.push(name);
    } else if (_.some(temps, checkTemperature)) {
      sorted.warm.push(name);
    }
  });
  return sorted;
};

module.exports = worker;
