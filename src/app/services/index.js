var angular = require('angular');
var ArticlesService = require('./articles.service');

angular
  .module('app.services', [])
  .service('Articles', ArticlesService);
