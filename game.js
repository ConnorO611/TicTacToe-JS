//Get the canvas from html
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
//Track Key States
const keys={}
window.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
window.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);
//Draw on canvas
function draw() {

}
//Gameloop
function gameLoop() {
    draw();
}