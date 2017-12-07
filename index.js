/**
 * COM1008 Assignement 2
 * Author: Craig de Gouveia (170164160)
 * Modified: 06/12/2017
 */

//Initialise canvas and controls
const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
const WIDTH = canvas.width
const HEIGHT = canvas.height
const resetBtn = document.getElementById("reset")
const kawaiiBtn = document.getElementById("kawaii")
const sadBtn = document.getElementById("sad")
const oniBtn = document.getElementById("oni")

//Create an array containing the colour palette for use in rendering the image
const colours = [
    "rgb(15,55,105)",
    "rgb(255,255,255)",
    "rgba(255,255,255,0)",
    `hsl(${360 * Math.random()}, 50%, 50%)`,
    "rgb(255,187,128)",
    "rgb(30,190,254)",
    "rgba(255,38,0,1)",
    "rgb(145,145,145)",
    `hsl(${360 * Math.random()}, 50%, 50%)`,
]
/**
 * 
 * @param {string[][] name Takes an array of arrays with a single string
 * @returns {string[][]} Returns an array of arrays with strings split per character
 */
const dataMap = data => data.map(f => f[0].split(""))

/**
 * 
 * @param {int} x  coordinate of cell
 * @param {int} y coordinate of cell
 * @param {int} width of cell
 * @param {int} height of cell
 * @param {string} c string representation of a colour, such as rgb(0,0,0), of cell
 */
const drawCell = (x, y, width, height, c) => {
    context.fillStyle = c
    context.fillRect(x, y, width, height)
}

/**
 * 
 * @param {int} index of colour from palette array
 * @returns string representation of colour
 */
const gridColour = index => colours[index]

/**
 * 
 * Maps over a 2d array and plots each value in the canvas as a grid reference
 * @param {*} context to execute against
 * @param {*} grid 2d array of pixels for canvas
 * @param {*} ox offset value for x coordinate
 * @param {*} oy offset value for y coordinate 
 */
const drawPart = (context, grid, ox, oy) => (
    grid.map(
        (row, i) => row.map(
            (col, j) => drawCell(j * 2 + ox, i * 2 + oy, 4, 4, gridColour(grid[i][j]))
        )
    )
)

/**
 * 
 * Maps over a 2d array and clears any solid pixels to ensure clean rendering and animations
 * @param {*} context to execute against
 * @param {*} grid 2d array of pixels for canvas
 * @param {*} ox offset value for x coordinate
 * @param {*} oy offset value for y coordinate 
 */
const clearPart = (context, grid, ox, oy) => (
    grid.map(
        (row, i) => row.map(
            (col, j) => (grid[i][j] == 0 || 1) && context.clearRect(j * 2 + ox, i * 2 + oy, 2, 2)
        )
    )
)

//Initialise global variables for drawing a face
let hasBeard = false
let gotShades = false
let currentFace = neutral

/**
 * Draw the beard part in a desired location on any face
 */
const drawBeard = () => {
    drawPart(context, dataMap(beard), 45, 168)
    hasBeard = true
}
/**
 * Draw the shades part in a desired location on any face
 */
const drawShades = () => {
    drawPart(context, dataMap(shades), 69, 135)
}
/**
 * 
 * Cleanly draws a face in the desired location. Checks for any additional features and renders them.
 * @param {string[][]} face 2d array representing an expression for the face
 */
const drawFace = (face) => {
    drawPart(context, dataMap(background), 0, 0)
    drawPart(context, dataMap(face), 58, 80)
    gotShades && drawShades()
    hasBeard && drawBeard()
    currentFace = face
}

/**
 * Clears the entire canvas 
 */
const clearAll = () => context.clearRect(0, 0, WIDTH, HEIGHT)


//Initialise global variables for animation
let requestId
let isRunning
let beardY = 190
let tearY = 165
let shadesY = -100
let beardStrokes = 0
let eyePokes = 0
let loopCount = 0

/**
 * 
 * This ensures that an animation does not get triggered multiple times. 
 * Thus preventing performance issues and other animation bugs.
 *  @callback animation
 * @param {animation} cb executes the defined animation function callback 
 */
const startAnimation = (animation) => {
    if (animation && !isRunning) {
        isRunning = true;
        animation()
    } else if (!animation && isRunning) {
        isRunning = false;
    }
}
/**
 * Stops the currently running animation
 */
const stopAnimation = () => cancelAnimationFrame(requestId)

/**
 * Loops the Y coordinate of the tear for 200 frames
 */
const tearLoop = () => {
    if (loopCount >= 200) {
        stopAnimation()
        isRunning = false;
        loopCount = 0
    }
    tearY >= 197 && (tearY = 165)
    tearY += 1
    loopCount++
}

/**
 * Updates the Y coordinate for the shades and stops when the eyes are reached
 */
const dropShades = () => {
    if (shadesY >= 135) {
        stopAnimation()
        shadesY = -100
        gotShades = true
        isRunning = false
    }
    shadesY += 5
}

/**
 * Updates the y coordinate of the additional beard until it reaches max length
 */
const growBeard = () => {
    if (beardY >= 240) {
        stopAnimation()
        beardY = 190
        beardStrokes = 0
        isRunning = false
    }
    beardY += 1
}

/**
 * Renders the tear when a user clicks on the eye
 */
const tearAnimation = () => {
    isRunning && (requestId = requestAnimationFrame(tearAnimation))
    drawPart(context, dataMap(currentFace), 58, 80)
    hasBeard ? drawBeard() : drawPart(context, dataMap(chin), 44, 184)
    gotShades && drawShades()
    drawPart(context, dataMap(tear), 162, tearY)
    tearLoop()
}

/**
 * Renders the beard growth when a user clicks an already bearded chin
 */
const beardAnimation = () => {
    isRunning && (requestId = requestAnimationFrame(beardAnimation))
    drawPart(context, dataMap(extraBeard), 45, beardY)
    growBeard()
}

/**
 * Renders the shades dropping down from off screen when a user clicks on the forehead
 */
const shadesAnimation = () => {
    isRunning && (requestId = requestAnimationFrame(shadesAnimation))
    drawPart(context, dataMap(background), 0, 0)
    drawPart(context, dataMap(currentFace), 58, 80)
    drawPart(context, dataMap(shades), 69, shadesY)
    hasBeard && drawBeard()
    dropShades()
}

/**
 * 
 * This handles the logic for what happens when a user clicks on a particular part of the canvas
 * @param {*} evt mouse event passed in to function
 */
const mouse = (evt) => {
    let boundingRect = canvas.getBoundingClientRect();
    let offsetX = boundingRect.left;
    let offsetY = boundingRect.top;

    if ((evt.clientX >= 150 + offsetX && evt.clientX <= 200 + offsetX) &&
        (evt.clientY >= 130 + offsetY && evt.clientY <= 170 + offsetY)) {
        startAnimation(tearAnimation)
        eyePokes < 1 ? eyePokes += 1 : (currentFace = sad) && drawFace()
    }
    if ((evt.clientX >= 60 + offsetX && evt.clientX <= 215 + offsetX) &&
        (evt.clientY >= 190 + offsetY && evt.clientY <= 240 + offsetY)) {
        drawBeard()
        beardStrokes < 1 ? beardStrokes += 1 : startAnimation(beardAnimation)
    }
    if ((evt.clientX >= 60 + offsetX && evt.clientX <= 215 + offsetX) && (evt.clientY >= 40 + offsetY && evt.clientY <= 100 + offsetY)) {
        !gotShades && startAnimation(shadesAnimation)
    }
}

canvas.addEventListener("click", mouse)

/**
 * Controls for the buttons on the page to change between expressions.
 * In most cases some variables are reinitialised or redrawn.
 */
kawaiiBtn.addEventListener("click", function () {
    stopAnimation()
    clearAll()
    drawFace(kawaii)
    eyePokes = 0
    isRunning = false
}, false)

sadBtn.addEventListener("click", function () {
    stopAnimation()
    clearAll()
    drawFace(sad)
    eyePokes = 0
    isRunning = false
}, false)

oniBtn.addEventListener("click", function () {
    stopAnimation()
    clearAll()
    drawFace(oni)
    eyePokes = 0
    isRunning = false
}, false)

resetBtn.addEventListener("click", function () {
    hasBeard = false
    gotShades = false
    beardStrokes = 0
    eyePokes = 0
    isRunning = false
    stopAnimation()
    clearAll()
    drawFace(neutral)
}, false)

//Initial face state when entering canvas
drawFace(neutral)