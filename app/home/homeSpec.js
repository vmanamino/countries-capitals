describe('HomeCtrl', function(){
    console.log("home ctrl test");
    beforeEach(module('ccApp'));
    var ctrl;
    var scope;
    var location;
    
    beforeEach(inject(function($controller, $rootScope, $location){
        location = $location;
        scope = $rootScope.$new();
        ctrl = $controller('HomeCtrl', {
            $scope: scope
        });
    }));
    it('should change route path via countries function', function(){
        console.log("test scope function");
        scope.countries();
        expect(location.path()).toBe('/countries');
    });
})