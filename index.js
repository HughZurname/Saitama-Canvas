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

const dataMap = name => name.map(f => f[0].split(""))

const drawCell = (x, y, width, height, c) => {
    context.fillStyle = c
    context.fillRect(x, y, width, height)
}

const gridColour = index => colours[index]

const drawPart = (context, grid, sx, sy) => (
    grid.map(
        (row, i) => row.map(
            (col, j) => drawCell(j * 2 + sx, i * 2 + sy, 2, 2, gridColour(grid[i][j]))
        )
    )
)

const clearPart = (context, grid, sx, sy) => (
    grid.map(
        (row, i) => row.map(
            (col, j) => grid[i][j] == 0 ? context.clearRect(j * 2 + sx, i * 2 + sy, 2, 2) : false
        )
    )
)

function mouse(evt) {
    console.log(`x:${evt.clientX} y:${evt.clientY}`)
    if ((evt.clientX >= 150 && evt.clientX <= 200) && (evt.clientY >= 130 && evt.clientY <= 170)) {
        currentFace = sad
        cryAnimation()
    }
    if ((evt.clientX >= 60 && evt.clientX <= 215) && (evt.clientY >= 190 && evt.clientY <= 240)) {
        makeBeard()
        beardCount < 1 ? beardCount += 1 : beardAnimation()
    }
    if ((evt.clientX >= 60 && evt.clientX <= 215) && (evt.clientY >= 40 && evt.clientY <= 100)) {
        shadesAnimation()
    }
}


let requestId
let hasBeard = false
let gotShades = false
let currentFace = neutral
let beardCount = 0
let beardY = 190,
    tearY = 165,
    shadesY = -100

const clearAll = () => context.clearRect(0, 0, WIDTH, HEIGHT)

const tearLoop = () => tearY >= 197 ? tearY = 165 : tearY += 1

const dropShades = () => {
    if (shadesY >= 135) {
        console.log("BONG")
        stop()
        shadesY = -100
    }
    shadesY += 3
}

const growBeard = () => {
    if (beardY >= 240) {
        stop()
        beardY = 190
        beardCount = 0
    }
    beardY += 1
}

const makeBeard = () => {
    clearPart(context, dataMap(beard), 45, 168)
    drawPart(context, dataMap(beard), 45, 168)
    hasBeard = true
}

const cryAnimation = () => {
    requestId = requestAnimationFrame(cryAnimation)
    drawPart(context, dataMap(currentFace), 58, 80)
    hasBeard ? makeBeard() : drawPart(context, dataMap(chin), 46, 186)
    gotShades ? drawPart(context, dataMap(shades), 69, 135) : console.log("SHADES")
    clearPart(context, dataMap(tear), 162, tearY - 1)
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
    hasBeard ? makeBeard() : drawPart(context, dataMap(chin), 46, 186)
    dropShades()
    gotShades = true
}

const stop = () => requestId && cancelAnimationFrame(requestId)

kawaiiBtn.addEventListener("click", function () {
    stop()
    clearAll()
    drawPart(context, dataMap(background), 0, 0)
    drawPart(context, dataMap(kawaii), 58, 80)
    hasBeard ? makeBeard() : currentFace = kawaii
}, false)
sadBtn.addEventListener("click", function () {
    stop()
    clearAll()
    drawPart(context, dataMap(background), 0, 0)
    drawPart(context, dataMap(sad), 58, 80)
    hasBeard ? makeBeard() : currentFace = sad
}, false)
oniBtn.addEventListener("click", function () {
    stop()
    clearAll()
    drawPart(context, dataMap(background), 0, 0)
    drawPart(context, dataMap(oni), 58, 80)
    hasBeard ? makeBeard() : currentFace = oni
}, false)
resetBtn.addEventListener("click", function () {
    stop()
    clearAll()
    drawPart(context, dataMap(background), 0, 0)
    drawPart(context, dataMap(neutral), 58, 80)

    hasBeard = false
    gotShades = false
    beardCount = 0
    currentFace = neutral
}, false)

canvas.addEventListener("click", mouse)

canvas.addEventListener("click", function () {}, false)

drawPart(context, dataMap(background), 0, 0)
drawPart(context, dataMap(neutral), 58, 80)