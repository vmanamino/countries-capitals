describe('ccApp', function(){
    beforeEach(module('ccApp'));
    
    describe('route to root', function(){
        it('should load the template and controller', function(){
            inject(function($location, $rootScope, $httpBackend, $route) {
                $httpBackend.whenGET('./home/home.html').respond('...');
                $rootScope.$apply(function(){
                   $location.path('/'); 
                });
                $httpBackend.flush();
                expect($route.current.controller).toBe('HomeCtrl');
                expect($route.current.loadedTemplateUrl).toBe('./home/home.html');
                $httpBackend.verifyNoOutstandingRequest();
                $httpBackend.verifyNoOutstandingExpectation();
            });   
        }); 
    });
    
    describe('route to countries', function(){
        it('should load the template and controller', function(){
            inject(function($location, $rootScope, $httpBackend, $route){
                $httpBackend.whenGET('./countries/countries.html').respond('...');
                $rootScope.$apply(function(){
                    $location.path('/countries');
                });
                $httpBackend.flush();
                expect($route.current.controller).toBe('CountriesCtrl');
                expect($route.current.loadedTemplateUrl).toBe('./countries/countries.html');
                $httpBackend.verifyNoOutstandingRequest();
                $httpBackend.verifyNoOutstandingExpectation();
            });
        });
    });
    
    describe('route to country', function(){
        it('should load the template and controller', function(){
            inject(function($location, $rootScope, $httpBackend, $route){
                $httpBackend.whenGET('./country/country.html').respond('...');
                $rootScope.$apply(function(){
                    $location.path('/countries/:country/capital');    
                });
                $httpBackend.flush();
                expect($route.current.controller).toBe('CountryCtrl');
                expect($route.current.loadedTemplateUrl).toBe('./country/country.html');
                $httpBackend.verifyNoOutstandingRequest();
                $httpBackend.verifyNoOutstandingExpectation();
            });
        });
    });
})