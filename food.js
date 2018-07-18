class Food {

    constructor() {
        this.x = this.getFoodPosition(canvas.width, segmentWidth);
        this.y = this.getFoodPosition(canvas.height, segmentHeight);
        this.width = segmentWidth;
        this.height = segmentHeight;
        this.color = "#ff0000";
    }

    getFoodPosition(canvasWidth, segmentWidth) {
        return Math.floor(Math.random() * (canvasWidth / segmentWidth)) * segmentWidth;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    snakeEatFood(segmentX, segmentY) {
        if(this.x == segmentX && this.y == segmentY) {
            return true;
        }
    }

    foodUnderSnake() {
        for(let i = 0; i < snake.segmentList.length; i++) {
            if(this.x == snake.segmentList[i].x && this.y == snake.segmentList[i].y) {
                console.log("UUUUPS");
                return true;
            }
        }
        return false;
    }

}