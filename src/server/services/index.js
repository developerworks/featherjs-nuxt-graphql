'use strict';
const authentication = require('./authentication');
const user = require('./user');
const graphql = require('./graphql/graphql.service.js');

module.exports = function() {
  const app = this;

  app.configure(authentication);
  app.configure(user);
  app.configure(graphql);
};
