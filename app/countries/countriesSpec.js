// module(function($provide) { 
//     $provide.service('demoService', function() { 
//         this.isDemoApi = jasmine.createSpy('isDemoApi'); 
//     }); 
// });

var mockDemoSvc;

describe('ccApp', function(){
    beforeEach(module('ccApp'));
    describe('CountriesCtrl', function(){
        var ctrl, scope, location, status, httpBackend, getLaender;
        beforeEach(inject(function($controller, $rootScope, $location, $httpBackend, getCountries){
            httpBackend = $httpBackend;
            getLaender = getCountries;
            location = $location;
            scope = $rootScope.$new();
            ctrl = $controller('CountriesCtrl', {
                $scope: scope
            });
        }));
        // it('should getCountries', function(){
        //     var neighbors = {
        //         "data": { "geonames": [{"name": "liberland"}, {"name" : "nueva espana"}] }
        //     };
        //     httpBackend.expect('GET', 'http://api.geonames.org/countryInfoJSON?username=vman').respond(neighbors);
        //     status = false;
        //     getLaender.countriesObject.then(function(){
        //         status = true;
        //     });
        //     // scope.geocountries = 'countriesGot';
        //     scope.$digest();
        //     httpBackend.flush();
        //     expect(status).toBe(true);
        //     // expect(scope.geocountries.length).toBe(2);
        //     httpBackend.verifyNoOutstandingRequest();
        // })
        it('should go to root via goHome vunction', function(){
            scope.goHome();
            expect(location.path()).toEqual('/');
        });
    });
})