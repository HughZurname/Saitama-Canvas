const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const resetBtn = document.getElementById("reset");
const happyBtn = document.getElementById("happy");
const sadBtn = document.getElementById("sad");
const angryBtn = document.getElementById("angry");

function faceMap(name) {
    return name.map(f => f[0].split(""))
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
    } else {
        return "rgb(15,55,105)"
    }
}

function drawEyes(context) {
    context.fillStyle = "rgb(15,55,105)"
    context.fillRect(90, 145, 6, 6);
    context.fillRect(155, 145, 6, 6);
}

function drawFace(context, grid) {
    let w = WIDTH / grid.length;
    for (let i = 0; i < grid.length; ++i) {
        let h = HEIGHT / grid[i].length;
        for (let j = 0; j < grid[i].length; ++j) {
            let colour = gridColour(grid[i][j]);
            drawCell(j * w, i * h, w, h, colour);
        }
    }
}

function drawPart(context, grid, sx, sy) {
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            drawCell(j*2 + sx, i*2 + sy, 2, 2, gridColour(grid[i][j]));
        }
    }
}

function mouse(evt) {
    console.log(evt)
    let boundingRect = canvas.getBoundingClientRect();
    console.log(boundingRect)
}

happyBtn.addEventListener("click", function () {
    drawFace(context, faceMap(happy));
    drawEyes(context);
}, false)
sadBtn.addEventListener("click", function () {
    drawFace(context, faceMap(sad));
    drawEyes(context);

}, false)
angryBtn.addEventListener("click", function () {
    drawFace(context, faceMap(angry));
    drawEyes(context);
}, false)
resetBtn.addEventListener("click", function () {
    drawFace(context, faceMap(neutral));
    drawEyes(context);
}, false)
canvas.addEventListener("click", mouse)

canvas.addEventListener("click", function () {
    drawPart(context, faceMap(tear),160,185)
}, false)


drawFace(context, faceMap(neutral));
drawEyes(context);