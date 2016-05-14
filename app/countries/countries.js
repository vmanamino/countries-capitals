angular.module('ccApp')
  .controller('CountriesCtrl', ['$scope', '$routeParams', '$location','countryInfo', 'getCountries', 'countriesCache', 'getNeighbors', 
  'buildCountry', '$timeout', '$q',
        function($scope, $routeParams, $location, countryInfo, getCountries, countriesCache, getNeighbors, 
        buildCountry, $timeout, $q){
            
        getCountries.countriesObject.then(function(response){
            $scope.geocountries = response.data.geonames;
        },
        function(response){
            alert("error");
        });
        
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
  }]);