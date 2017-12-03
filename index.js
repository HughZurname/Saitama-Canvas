const canvas = document.getElementById("canvas");

const resetBtn = document.getElementById("reset");
const happyBtn = document.getElementById("happy");
const sadBtn = document.getElementById("sad");
const angryBtn = document.getElementById("angry");


const context = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

function faceMap(name) {
    return name.map(r => r[0].split(""))
}


function drawCell(x, y, width, height, c) {
    context.fillStyle = c;
    context.fillRect(x, y, width, height);
}

function gridColour(int) {
    if (int == 1) {
        return "rgb(255,255,255)"
    }
    if (int == 0) {
        return "rgb(15,55,105)"
    }
    if (int == 2) {
        return "rgb(255,0,255)"
    } else {
        return "rgb(15,55,105)"
    }
}

function drawGrid(context, grid) {
    let w = WIDTH / grid.length;
    for (let i = 0; i < grid.length; ++i) {
        let h = HEIGHT / grid[i].length;
        for (let j = 0; j < grid[i].length; ++j) {
            let colour = gridColour(grid[i][j]);
            drawCell(j * w, i * h, w, h, colour);
        }
    }
}

happyBtn.addEventListener("click", function () {
    drawGrid(context, faceMap(happy));
}, false)
sadBtn.addEventListener("click", function () {
    drawGrid(context, faceMap(sad));
}, false)
angryBtn.addEventListener("click", function () {
    drawGrid(context, faceMap(angry));
}, false)
resetBtn.addEventListener("click", function () {
    drawGrid(context, faceMap(neutral));
}, false)
drawGrid(context, faceMap(neutral));