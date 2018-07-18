let segmentWidth = 25;
let segmentHeight = 25;
let segmentColor = "#009900";

class Segment {
    constructor (x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = segmentColor;
    }

    getColor() {
        let randomColor = Math.random() * 365;
        return "hsl("+ randomColor +" , 69%, 65%)"
    }
}