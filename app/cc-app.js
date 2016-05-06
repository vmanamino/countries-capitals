angular.module('ccApp', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider) {
    $routeProvider.when('/',
      { templateUrl : './home/home.html',
      
      });
  });
  
