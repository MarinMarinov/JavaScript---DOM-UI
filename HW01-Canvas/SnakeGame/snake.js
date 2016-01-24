var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    startX = 700,
    startY = 100,
    snakeHeadRadius = 6,
    snakeHead = new SnakeHead(startX, startY, snakeHeadRadius),
    roundAngle = 2 * Math.PI,
    snakeLength = 50,
    headX = [],
    headY = [],
    directions = {
        'up': -1,
        'down': 1,
        'left': -1,
        'right': 1
    },
    currentDirection = 'right',
    speed = 2,
    isPlaying = true;

ctx.strokeStyle = 'green';
ctx.fillStyle = 'yellow';
ctx.lineWidth = 2;

function play(){

    ctx.clearRect(0, 0 , canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(snakeHead.coordX, snakeHead.coordY, snakeHead.radius, 0, roundAngle);
    ctx.fill();
    ctx.stroke();
    headX.push(snakeHead.coordX);
    headY.push(snakeHead.coordY);
    extendSnake(snakeLength);
    /*ctx.fill();
    ctx.stroke();*/



    switch(currentDirection){
        case 'up': up(); break;
        case 'down': down(); break;
        case 'left': left(); break;
        case 'right': right(); break;
    }

    if(snakeHead.coordX > canvas.width || snakeHead.coordY > canvas.height || snakeHead.coordX < 0 || snakeHead.coordY < 0){
        var alert = 'Game over';
        ctx.font = '35px Consolas';
        ctx.strokeText(alert, 200, 200);
        isPlaying = false;
    }
    console.log('still recoursing');


    /*headX.push(snakeHead.coordX);
    headY.push(snakeHead.coordY);*/

    if(isPlaying){
        requestAnimationFrame(play);
    }
}

play();

function extendSnake(length){
    for(var i = 0; i < length; i += snakeHeadRadius){
        //ctx.strokeRect(headX[headX.length - i] - snakeHeadRadius, headY[headY.length - i] - snakeHeadRadius, snakeHeadRadius *2, snakeHeadRadius * 2);
        ctx.moveTo(headX[headX.length - i], headY[headY.length - i]);
        ctx.arc(headX[headX.length - i], headY[headY.length - i], snakeHeadRadius, 0, roundAngle);
        ctx.fill();
        ctx.stroke();
    }
}

function up(){
    moveVertical('up');
    currentDirection = 'up';
}

function down(){
    moveVertical('down');
    currentDirection = 'down';
}

function left(){
    moveHorizontal('left');
    currentDirection = 'left';
}

function right(){
    moveHorizontal('right');
    currentDirection = 'right';
}

function moveHorizontal(direction){
    snakeHead.coordX += directions[direction]* speed;
}

function moveVertical(direction){
    snakeHead.coordY += directions[direction]* speed;
}

function SnakeHead(coordX, coordY, radius){
    this.coordX = coordX;
    this.coordY = coordY;
    this.radius = radius;
}

function controls(event){
    switch(event.keyCode){
        case 37: left(); break;
        case 38: up(); break;
        case 39: right(); break;
        case 40: down(); break;
        case 27: alert('Game pause, press enter to resume'); break;
    }
}

function ready(){
    window.addEventListener('keydown', controls);
}