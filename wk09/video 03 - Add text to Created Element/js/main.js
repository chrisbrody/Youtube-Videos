// Modify the previous program to include text inside of the div generated using createTextNode()

// store a variable that creates a new div
var newDiv = document.createElement('div')
// store a variable that creates a node of text
var textHere = document.createTextNode('write our text here')
// call the newDiv and add the text to it
newDiv.appendChild(textHere)
// store a variable that gets the addHere id
var addHere = document.getElementById('addHere')
// add the newly created div into the addHere id tag
addHere.appendChild(newDiv)