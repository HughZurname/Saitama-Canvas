const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
const WIDTH = canvas.width
const HEIGHT = canvas.height

const resetBtn = document.getElementById("reset")
const kawaiiBtn = document.getElementById("kawaii")
const sadBtn = document.getElementById("sad")
const oniBtn = document.getElementById("oni")

const colours = [
    "rgb(15,55,105)",
    "rgb(255,255,255)",
    "rgba(255,255,255,0)",
    `hsl(${360 * Math.random()}, 50%, 50%)`,
    "rgb(255,187,128)",
    "rgb(30,190,254)",
    "rgba(255,38,0,1)",
    "rgb(145,145,145)",
    "rgb(252,247,0)"
]

let requestId
let hasBeard = false
let gotShades = false
let currentFace = neutral

let beardStrokes = 0
let eyePokes = 0
let loops = 0

let beardY = 190
let tearY = 165
let shadesY = -100

const dataMap = name => name.map(f => f[0].split(""))

const drawCell = (x, y, width, height, c) => {
    context.fillStyle = c
    context.fillRect(x, y, width, height)
}

const gridColour = index => colours[index]

const drawPart = (context, grid, sx, sy) => (
    grid.map(
        (row, i) => row.map(
            (col, j) => drawCell(j * 2 + sx, i * 2 + sy, 4, 4, gridColour(grid[i][j]))
        )
    )
)

const clearPart = (context, grid, sx, sy) => (
    grid.map(
        (row, i) => row.map(
            (col, j) => (grid[i][j] == 0 || 1 || 2) && context.clearRect(j * 2 + sx, i * 2 + sy, 2, 2)
        )
    )
)

const mouse = (evt) => {
    let boundingRect = canvas.getBoundingClientRect();
    let offsetX = boundingRect.left;
    let offsetY = boundingRect.top;

    if ((evt.clientX >= 150 + offsetX && evt.clientX <= 200 + offsetX) && (evt.clientY >= 130 + offsetY && evt.clientY <= 170 + offsetY)) {
        cryAnimation()
        eyePokes < 1 ? eyePokes += 1 : (currentFace = sad) && changeFace()
    }
    if ((evt.clientX >= 60 + offsetX && evt.clientX <= 215 + offsetX) && (evt.clientY >= 190 + offsetY && evt.clientY <= 240 + offsetY)) {
        makeBeard()
        beardStrokes < 1 ? beardStrokes += 1 : beardAnimation()
    }
    if ((evt.clientX >= 60 + offsetX && evt.clientX <= 215 + offsetX) && (evt.clientY >= 40 + offsetY && evt.clientY <= 100 + offsetY)) {
        !gotShades ? shadesAnimation() : false
    }
}

const clearAll = () => context.clearRect(0, 0, WIDTH, HEIGHT)

const tearLoop = () => {
    tearY >= 197 && (tearY = 165)
    // loops >= 500 && stop() && (loops = 0) && (eyePokes = 0)
    tearY += 1
    // loops += 1
}

const dropShades = () => {
    if (shadesY >= 135) {
        stop(requestId)
        shadesY = -100
        gotShades = true
    }
    shadesY += 5
}

const growBeard = () => {
    if (beardY >= 240) {
        stop(requestId)
        beardY = 190
        beardStrokes = 0
    }
    beardY += 1
}

const makeBeard = () => {
    drawPart(context, dataMap(beard), 45, 168)
    hasBeard = true
}

const placeShades = () => {
    drawPart(context, dataMap(shades), 69, 135)
}

const cryAnimation = () => {
    requestId = requestAnimationFrame(cryAnimation)
    drawPart(context, dataMap(currentFace), 58, 80)
    hasBeard ? makeBeard() : drawPart(context, dataMap(chin), 44, 184)
    gotShades && placeShades()
    drawPart(context, dataMap(tear), 162, tearY)
    tearLoop()
}

const beardAnimation = () => {
    requestId = requestAnimationFrame(beardAnimation)
    drawPart(context, dataMap(extraBeard), 45, beardY)
    growBeard()
}

const shadesAnimation = () => {
    requestId = requestAnimationFrame(shadesAnimation)
    drawPart(context, dataMap(background), 0, 0)
    drawPart(context, dataMap(currentFace), 58, 80)
    drawPart(context, dataMap(shades), 69, shadesY)
    hasBeard && makeBeard()
    dropShades()
}

const stop = (requestId) => cancelAnimationFrame(requestId)

const changeFace = () => {
    drawPart(context, dataMap(background), 0, 0)
    drawPart(context, dataMap(currentFace), 58, 80)
}

kawaiiBtn.addEventListener("click", function () {
    stop(requestId)
    clearAll()
    currentFace = kawaii
    changeFace()
    gotShades && placeShades()
    hasBeard && makeBeard()
    eyePokes = 0
}, false)
sadBtn.addEventListener("click", function () {
    stop(requestId)
    clearAll()
    currentFace = sad
    changeFace()
    gotShades && placeShades()
    hasBeard && makeBeard()
    eyePokes = 0
}, false)
oniBtn.addEventListener("click", function () {
    stop(requestId)
    clearAll()
    currentFace = oni
    changeFace()
    gotShades && placeShades()
    hasBeard && makeBeard()
    eyePokes = 0
}, false)
resetBtn.addEventListener("click", function () {
    stop(requestId)
    clearAll()
    currentFace = neutral
    changeFace()

    hasBeard = false
    gotShades = false
    beardStrokes = 0
    eyePokes = 0
}, false)

canvas.addEventListener("click", mouse)

changeFace()