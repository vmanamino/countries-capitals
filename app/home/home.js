angular.module('ccApp')
  .controller('HomeCtrl', ['$scope', '$location', 'getCountries', 'countriesCache', '$q',
  '$timeout',
      function($scope, $location, getCountries, countriesCache, $q, $timeout){
        
      var cache = countriesCache;
      
      $scope.countries = function() {
          console.log('time that countries is called and assigned value');
          var timecountriescalled = new Date();
          console.log(timecountriescalled.getMilliseconds());
          $location.path('/countries');
      }; 
  }]);