//Get the canvas from html
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
//Get canvas size
const width = canvas.width;
const height = canvas.height;

function drawBoard() {
    //Vertical Line 1
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo((width * 1/3), 0);
    ctx.lineTo((width * 1/3), height);
    ctx.stroke();
    //Vertical Line 2
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo((width * 2/3), 0);
    ctx.lineTo((width * 2/3), height);
    ctx.stroke();
    //Horizontal Line 1
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(0, (height * 1/3));
    ctx.lineTo(width, (height * 1/3));
    ctx.stroke();
    //Horizontal Line 2
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(0, (height * 2/3));
    ctx.lineTo(width, (height * 2/3));
    ctx.stroke();
}
//Draw on canvas
function draw() {
    ctx.clearRect(0, 0, width, height);
    drawBoard();
}
//Gameloop
function gameLoop() {
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();