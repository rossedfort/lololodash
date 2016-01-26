var _ = require("lodash");

var worker = function(freelancers) {
  freelancers = _.sortBy(freelancers, 'income')

  average = _.reduce(freelancers, function(sum, freelancer) {
    return sum + freelancer.income;
  }, 0);

  average = average / freelancers.length

  var underperform = _.filter(freelancers, function(freelancer) {
    return freelancer.income <= average;
  });

  var overperform = _.filter(freelancers, function(freelancer) {
    return freelancer.income > average;
  });

  return { average: average, underperform: underperform, overperform: overperform }
}

module.exports = worker;
