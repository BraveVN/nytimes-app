var angular = require('angular');

require('angular-ui-router');
require('angular-material');
require('angular-material/angular-material.css');
require('angular-messages');
require('./app/services');

var home = require('./app/home');
var routesConfig = require('./routes');
var constants = require('./app/config/app.constants');

require('./index.scss');

var app = 'app';
module.exports = app;

const dependencies = [
  'ui.router',
  'ngMaterial',
  'ngMessages',
  'app.services'
];

angular
  .module(app, dependencies)
  .config(routesConfig)
  .constant('AppConstants', constants)
  .component('app', home);
