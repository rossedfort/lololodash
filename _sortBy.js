var _ = require("lodash");

var worker = function(data) {
  return _.sortBy(data, 'quantity').reverse()
};

module.exports = worker;
