const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const resetBtn = document.getElementById("reset");
const happyBtn = document.getElementById("happy");
const sadBtn = document.getElementById("sad");
const angryBtn = document.getElementById("angry");

function dataMap(name) {
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
    if (int == 6) {
        return "rgba(255,38,0,1)"
    }
    if (int == 7) {
        return "rgb(145,145,145)"
        // return "rgb(255,64,255)"
    }
}

function drawEyes(context, x1, x2, y) {
    context.fillStyle = "rgb(15,55,105)"
    context.fillRect(x1, y, 6, 6);
    context.fillRect(x2, y, 6, 6);
}

function drawPart(context, grid, sx, sy) {
    clearPart(context, grid, sx, sy)
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            drawCell(j * 2 + sx, i * 2 + sy, 2, 2, gridColour(grid[i][j]));
        }
    }
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

function mouse(evt) {
    console.log(`x:${evt.clientX} y:${evt.clientY}`)
    if ((evt.clientX >= 150 && evt.clientX <= 200) && (evt.clientY >= 130 && evt.clientY <= 170)) {
        cryAnimation()
    }
    if ((evt.clientX >= 60 && evt.clientX <= 220) && (evt.clientY >= 190 && evt.clientY <= 240)) {
        makeBeard()
        beardCount += 1
        if (beardCount > 1) {
            beardAnimation()
        }
    }
    let boundingRect = canvas.getBoundingClientRect();
}


let requestId
let hasBeard = false
let hasHair = false
let currentFace = neutral
let beardCount = 0
let beardY = 190,
    tearY = 165,
    hairY = -100

function clearAll() {
    context.clearRect(0, 0, WIDTH, HEIGHT);
}

function tearDrop() {
    tearY >= 197 ? tearY = 165 : tearY += 1
}

function dropHair() {
    hairY >= 135 ? stop() : hairY += 3
}

function growBeard() {
    if (beardY >= 240) {
        stop()
        beardY = 190
        beardCount = 0
    }
    beardY += 1
}

function makeBeard() {
    clearPart(context, dataMap(beard), 45, 168);
    drawPart(context, dataMap(beard), 45, 168);
    hasBeard = true
}

function cryAnimation() {
    requestId = requestAnimationFrame(cryAnimation);
    drawPart(context, dataMap(sad), 58, 80);
    if (hasBeard == true) {
        makeBeard()
    } else {
        drawPart(context, dataMap(chin), 46, 186);
    }
    clearPart(context, dataMap(tear), 162, tearY - 1);
    drawPart(context, dataMap(tear), 162, tearY);
    tearDrop()
}

function beardAnimation() {
    requestId = requestAnimationFrame(beardAnimation);
    drawPart(context, dataMap(extraBeard), 45, beardY);
    growBeard()
}

function hairAnimation() {
    requestId = requestAnimationFrame(hairAnimation);
    drawPart(context, dataMap(background), 0, 0);
    drawPart(context, dataMap(currentFace), 58, 80);
    if (hasBeard == true) {
        makeBeard()
    }
    drawPart(context, dataMap(deal), 69, hairY)
    drawPart(context, dataMap(deal), 69, hairY)
    // clearPart(context, dataMap(mohawk), 46, hairY);
    // drawPart(context, dataMap(mohawk), 46, hairY);
    dropHair()
}

function stop() {
    requestId && cancelAnimationFrame(requestId);
}

happyBtn.addEventListener("click", function () {
    stop()
    clearAll()
    drawPart(context, dataMap(background), 0, 0);
    drawPart(context, dataMap(happy), 58, 80);
        
    if (hasBeard == true) {
        makeBeard()
    }
    currentFace = happy
}, false)
sadBtn.addEventListener("click", function () {
    stop()
    clearAll()
    drawPart(context, dataMap(background), 0, 0);
    drawPart(context, dataMap(sad), 58, 80);
        
    if (hasBeard == true) {
        makeBeard()
    }
    currentFace = sad
}, false)
angryBtn.addEventListener("click", function () {
    stop()
    clearAll()
    drawPart(context, dataMap(background), 0, 0);
    drawPart(context, dataMap(angry), 58, 80);
        
    if (hasBeard == true) {
        makeBeard()
    }
    currentFace = angry
}, false)
resetBtn.addEventListener("click", function () {
    stop()
    clearAll()
    drawPart(context, dataMap(background), 0, 0);
    drawPart(context, dataMap(neutral), 58, 80);
        
    hasBeard = false;
    beardCount = 0;
    currentFace = neutral
}, false)

canvas.addEventListener("click", mouse)

canvas.addEventListener("click", function () {
    hairAnimation()
}, false)

drawPart(context, dataMap(background), 0, 0);
drawPart(context, dataMap(neutral), 58, 80);

drawEyes(context);