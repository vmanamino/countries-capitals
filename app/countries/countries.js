angular.module('ccApp')
  .controller('CountriesCtrl', ['$scope', '$routeParams', '$location','countryInfo', 'getCountries', 'countriesCache', 'getNeighbors', 
  'buildCountry', '$timeout', '$q',
        function($scope, $routeParams, $location, countryInfo, getCountries, countriesCache, getNeighbors, 
        buildCountry, $timeout, $q){
        getCountries.countriesObject.then(function(response){
            console.log("get countries!");
            console.log(response.data.geonames);
            $scope.geocountries = response.data.geonames;
        },
        function(response){
            alert("error");
        });
        
        var timeforcache = new Date();
        
        // console.log('time that cache is loaded to page');
        // console.log(timeforcache.getMilliseconds());
        
        // var cache = countriesCache;
        // $scope.geocountries = cache.get('called');
        
        // console.log("above func");
        // console.log($routeParams);
        
        $scope.toCountry = function(geocountry){
            getNeighbors(geocountry.geonameId)
            .then(function(response){
                buildCountry(geocountry, response);
                var path = '/countries/'+countryInfo.name+'/capital';
                $location.path(path);
            }),
            function(response){
                alert('Error');
            };
        };
        $scope.goHome = function(){
        $location.path('/');
        };
        
    //     console.log("countries path");
    //   console.log($routeParams);
  }]);