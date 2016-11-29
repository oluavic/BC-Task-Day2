var chai = require('chai');
var expect = chai.expect;
var myapp=require('../app/MMapp.js');

describe("MaxMinTest functionality", function() {
    it('input file exist', function() {
        expect(myapp).to.not.be.undefined;
    });
    it("Check for valid input", function() {
        var expectedList = 'Invalid Input';
        expect(myapp.find_max_min(4)).to.eql(expectedList);
    });
    it("should return [1,4] for [1, 2, 3, 4]", function() {
        var expectedList = [1, 4];
        expect(myapp.find_max_min([1, 2, 3, 4])).to.eql(expectedList);
    });
    it("should return [4, 6] for [6, 4]", function() {
        var expectedList = [4, 6];
        expect(myapp.find_max_min([6, 4])).to.eql(expectedList);
    });
    it("should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]", function() {
        var expectedList = [2, 78];
        expect(myapp.find_max_min([4, 66, 6, 44, 7, 78, 68, 2, 8])).to.eql(expectedList);
    });
    it("should return [1,4] for [1, 2, 3, 4]", function() {
        var expectedList = [1, 4];
        expect(myapp.find_max_min([1, 2, 3, 4])).to.eql(expectedList);
    });
    it("Return the number of elements in the list in a new list if the `min` and `max` are equal", function() {
        var expectedList = [4];
        expect(myapp.find_max_min([4, 4, 4, 4])).to.eql(expectedList);
    });
});
