describe('CountryCtrl', function(){
    beforeEach(module('ccApp'));
    var ctrl;
    var scope;
    var location;
    
    beforeEach(inject(function($controller, $rootScope, $location){
        location = $location;
        scope = $rootScope.$new();
        ctrl = $controller('CountryCtrl', {
            $scope: scope
        });
    }));
    it('should change route to root via goHome function', function(){
        console.log('country tests');
        scope.goHome();
        expect(location.path()).toBe('/');
    });
    it('should change route to countries via countries function', function(){
        scope.countries();
        expect(location.path()).toBe('/countries');
    })
})