// Modify the previous program by adding a class to the div

// store a variable that creates a new div
var newDiv = document.createElement('div')
// update class on new created div
newDiv.className = 'addedClass'
// store a variable that creates a node of text
var textHere = document.createTextNode('write our text here')
// call the newDiv and add the text to it
newDiv.appendChild(textHere)
// store a variable that gets the addHere id
var addHere = document.getElementById('addHere')
// add the newly created div into the addHere id tag
addHere.appendChild(newDiv)