angular.module('ccApp')
  .controller('HomeCtrl', ['$scope', '$location', 'getCountries', 'countriesCache', '$q',
  '$timeout',
      function($scope, $location, getCountries, countriesCache, $q, $timeout){
        
      var cache = countriesCache;
      
      // var wait = function(){
      //   var q = $q.defer();
      //   $timeout(function(){
      //     q.resolve();
      //   }, 2000);
      //   return q.promise;
      // };
      
      $scope.countries = function() {
          console.log('time that countries is called and assigned value');
          var timecountriescalled = new Date();
          console.log(timecountriescalled.getMilliseconds());
          $location.path('/countries');
          // wait().then(function(){
          //   $location.path('/countries');
          // });
      }; 
  }]);