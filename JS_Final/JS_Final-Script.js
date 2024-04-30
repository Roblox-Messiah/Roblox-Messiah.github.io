// define html elements
const board = document.getElementById('game-board')
const instructionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');
const score = document.getElementById('score');
const highScoreText = document.getElementById('highScore');

//define variables of game
const gridSize = 20;
let snake = [{x: 10, y:10}];
let food = generateFood();
let highScore = 0;
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;

//makes the map, snake, and food
function draw() {
    board.innerHTML = '';
    drawSnake();
    drawFood();
    updateScore();
}

//function that creates snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    })
}

//function that makes cube for snake/food div
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//set the snake or food position
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

//draw function test
//draw();

// function for drawing food
function drawFood() {
    if (gameStarted) {
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food)
    board.appendChild(foodElement);
    }
}

//food generation
function generateFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;

    for (let i = 1; i < snake.length; i++) {
        if (x === snake[i].x && y === snake[i].y) {
            generateFood();
        }
    }

    return {x, y};
}

//snake movement
function move() {
    const head = {...snake[0]}
    switch (direction) {
        case 'up':
            head.y--;
            break;
       case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }        
    
    snake.unshift(head);

    //snake.pop();

    if (head.x == food.x && head.y == food.y) {
        food = generateFood();
        increaseSpeed();
        clearInterval(gameInterval); // resets the interval
        gameInterval = setInterval(() => {
            move();
            checkCollision();
            draw();
        }, gameSpeedDelay);
    } else {
        snake.pop();
    }
}

//test movement
// setInterval(() => {
//     move(); // move first
//     draw(); // then draws new position
// }, 200);

//function that starts the game
function startGame() {
    gameStarted = true; // tracks if the game is runningor not
    instructionText.style.display = 'none';
    logo.style.display = 'none';
    gameInterval = setInterval(() => {
        move();
        checkCollision();
        draw();
    }, gameSpeedDelay);
}

// pressing spacebar (keypress event listener)
function handleKeyPress(event) {
    if(
        (!gameStarted && event.code === 'Space') || 
        (!gameStarted && event.key === ' ')
    ) {
        startGame();
    } else {
        switch (event.key) {
            case 'ArrowUp':
                direction = 'up';
            break;
            case 'ArrowDown':
                direction = 'down';
            break;
            case 'ArrowLeft':
                direction = 'left';
            break;
            case 'ArrowRight':
                direction = 'right';
            break;
        }
    }
}

document.addEventListener('keydown', handleKeyPress);

function increaseSpeed() {
    //console.log(gameSpeedDelay);
    if (gameSpeedDelay > 150) {
        gameSpeedDelay -=5;
    } else if (gameSpeedDelay > 100 ) {
        gameSpeedDelay -= 3;
    } else if (gameSpeedDelay > 50 ) {
        gameSpeedDelay -= 2;
    } else if (gameSpeedDelay > 25 ) {
        gameSpeedDelay -= 1;
    }
}

function checkCollision() {
    const head = snake[0];

    if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
        resetGame();
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            resetGame();
        }
    }
}

function resetGame() {
    updateHighScore();
    stopGame();
    snake = [{x: 10, y: 10}];
    food = generateFood();
    direction = 'right';
    gameSpeedDelay = 200;
    updateScore();
}

function updateScore() {
    const currentScore = snake.length - 1;
    score.textContent = "Score: " + currentScore.toString().padStart(3, '0');
}

function stopGame() {
    clearInterval(gameInterval);
    gameStarted = false;
    instructionText.style.display = 'block';
    logo.style.display = 'block';

    const currentScore = snake.length - 1;
    const volumeScore = currentScore / 2;
    volumeScore.toString();
    alert("Your volume has been set to: " + volumeScore);
}

function updateHighScore() {
    const currentScore = snake.length - 1;
    if (currentScore > highScore) {
        highScore = currentScore;
        highScoreText.textContent = "Best: " +  highScore.toString().padStart(3, '0');
    }
    highScoreText.style.display = 'block';
}
