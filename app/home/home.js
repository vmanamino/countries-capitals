angular.module('ccApp')
  .controller('HomeCtrl', ['$scope', '$location', 'getCountries', 'countriesCache', 
      function($scope, $location, getCountries, countriesCache){
        
      var cache = countriesCache;
      $scope.countries = function() {
          console.log('time that countries is called and assigned value');
          var timecountriescalled = new Date();
          console.log(timecountriescalled.getMilliseconds());
          $location.path('/countries');
      }; 
  }]);