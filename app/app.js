require('angular');

// To improve to be more programatical later!
var MainController   = require('./controllers/MainController');
var StartsWithFilter = require('./filters/startsWith');

angular.module('app', []);

angular
  .module('app')
  .controller('MainController', MainController)
  .filter('startsWithLetter', StartsWithFilter);
