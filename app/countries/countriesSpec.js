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
    var neighbors = {"totalResultsCount":9,"geonames":[{"adminCode1":"00","lng":"13.33333","geonameId":2782113,"toponymName":"Republic of Austria","countryId":"2782113","fcl":"A","population":8205000,"countryCode":"AT","name":"Austria","fclName":"country, state, region,...","countryName":"Austria","fcodeName":"independent political entity","adminName1":"","lat":"47.33333","fcode":"PCLI"},{"adminCode1":"00","lng":"4.5","geonameId":2802361,"toponymName":"Kingdom of Belgium","countryId":"2802361","fcl":"A","population":10403000,"countryCode":"BE","name":"Belgium","fclName":"country, state, region,...","countryName":"Belgium","fcodeName":"independent political entity","adminName1":"","lat":"50.75","fcode":"PCLI"},{"adminCode1":"00","lng":"15","geonameId":3077311,"toponymName":"Czech Republic","countryId":"3077311","fcl":"A","population":10476000,"countryCode":"CZ","name":"Czechia","fclName":"country, state, region,...","countryName":"Czech Republic","fcodeName":"independent political entity","adminName1":"","lat":"49.75","fcode":"PCLI"},{"adminCode1":"00","lng":"10","geonameId":2623032,"toponymName":"Kingdom of Denmark","countryId":"2623032","fcl":"A","population":5484000,"countryCode":"DK","name":"Denmark","fclName":"country, state, region,...","countryName":"Denmark","fcodeName":"independent political entity","adminName1":"","lat":"56","fcode":"PCLI"},{"adminCode1":"00","lng":"2","geonameId":3017382,"toponymName":"Republic of France","countryId":"3017382","fcl":"A","population":64768389,"countryCode":"FR","name":"France","fclName":"country, state, region,...","countryName":"France","fcodeName":"independent political entity","adminName1":"","lat":"46","fcode":"PCLI"},{"adminCode1":"00","lng":"6.16667","geonameId":2960313,"toponymName":"Grand Duchy of Luxembourg","countryId":"2960313","fcl":"A","population":497538,"countryCode":"LU","name":"Luxembourg","fclName":"country, state, region,...","countryName":"Luxembourg","fcodeName":"independent political entity","adminName1":"","lat":"49.75","fcode":"PCLI"},{"adminCode1":"00","lng":"5.75","geonameId":2750405,"toponymName":"Kingdom of the Netherlands","countryId":"2750405","fcl":"A","population":16645000,"countryCode":"NL","name":"Netherlands","fclName":"country, state, region,...","countryName":"Netherlands","fcodeName":"independent political entity","adminName1":"","lat":"52.25","fcode":"PCLI"},{"adminCode1":"00","lng":"20","geonameId":798544,"toponymName":"Republic of Poland","countryId":"798544","fcl":"A","population":38500000,"countryCode":"PL","name":"Poland","fclName":"country, state, region,...","countryName":"Poland","fcodeName":"independent political entity","adminName1":"","lat":"52","fcode":"PCLI"},{"adminCode1":"00","lng":"8.01427","geonameId":2658434,"toponymName":"Switzerland","countryId":"2658434","fcl":"A","population":7581000,"countryCode":"CH","name":"Switzerland","fclName":"country, state, region,...","countryName":"Switzerland","fcodeName":"independent political entity","adminName1":"","lat":"47.00016","fcode":"PCLI"}]}
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
    
    module(function($provide) { 
        $provide.service('demoService', function() { 
            this.isDemoApi = jasmine.createSpy('isDemoApi');
        });
    });
    
    var mockDemoSvc;
    
    inject(function(demoService) {
        mockDemoSvc = demoService;
    });
    
    beforeEach(inject(function($controller, $rootScope, $location, $httpBackend, getNeighbors, _buildCountry_){
        buildCountry = _buildCountry_;
        getNeighbors = getNeighbors;
        httpBackend = $httpBackend;
        var mocklist = {key: ''};
        httpBackend.expect('http://my_app.org/').respond(200, mocklist);
        location = $location;
        scope = $rootScope.$new();
        ctrl = $controller('CountriesCtrl', {
            $scope: scope
        });
    }));
    xit('should change location path via function toCountry', function(){
        console.log(location.path());
        scope.toCountry(geocountry);
        httpBackend.flush();
        console.log(location.path());
        expect(location.path()).toBe('/countries/country/capital');
    });
    it('should change route path via goHome function', function(){
        console.log(location.path());
        scope.goHome();
        expect(location.path()).toBe('/');
    });
})