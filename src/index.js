var angular = require('angular');

require('angular-ui-router');
require('../node_modules/angular-material');
require('../node_modules/angular-messages');

var hello = require('./app/hello');
var routesConfig = require('./routes');

require('./index.scss');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router', 'ngMaterial', 'ngMessages'])
  .config(routesConfig)
  .component('app', hello);
