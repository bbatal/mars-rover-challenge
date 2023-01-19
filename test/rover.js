let expect = require("chai").expect;
let {Robot, Rover, marsRover } = require("../app");

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

    it('Should stop before obstacle and call crashed function', () => {
        // Rover position should be 0 0 N
        // obstacle is located at 0 4
        const TomRover = new Rover();
        // Rover should encounter obstacle at 0 4 and stop at 0 3
        TomRover.moveRover('MMMM');
        expect(TomRover).to.have.property('x', 0);
        expect(TomRover).to.have.property('y', 3);
    })

    // it(`Should have direction of W when inputting 'L' to findDirection function`, () => {
    //     const TomRover = new Rover(0, 0, 'N');
    //     TomRover.findDirection('L');
    //     expect(TomRover).to.have.property('direction', 'W');
    // })

    it('Should have output of 1 3 N with input of 1 2 N and LMLMLMLMM', () => {
        const TomRover = new Rover(1, 2, 'N');
        TomRover.moveRover('LMLMLMLMM');
        expect(TomRover).to.have.property('x', 1);
        expect(TomRover).to.have.property('y', 3);
        expect(TomRover).to.have.property('direction', 'N');
    })

    it('Should have output of 5 1 E with input of 3 3 E and MMRMMRMRRM', () => {
        const TomRover = new Rover(3, 3, 'E');
        TomRover.moveRover('MMRMMRMRRM');
        expect(TomRover).to.have.property('x', 5);
        expect(TomRover).to.have.property('y', 1);
        expect(TomRover).to.have.property('direction', 'E');
    })

    describe('marsRover class', () => {
        it('should add 3 rovers if addRover function is called 3 times', () => {
            const roverTeam = new marsRover();
            let listArr = roverTeam.list;
            roverTeam.addRover();
            roverTeam.addRover();
            roverTeam.addRover();
            
            expect(roverTeam).to.have.property('list');
            expect(listArr).to.have.length(3);
        })
    })

})