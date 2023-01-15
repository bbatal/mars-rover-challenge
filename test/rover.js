let expect = require("chai").expect;
let Robot = require("../app");

describe("Rover", function() {
    it("should be a function", function() {
        const rover = new Robot(0, 0);
        expect(Robot).to.be.a('function');
    })

    it("should be an instance of Robot", function() {
        const rover = new Robot(0, 0);
        expect(rover).to.be.an.instanceOf(Robot);
    })

    it('should be at 0,0 if argument is not listed', function() {
        const rover = new Robot(0,0);
        expect(rover).to.have.property('x', 0);
        expect(rover).to.have.property('y', 0);
    })
})