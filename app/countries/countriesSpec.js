describe('CountriesCtrl', function(){
    
    var ctrl;
    var scope;
    var location;
    var httpBackend;
    var getNeighbors;
    var buildCountry;
    var geocountry = {
        countryName: "Germany",
        currencyCode: "EUR",
        fipsCode: "GM",
        countryCode: "DE",
        isoNumeric: "276",
        north: 55.055637,
        capital: "Berlin",
        continentName: "Europe",
        areaInSqKm: "357021.0",
        languages: "de",
        isoAlpha3: "DEU",
        continent: "EU",
        south: 47.275776,
        east: 15.039889,
        geonameId: 2921044,
        west: 5.865639,
        population: "81802257"
    };
    
    beforeEach(module('ccApp'));
    
    // beforeEach(module('ccApp', function($provide){
    //     buildCountry = jasmine.createSpyObj('buildCountry');
        
    //     buildCountry(geocountry).andReturn({
    //         name: geocountry.countryName,
    //         pop: geocountry.population,
    //         area: geocountry.areaInSqKm,
    //         capital: geocountry.capital,
    //         code: geocountry.countryCode,
    //         capPop: '',
    //         numNeigh: 3,
    //         neighbors: ['neighbor1', 'neighbor2', 'neighbor3']
    //     });
        
    //     $provide.value('buildCountry', buildCountry);
    // }));
    
    
    beforeEach(inject(function($controller, $rootScope, $location, $httpBackend, getNeighbors, _buildCountry_){
        buildCountry = _buildCountry_;
        getNeighbors = getNeighbors;
        httpBackend = $httpBackend;
        httpBackend.when(getNeighbors(geocountry.geonameId)).respond('success');
        location = $location;
        scope = $rootScope.$new();
        ctrl = $controller('CountriesCtrl', {
            $scope: scope
        });
    }));
    xit('should change location path via function toCountry', function(){
        console.log(location.path());
        scope.toCountry(geocountry);
        console.log(location.path());
        expect(location.path()).toBe('/countries/country/capital');
    });
    it('should change route path via goHome function', function(){
        console.log(location.path());
        scope.goHome();
        expect(location.path()).toBe('/');
    });
})