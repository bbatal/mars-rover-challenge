let expect = require("chai").expect;
let Robot = require("../app");
let Rover = require("../app");

describe("Robot Class", function() {
    it("should be a function", function() {
        const rover = new Robot(0, 0);
        expect(Robot).to.be.a('function');
    })

    it("should be an instance of Robot", function() {
        const rover = new Robot(0, 0);
        expect(rover).to.be.an.instanceOf(Robot);
    })

    it('should be at 0,0 if argument is 0,0', function() {
        const rover = new Robot(0,0);
        expect(rover).to.have.property('x', 0);
        expect(rover).to.have.property('y', 0);
    })
})

describe("Rover Class", function() {
    it("should be a function", function() {
        const TomRover = new Rover();
        expect(Rover).to.be.a('function');
    })

    it("should be at certain x,y location based on the argument", function() {
        const TomRover = new Rover(2,2);
        expect(TomRover).to.have.property('x', 2);
        expect(TomRover).to.have.property('y', 2);
    })

    it('should face direction of third argument', function(){
        const TomRover = new Rover(0,0,'S');
        expect(TomRover).to.have.property('direction', 'S');
    })
})