var chai = require('chai');
var expect = chai.expect;
var myapp=require('./mycliapp.js');
describe("API functionality", function() {
    it('input file exist', function() {
        expect(myapp).to.not.be.undefined;
    });
    it("Check for  input", function() {
        var expected = 'Alhaji Salisu St, Lagos, Nigeria';
        expect(myapp.getAddress()).to.eql(expected);
    });
});