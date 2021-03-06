<!-- Generated by documentation.js. Update this documentation by updating the source code. -->
See it [here](http://secretive-language.surge.sh)
### Table of Contents

-   [canvas](#canvas)
-   [dataMap](#datamap)
-   [drawCell](#drawcell)
-   [gridColour](#gridcolour)
-   [drawPart](#drawpart)
-   [clearPart](#clearpart)
-   [drawBeard](#drawbeard)
-   [drawShades](#drawshades)
-   [drawFace](#drawface)
-   [clearAll](#clearall)
-   [animation](#animation)
-   [stopAnimation](#stopanimation)
-   [tearLoop](#tearloop)
-   [dropShades](#dropshades)
-   [growBeard](#growbeard)
-   [tearAnimation](#tearanimation)
-   [beardAnimation](#beardanimation)
-   [shadesAnimation](#shadesanimation)
-   [mouse](#mouse)
-   [addEventListener](#addeventlistener)

## canvas

COM1008 Assignement 2
Author: Craig de Gouveia
Last Modified: 06/12/2017

## dataMap

**Parameters**

-   `data`  

## drawCell

**Parameters**

-   `x` **int** coordinate of cell
-   `y` **int** coordinate of cell
-   `width` **int** of cell
-   `height` **int** of cell
-   `c` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** string representation of a colour, such as rgb(0,0,0), of cell

## gridColour

**Parameters**

-   `index` **int** of colour from palette array

Returns **any** string representation of colour

## drawPart

Maps over a 2d array and plots each value in the canvas as a grid reference

**Parameters**

-   `context` **any** to execute against
-   `grid` **any** 2d array of pixels for canvas
-   `ox` **any** offset value for x coordinate
-   `oy` **any** offset value for y coordinate

## clearPart

Maps over a 2d array and clears any solid pixels to ensure clean rendering and animations

**Parameters**

-   `context` **any** to execute against
-   `grid` **any** 2d array of pixels for canvas
-   `ox` **any** offset value for x coordinate
-   `oy` **any** offset value for y coordinate

## drawBeard

Draw the beard part in a desired location on any face

## drawShades

Draw the shades part in a desired location on any face

## drawFace

Cleanly draws a face in the desired location. Checks for any additional features and renders them.

**Parameters**

-   `face`  

## clearAll

Clears the entire canvas

## animation

This ensures that an animation does not get triggered multiple times. 
Thus preventing performance issues and other animation bugs.

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

**Parameters**

-   `cb` **[animation](#animation)** executes the defined animation function callback

## stopAnimation

Stops the currently running animation

## tearLoop

Loops the Y coordinate of the tear for 200 frames

## dropShades

Updates the Y coordinate for the shades and stops when the eyes are reached

## growBeard

Updates the y coordinate of the additional beard until it reaches max length

## tearAnimation

Renders the tear when a user clicks on the eye

## beardAnimation

Renders the beard growth when a user clicks an already bearded chin

## shadesAnimation

Renders the shades dropping down from off screen when a user clicks on the forehead

## mouse

This handles the logic for what happens when a user clicks on a particular part of the canvas

**Parameters**

-   `evt` **any** mouse event passed in to function

## addEventListener

Controls for the buttons on the page to change between expressions.
In most cases some variables are reinitialised or redrawn.
