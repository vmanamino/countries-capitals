angular.module('ccApp')
  .controller('HomeCtrl', ['$scope', '$location', 'getCountries', 'countriesCache', 
      function($scope, $location, getCountries, countriesCache){
        
      var cache = countriesCache;
      $scope.countries = function() {
          $location.path('/countries');
          if (!cache.get("called")){
              getCountries.then(function(response){
                  console.log($scope.geocountries);
                  cache.put('called', response.data.geonames);
              }),
              function(response){
                  alert("Error");
              };
          }
      }; 
  }]);