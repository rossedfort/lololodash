var _ = require("lodash");

var worker = function(users) {
  return _.chain(users)
          .groupBy('username')
          .map(function(user, name) {
            return {username: name, comment_count: _.size(user)};
          })
          .sortBy(users, "comment_count")
          .reverse();
};

module.exports = worker;
