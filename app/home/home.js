angular.module('ccApp')
  .controller('HomeCtrl', ['$scope', '$location', 'getCountries', 'countriesCache', '$q',
  '$timeout',
      function($scope, $location, getCountries, countriesCache, $q, $timeout){
      
      $scope.countries = function() {
          $location.path('/countries');
      }; 
  }]);