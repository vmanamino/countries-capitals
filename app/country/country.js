angular.module('ccApp')
  .controller('CountryCtrl', ['$scope', '$location', 'countryInfo', 'getNeighbors', 
  'getCountry', 'buildCountry', '$q',
      function($scope, $location, countryInfo, getNeighbors, getCountry, buildCountry, $q){
      $scope.country = countryInfo;
     
      $scope.toCountry = function(neighbor){
          var geocountry = '';
          var neighbors = '';
          var country = $q.defer();
          var countryNeighbors = $q.defer();
          
          getCountry(neighbor.countryCode).then(function(response){
              geocountry = response.data.geonames[0];
              country.resolve(geocountry);
          }),
          function(response){
              country.reject('country was not able to be retrieved');
          }; 
          
          getNeighbors(neighbor.geonameId).then(function(response){
              neighbors = response;
              countryNeighbors.resolve(neighbors);
          }),
          function(response){
              countryNeighbors.reject('neighbors not got');
          };
          
          
          var all = $q.all([country.promise, countryNeighbors.promise]);
          all.then(function(data){
              var land = data[0];
              var landNachbarn = data[1];
              buildCountry(land, landNachbarn);
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