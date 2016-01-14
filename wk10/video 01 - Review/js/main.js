// Exercise: Create a new div element when the page is created
// var newDiv = document.createElement('div')
// var addHere = document.getElementById('addHere')
// addHere.appendChild(newDiv)


// Exercise: Modify the previous program to include text inside of the div generated using createTextNode()
// var newDiv = document.createElement('div')
// var textHere = document.createTextNode('write your text here')
// newDiv.appendChild(textHere)
// var addHere = document.getElementById('addHere')
// addHere.appendChild(newDiv)


// Exercise: Modify the previous program by adding a class to the div
// var newDiv = document.createElement('div')
// newDiv.className = "newClass"
// var textHere = document.createTextNode('write your text here')
// newDiv.appendChild(textHere)
// var addHere = document.getElementById('addHere')
// addHere.appendChild(newDiv)


// Exercise: Modify the previous program by creating a new img tag using js, and attaching an image to it using document.setAttribute()
var newDiv = document.createElement('div')
var newImg = document.createElement('img')
newDiv.className = "newClass"
var textHere = document.createTextNode('write your text here')
newDiv.appendChild(textHere)
newImg.setAttribute('src', 'http://img1.123freevectors.com/wp-content/uploads/new/icon/075-smiley-face-vector-art-free-download-l.png')
var addHere = document.getElementById('addHere')
addHere.appendChild(newDiv)
addHere.appendChild(newImg)
