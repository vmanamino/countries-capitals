angular.module('ccApp')
  .controller('CountryCtrl', ['$scope', '$location', 'countryInfo', 'getNeighbors', 'getCountry', 'buildCountry', '$routeParams',
  '$q',
      function($scope, $location, countryInfo, getNeighbors, getCountry, buildCountry, $routeParams, $q){
      $scope.country = countryInfo;
      var geocountry = '';
      var countryGot = function(neighbor) {
        var q = $q.defer();
        getCountry(neighbor.countryCode).then(function(response){
              geocountry = response.data.geonames[0];
              q.resolve(geocountry);
          }),
          function(response){
              q.reject('country was not able to be retrieved');
          }; 
          return q.promise;
      };
      
      $scope.toCountry = function(neighbor){
          var neighbors = '';
          getNeighbors(neighbor.geonameId).then(function(response){
              neighbors = response;
          }),
          function(response){
              alert('Error');
          };
          countryGot(neighbor).then(
              function(country){
                  console.log(country);
                  buildCountry(country, neighbors);
              },
              function(error){
                  console.log('error');
                  return error;
          });
          $scope.country = countryInfo;
      };
      $scope.goHome = function(){
        $location.path('/');
      };
      $scope.countries = function(){
        $location.path('/countries');
      };
  }]);