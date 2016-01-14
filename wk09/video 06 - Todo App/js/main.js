// Exercise: Create a to do list application

// todoList function used on button click to get user input and 
function todoList() {
	// store user value
	var item    = document.getElementById('todoInput').value
	// create a text node from the user input
	var text    = document.createTextNode(item)
	// create a li tag
	var newItem = document.createElement('li')
	// add the user input to the li tag
	newItem.appendChild(text)
	// append the li to the html todoList id tag
	document.getElementById('todoList').appendChild(newItem)
}