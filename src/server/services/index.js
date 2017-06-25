'use strict';
const authentication = require('./authentication');
const user = require('./user');
const graphql = require('./graphql/graphql.service.js');
const tag = require('./tag/tag.service.js');

module.exports = function() {
  const app = this;

  app.configure(authentication);
  app.configure(user);
  app.configure(tag);
  app.configure(graphql);
};
