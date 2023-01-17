class Robot {


    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

}

class Rover extends Robot {

    compass = ['N','E','S','W'];

    constructor(x, y, direction = 'N') {
        super(x, y);

        this.direction = direction
    }

    moveRover(stringOfLetters) {
        // need to loop over letters and call findDirection function or another one to move
        stringOfLetters.split('').forEach(letter => {
            if (letter === 'M') {
                this.#move();
            } else {
                this.#switchDirection(letter);
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

    // need to tell me where the final location is
    logCurrentLocation() {
        console.log(`I am currently located at x:${this.x}, y:${this.y} and facing ${this.direction}`);
    }
    
}
// TODO add class that can create many rovers and keep them in a list,
// Add a battery life to the rovers, and a recharging station
// add obstacles to the grid
// make the grid smaller and bigger
// 

class marsRover {

    constructor() {
        this.list = [];
    }

    addRover(xPos, yPos, direction) {
        const rover = new Rover(xPos, yPos, direction);
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
const roverSquad = new marsRover();
roverSquad.addRover(3,3, 'E');
roverSquad.moveRover('MMRMMRMRRM');
roverSquad.addRover(1,1,'W');
roverSquad.moveRover('MLMMMLMMRM');

roverSquad.addRover();
roverSquad.getFinalPosition();


module.exports = {Robot, Rover, marsRover};