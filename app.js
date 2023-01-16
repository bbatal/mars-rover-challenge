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
    compass = ['N','E','S','W'];

    constructor(x, y, direction) {
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
    
}

module.exports = Robot;
module.exports = Rover;

const Timmy = new Rover(3, 3, 'E');
Timmy.moveRover('MMRMMRMRRM')
console.log(Timmy);