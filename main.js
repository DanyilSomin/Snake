
var canvas = document.getElementById("snake");
var ctx = canvas.getContext("2d");
let lastFrameTime = 0;
let size = 1;
let dstDivider = 3;
let distanse = 0;
let snake = new Snake(size, ctx);
snake.createNewSegment(100, 100, segmentColor);
snake.createNewSegment(75, 100, segmentColor);
let food = new Food();

function loop(timestamp) {
    let deltaTime = timestamp - lastFrameTime;
    lastFrameTime = timestamp;
    distanse = distanse + deltaTime/dstDivider;
    let snakeDie = false;

    if(snake.gameOwer()) {
        snakeDie = true;
    }

    if (snake.needToMove(distanse)) {
        distanse = 0;
    }

    if(food.snakeEatFood(snake.segmentList[0].x, snake.segmentList[0].y)) {
        let snakeLenth = snake.segmentList.length - 1;
        snake.createNewSegment(snake.segmentList[snakeLenth].x, snake.segmentList[snakeLenth].y, segmentColor, segmentWidth, segmentHeight);

        do {
            food = new Food();
        } while(food.foodUnderSnake())

    }

    this.ctx.clearRect(0, 0, 1000, 1000);
    food.draw();  
    snake.draw();
    if(!snakeDie) {
        window.requestAnimationFrame(loop);
    }
}

window.requestAnimationFrame(loop);
