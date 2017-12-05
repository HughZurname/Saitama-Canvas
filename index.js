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
    if (int == 0) {
        return "rgb(15,55,105)"
    }
    if (int == 1) {
        return "rgb(255,255,255)"
    }
    if (int == 2) {
        return "rgba(255,255,255,0)"
    }
    if (int == 3) {
        return `hsl(${360 * Math.random()}, 50%, 50%)`
    }
    if (int == 4) {
        return "rgb(255,187,128)"
    }
    if (int == 5) {
        return "rgb(30,190,254)"
    }
}

function drawEyes(context) {
    context.fillStyle = "rgb(15,55,105)"
    context.fillRect(90, 145, 6, 6);
    context.fillRect(155, 145, 6, 6);
}

function drawFace(context, grid) {
    clearAll()
    let w = WIDTH / grid.length;
    for (let i = 0; i < grid.length; ++i) {
        let h = HEIGHT / grid[i].length;
        for (let j = 0; j < grid[i].length; ++j) {
            let colour = gridColour(grid[i][j]);
            drawCell(j * w, i * h, w, h, colour);
        }
    }
    drawEyes(context);
}

function drawPart(context, grid, sx, sy) {
    clearPart(context, grid, sx, sy)
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            drawCell(j * 2 + sx, i * 2 + sy, 2, 2, gridColour(grid[i][j]));
        }
    }
    drawEyes(context);
}

function clearPart(context, grid, sx, sy) {
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            if (grid[i][j] == 0) {
                context.clearRect(j * 2 + sx, i * 2 + sy, 2, 2);
            }
        }
    }
}

happyBtn.addEventListener("click", function () {
    stop()
    clearAll()
    drawPart(context, faceMap(background), 0, 0);
    drawPart(context, faceMap(happy), 58, 80);
    if (hasBeard == true) {
        makeBeard()
    }
}, false)
sadBtn.addEventListener("click", function () {
    stop()
    clearAll()
    drawPart(context, faceMap(background), 0, 0);
    drawPart(context, faceMap(sad), 58, 80);
    if (hasBeard == true) {
        makeBeard()
    }
}, false)
angryBtn.addEventListener("click", function () {
    stop()
    clearAll()
    drawPart(context, faceMap(background), 0, 0);
    drawPart(context, faceMap(angry), 58, 80);
    if (hasBeard == true) {
        makeBeard()
    }
}, false)
resetBtn.addEventListener("click", function () {
    stop()
    clearAll()
    drawPart(context, faceMap(background), 0, 0);
    drawPart(context, faceMap(neutral), 58, 80);
    hasBeard = false;
    clickCount = 0;
}, false)

function mouse(evt) {
    console.log(`x:${evt.clientX} y:${evt.clientY}`)
    if ((evt.clientX >= 150 && evt.clientX <= 200) && (evt.clientY >= 130 && evt.clientY <= 170)) {
        cryAnimation()
    }
    if ((evt.clientX >= 60 && evt.clientX <= 220) && (evt.clientY >= 190 && evt.clientY <= 240)) {
        makeBeard()
        clickCount += 1
        if (clickCount > 1) {
            beardAnimation()
        }
    }
    let boundingRect = canvas.getBoundingClientRect();
    console.log(boundingRect)
}

canvas.addEventListener("click", mouse)

canvas.addEventListener("click", function () {}, false)

let requestId
let hasBeard
let clickCount = 0
let beardY = 190,
    tearY = 165

function clearAll() {
    context.clearRect(0, 0, WIDTH, HEIGHT);
}

function tearDrop() {
    tearY >= 197 ? tearY = 165 : tearY += 1
}

function beardGrow() {
    if (beardY >= 240) {
        stop()
        beardY = 190
        clickCount = 0
    }
    beardY += 1
}

function makeBeard() {
    clearPart(context, faceMap(beard), 45, 168);
    drawPart(context, faceMap(beard), 45, 168);
    hasBeard = true
}

function cryAnimation() {
    requestId = requestAnimationFrame(cryAnimation);
    drawPart(context, faceMap(sad), 58, 80);
    if (hasBeard == true) {
        makeBeard()
    } else {
        drawPart(context, faceMap(chin), 46, 186);
    }
    clearPart(context, faceMap(tear), 162, tearY - 1);
    drawPart(context, faceMap(tear), 162, tearY);
    tearDrop()
}

function beardAnimation() {
    requestId = requestAnimationFrame(beardAnimation);
    drawPart(context, faceMap(extraBeard), 45, beardY);
    beardGrow()
}

function stop() {
    requestId && cancelAnimationFrame(requestId);
}

drawPart(context, faceMap(background), 0, 0);
drawPart(context, faceMap(neutral), 58, 80);
drawEyes(context);