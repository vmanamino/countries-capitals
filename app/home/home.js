angular.module('ccApp')
  .controller('HomeCtrl', ['$scope', '$location', 'getCountries', 'countriesCache', 
      function($scope, $location, getCountries, countriesCache){
        
      var cache = countriesCache;
      $scope.countries = function() {
          console.log('time that countries is called and assigned value');
          var timecountriescalled = new Date();
          console.log(timecountriescalled.getMilliseconds());
          $location.path('/countries');
          if (!cache.get("called")){
              getCountries.then(function(response){
                  console.log('time that cache is called and assigned value');
                  var timecachecalled = new Date();
                  console.log(timecachecalled.getMilliseconds());
                  console.log($scope.geocountries);
                  cache.put('called', response.data.geonames);
                  console.log('time that cache2 is called and assigned value');
                  var timecachecalled2 = new Date();
                  console.log(timecachecalled2.getMilliseconds());
              }),
              function(response){
                  alert("Error");
              };
          }
      }; 
  }]);