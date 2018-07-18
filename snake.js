
// var segmentList = [];
let currentDirection = "ArrowRight";
let newDirection = "ArrowRight";

class Snake {

    constructor (size, ctx) {
        this.ctx = ctx;
        this.size = size;
        this.segmentList = [];
    }

    draw() {
        for(let i = 0; i < this.segmentList.length; i++) {
            ctx.fillStyle = this.segmentList[i].color;
            ctx.fillRect(this.segmentList[i].x, this.segmentList[i].y, this.segmentList[i].width, this.segmentList[i].height);
        }
    }

    chainMotion() {
        let j = 0;
        for(let i = this.segmentList.length - 1; i > 0; i--) {
            j = i - 1;
            this.segmentList[i].x = this.segmentList[j].x;
            this.segmentList[i].y = this.segmentList[j].y;
        }
    }

    gameOwer() {
        for(let i = 1; i < this.segmentList.length; i++) {
            if(this.segmentList[0].x == this.segmentList[i].x && this.segmentList[0].y == this.segmentList[i].y){
                return true;
            }
        }
        return false;
    }

    needToMove(distanse) {
        if(distanse >= this.segmentList[0].width) {

            this.chainMotion();

            if((newDirection == "ArrowRight" && currentDirection != "ArrowLeft") || (currentDirection == "ArrowRight" && newDirection == "ArrowRight")) {
                this.mooveRight();
                currentDirection = newDirection;
            }
            if((newDirection == "ArrowDown" && currentDirection != "ArrowUp") || (currentDirection == "ArrowDown" && newDirection == "ArrowDown")) {
                this.mooveDown();
                currentDirection = newDirection;
            }
            if((newDirection == "ArrowLeft" && currentDirection != "ArrowRight") || (currentDirection == "ArrowLeft" && newDirection == "ArrowLeft")) {
                this.mooveLeft();
                currentDirection = newDirection;
            }
            if((newDirection == "ArrowUp" && currentDirection != "ArrowDown") || (currentDirection == "ArrowUp" && newDirection == "ArrowUp")) {
                this.mooveUp();
                currentDirection = newDirection;
                
            }

            if(newDirection == "ArrowRight" && currentDirection == "ArrowLeft") {
                this.mooveLeft();
            }             
            if(newDirection == "ArrowDown" && currentDirection == "ArrowUp") {
                this.mooveUp();
            }
            if(newDirection == "ArrowLeft" && currentDirection == "ArrowRight") {
                this.mooveRight();
            }
            if(newDirection == "ArrowUp" && currentDirection == "ArrowDown") {
                this.mooveDown();
            }

            return true;

        }

        return false;
    }

    createNewSegment(x, y, color) {
        let newSegment = new Segment (x, y, color, segmentWidth, segmentHeight);
        this.segmentList.push(newSegment);
    }

    changeDirection(keyCode) {
        if (keyCode == "ArrowLeft") {
            newDirection = "ArrowLeft";
        }
        if (keyCode == "ArrowRight") {
            newDirection = "ArrowRight";
        }
        if (keyCode == "ArrowUp") {
            newDirection = "ArrowUp";
        }
        if (keyCode == "ArrowDown") {
            newDirection = "ArrowDown";
        }
    }

    mooveRight() {
        this.segmentList[0].x = this.segmentList[0].x + this.segmentList[0].width;
        if(this.segmentList[0].x >= canvas.width) {
            this.segmentList[0].x = 0;
        }
    }

    mooveDown() {
        this.segmentList[0].y = this.segmentList[0].y + this.segmentList[0].height;
        if(this.segmentList[0].y >= canvas.height) {
            this.segmentList[0].y = 0;
        }
    }

    mooveLeft() {
        this.segmentList[0].x = this.segmentList[0].x - this.segmentList[0].width;
        if(this.segmentList[0].x < 0) {
            this.segmentList[0].x = (canvas.width - segmentWidth);
        }
    }

    mooveUp() {
        this.segmentList[0].y = this.segmentList[0].y - this.segmentList[0].width;
        if(this.segmentList[0].y < 0) {
            this.segmentList[0].y = (canvas.height - segmentHeight);
        } 
    }

}    

document.addEventListener('keydown', function(keyCode) {
    console.log(keyCode.code);
    snake.changeDirection(keyCode.code);
});





