angular.module('ccApp')
  .controller('CountryCtrl', ['$scope', '$location', 'countryInfo', 'getNeighbors', 'getCountry', 'buildCountry', '$routeParams', '$timeout',
      function($scope, $location, countryInfo, getNeighbors, getCountry, buildCountry, $routeParams, $timeout){
      $scope.country = countryInfo;
      var geocountry = '';
      $scope.toCountry = function(neighbor){
        var start = new Date();
        console.log('start');
        console.log(start.getMilliseconds());
        console.log("geocountry neighbor");
        console.log(neighbor);
        getCountry(neighbor.countryCode).then(function(response){
            geocountry = response.data.geonames[0];
            console.log('geocountry loaded');
            console.log(geocountry);
            var end = new Date();
            console.log('end');
            console.log(end.getMilliseconds());
            console.log('diff');
            var diff = end - start;
            console.log(diff);
        }),
        function(response){
          alert("error");
        };
        var timeOuter = new Date();
        console.log('time outer');
        // shows the geocountry is not loaded until later, this is the same time as outside the function
        // getNeighbors fires later than this time, so justifies timeout
        console.log(timeOuter.getMilliseconds());
        getNeighbors(neighbor.geonameId).then(function(response){
            console.log("geocountry");
            console.log(geocountry);
            $timeout(function(){
                buildCountry(geocountry, response);
            },200);
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