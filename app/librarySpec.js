describe('countryInfo', function(){
    beforeEach(module('ccApp'));
    var countryInfo;
    var country = {name: '', pop: '', area: '', capital: '', code: '', capPop: '', numNeigh: 0, neighbors: [  ] };
    
    beforeEach(inject(function(_countryInfo_){
        countryInfo = _countryInfo_;
    }));
    it('should return country object with attributes', function(){
        console.log('hello library'); 
        console.log(country);
        expect(countryInfo).toBe(country); 
    });
    
})