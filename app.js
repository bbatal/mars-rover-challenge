const environment = {
    obstacles: [[0,4], [3, 2], [5, 4]],
    chargingStation: [[3,5]]
}

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
                if(this.checkBounds() && this.checkObstacles(this.x + 1, this.y + 1)) {
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
            this.crashed('Out of Bounds')
            return false;
        } return true;
    }

    checkObstacles(x, y) {
        environment.obstacles.forEach(obstacle => {
            const [xPos, yPos] = obstacle;
            if (xPos === x && yPos === y) {
                this.crashed('obstacle');
                return false;
            }
        }) 
        return true;
    }

    // need to tell me where the final location is
    logCurrentLocation() {
        console.log(`I am currently located at x:${this.x}, y:${this.y} and facing ${this.direction} and my battery charge is ${this.battery}`);
    }

    crashed(reason) {
        console.log(`the rover has stopped due to ${reason} in it's way`);
    }
    
}
// TODO - add object of obstacles and recharging station
// TODO - have the rover know how far it is from a recharging station
// TODO - make function to allow the rover to go to recharging station automatically

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
roverSquad.moveRover('RMMMRMMMMM');

roverSquad.addRover(0,0,'N');
roverSquad.moveRover('MMMM');
roverSquad.getFinalPosition();


module.exports = {Robot, Rover, marsRover};