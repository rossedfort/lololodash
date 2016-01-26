var _ = require("lodash");

var worker = function(user){
  var loginCount = user.login.length

  return _.template('Hello <%= username %> (logins: <%= logins %>)')({ username: user.name, logins: loginCount });;
}

module.exports = worker;
