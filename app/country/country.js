angular.module('ccApp')
  .controller('CountryCtrl', ['$scope', '$location', 'countryInfo', 'getNeighbors', 'getCountry', 'buildCountry', '$routeParams',
      function($scope, $location, countryInfo, getNeighbors, getCountry, buildCountry, $routeParams){
      $scope.country = countryInfo;
      var geocountry = '';
      $scope.toCountry = function(neighbor){
        console.log("geocountry neighbor");
        console.log(neighbor);
        getCountry(neighbor.countryCode).then(function(response){
            geocountry = response.data.geonames[0];
        }),
        function(response){
          alert("error");
        };
        getNeighbors(neighbor.geonameId).then(function(response){
            buildCountry(geocountry, response);
            $scope.country = countryInfo;
        }),
        function(response){
          alert('Error');
        };
      };
      $scope.goHome = function(){
        $location.path('/');
      };
      $scope.countries = function(){
        $location.path('/countries');
      };
  }]);