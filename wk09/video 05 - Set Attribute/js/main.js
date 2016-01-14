// Modify the previous program by creating a new img tag using js, and attaching an image to it using document.setAttribute()

// store a variable that creates a new div
var newDiv = document.createElement('div')
// store a variable that creates a new img tag
var newImg = document.createElement('img')
// update class on new created div
newDiv.className = 'addedClass'
// store a variable that creates a node of text
var textHere = document.createTextNode('write our text here')
// call the newDiv and add the text to it
newDiv.appendChild(textHere)
// set the source attribute to this image link
newImg.setAttribute('src', 'http://img1/123freevectors.com/wp-content/uploads/new/icon/075-smiley-face-vector-art-free-download-l.png')
// store a variable that gets the addHere id
var addHere = document.getElementById('addHere')
// add the newly created div into the addHere id tag
addHere.appendChild(newDiv)
// add the newly created img into the addHere id tag
addHere.appendChild(newImg)