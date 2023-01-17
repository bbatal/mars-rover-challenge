class Robot {

    battery;

    constructor(x = 0, y = 0, battery = 10) {
        this.x = x;
        this.y = y;
        this.battery = battery;
    }

}

class Rover extends Robot {

    compass = ['N','E','S','W'];

    constructor(x, y, direction = 'N', gridSize = {width: 5, height: 5}, battery) {
        super(x, y, battery);

        this.direction = direction
        this.grid = gridSize;
    }

    moveRover(stringOfLetters) {
        // need to loop over letters and call findDirection function or another one to move
        stringOfLetters.split('').forEach(letter => {
            if (letter === 'M') {
                if(this.checkBounds()) {
                    this.#move();
                }
                this.battery -= 1;
            } else if (letter === 'L' || letter === 'R') {
                this.#switchDirection(letter);
            } else if(this.battery === 0) {
                console.log("I am stuck please recharge me");
            }
        })
    }

    #switchDirection(turn) {
        let currentInd = this.compass.indexOf(this.direction);
        if (turn === 'L') {
            if (currentInd === 0) {
                currentInd = this.compass.length - 1;
                return this.direction = this.compass[currentInd];
            }
            this.direction = this.compass[currentInd - 1];
        } else if (turn === 'R') {
            if (currentInd === this.compass.length - 1) {
                currentInd = 0
                return this.direction = this.compass[currentInd];
            }
            this.direction = this.compass[currentInd + 1]
        }
    }

    #move() {
        switch(this.direction) {
            case 'N':
                this.y += 1;
                break;
            case 'E':
                this.x += 1;
                break;
            case 'S':
                this.y -= 1;
                break;
            case 'W':
                this.x -= 1;
                break;
        }
    }

    // checking if rover is out of bounds
    checkBounds() {
        if(this.x > this.grid.width || this.x < 0 || this.y > this.grid.height || this.y < 0) {
            console.log('Im sorry but the rover has crashed');
            return false;
        } return true;
    }

    // need to tell me where the final location is
    logCurrentLocation() {
        console.log(`I am currently located at x:${this.x}, y:${this.y} and facing ${this.direction} and my battery charge is ${this.battery}`);
    }
    
}
// TODO add class that can create many rovers and keep them in a list,
// Add a battery life to the rovers, and a recharging station
// add obstacles to the grid
// make the grid smaller and bigger
// 

class marsRover {

    constructor(width, height) {
        this.grid = {width, height}
        this.list = [];
    }

    addRover(xPos, yPos, direction) {
        const rover = new Rover(xPos, yPos, direction, this.grid);
        this.list.push(rover);
    }

    moveRover(instructions) {
        // gets the last rover pushed in and feeds it instructions
        this.list[this.list.length - 1].moveRover(instructions);
    }

    getFinalPosition() {
        this.list.forEach((individualRover) => {
            individualRover.logCurrentLocation();
        })
    }
}


// const Timmy = new Rover(3, 3, 'E');
// Timmy.moveRover('MMRMMRMRRM')
const roverSquad = new marsRover(10, 10);
roverSquad.addRover(3,3, 'E');
roverSquad.moveRover('MMRMMRMRRM');
roverSquad.addRover(1,1,'W');
roverSquad.moveRover('RMMMRMMM');

roverSquad.addRover(0,0,'N');
roverSquad.getFinalPosition();


module.exports = {Robot, Rover, marsRover};