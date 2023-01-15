class Robot {

    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    introduceSelf() {
        console.log(`Hi I am located at ${x, y}`);
    }
}

module.exports = Robot;