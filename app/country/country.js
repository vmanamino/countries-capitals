angular.module('ccApp')
  .controller('CountryCtrl', ['$scope', '$location', 'countryInfo', 'getNeighbors', 'getCountry', 'buildCountry', '$routeParams',
  '$q',
      function($scope, $location, countryInfo, getNeighbors, getCountry, buildCountry, $routeParams, $q){
      $scope.country = countryInfo;
     
      $scope.toCountry = function(neighbor){
        
          var geocountry = '';
          var neighbors = '';
          var one = $q.defer();
          var two = $q.defer();
          
          getCountry(neighbor.countryCode).then(function(response){
              geocountry = response.data.geonames[0];
              one.resolve(geocountry);
          }),
          function(response){
              one.reject('country was not able to be retrieved');
          }; 
          
          getNeighbors(neighbor.geonameId).then(function(response){
              neighbors = response;
              two.resolve(neighbors);
          }),
          function(response){
              two.reject('neighbors not got');
          };
          
          var all = $q.all([one.promise, two.promise]);
          all.then(function(data){
              console.log('promises');
              console.log(data);
              var country = data[0];
              var countryNeighbors = data[1];
              buildCountry(country, countryNeighbors);
          });
          
          console.log(countryInfo);
          $scope.country = countryInfo;
      };
      $scope.goHome = function(){
        $location.path('/');
      };
      $scope.countries = function(){
        $location.path('/countries');
      };
  }]);