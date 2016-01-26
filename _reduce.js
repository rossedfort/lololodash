var _ = require("lodash")

var worker = function(orders) {
  var totals = [];
  grouped = _.groupBy(orders, 'article');

  _.forEach(grouped, function(order, article){
    totalOrders = 0;
    if (order.length === 1) {
      total = order[0].quantity;
    } else {
      total = _.reduce(order, function(sum, order){
        return sum + order.quantity;
      }, 0);
    }
    totals.push({article: parseInt(article), total_orders: total})
  });
  return totals.reverse();
}

module.exports = worker;
