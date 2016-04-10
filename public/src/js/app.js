'use strict';
//Entry point for meanApp

var app = angular.module('meanApp', [
    'ngRoute',
    'Templates',
    'ngMask',
    'Services',
    'Controllers',
    'Directives'
]);

angular.module('Services', []);
angular.module('Controllers', ['Services']);
angular.module('Directives', ['Directives']);
