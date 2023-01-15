class Robot {

    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

}

class Rover extends Robot {

    direction = 'N';

    constructor(x, y, direction) {
        super(x, y);

        this.direction = direction
    }

    // do something
    
}

module.exports = Robot;
module.exports = Rover;

const Timmy = new Rover(0, 0, 'N');
console.log(Timmy);