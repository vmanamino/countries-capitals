describe('countryInfo', function(){
    beforeEach(module('library'));
    var countryInfo;
    var land = function(){
        var country = {
        name: '', 
        pop: '', 
        area: '', 
        capital: '', 
        code: '', 
        capPop: '', 
        numNeigh: 0, 
        neighbors: [  ]
        };
        return country;
    };
    
    it('should return an empty country object', function(){
        inject(function(countryInfo){
            // console.log(countryInfo);
            expect(countryInfo).toEqual(({ name: '', pop: '', area: '', capital: '', code: '', capPop: '', numNeigh: 0, neighbors: [  ] }));
        });
    });
});

describe('getCountries', function(){
    beforeEach(module('library'));
    it('should return success', function(){
        inject(function(getCountries, $rootScope, $httpBackend){
            $httpBackend.expect('GET', 'http://api.geonames.org/countryInfoJSON?username=vman').respond(200);
            var status = false;
            getCountries.countriesObject.then(function(){
                status = true;
            });
            $rootScope.$digest();
            $httpBackend.flush();
            expect(status).toBe(true);
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
});

describe('getCountry', function(){
   beforeEach(module('library'));
   it('should return success', function(){
       inject(function(getCountry, $rootScope, $httpBackend){
           $httpBackend.expect('GET', 'http://api.geonames.org/countryInfoJSON?country=2921044&username=vman').respond(200); 
           var status = false;
           getCountry(2921044).then(function(){
              status = true; 
           });
           $rootScope.$digest();
           $httpBackend.flush();
           expect(status).toBe(true);
       }); 
   });
});

describe('getNeighbors', function(){
    beforeEach(module('library'));
    it('should return success', function(){
        inject(function(getNeighbors, $rootScope, $httpBackend){
            $httpBackend.expect('GET', 'http://api.geonames.org/neighboursJSON?geonameId=2921044&username=vman').respond(200);
            var status = false;
            getNeighbors(2921044).then(function(){
                status = true;
            });
            $rootScope.$digest();
            $httpBackend.flush();
            expect(status).toBe(true);
            $httpBackend.verifyNoOutstandingRequest;
        });
    });
})

describe('buildCountry', function(){
    beforeEach(module('library'));
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
    var neighbors = {
        "data": { "geonames": [{"name": "liberland"}, {"name" : "nueva germania"}] }
    };
    
    var country = {
        name: 'Germany',
        pop: '81802257',
        area: '357021.0',
        capital: 'Berlin',
        code: 'DE',
        capPop: '',
        numNeigh: neighbors.data.geonames.length,
        neighbors: neighbors.data.geonames
    };
    
    it('should create countryInfo object', function(){
        inject(function(buildCountry, countryInfo){
            buildCountry(geocountry, neighbors);
            expect(countryInfo).toEqual(country);
        });
    });
})