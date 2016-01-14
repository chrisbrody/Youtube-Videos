// 1. Create a for loop that prints numbers numbers 0 - 100 in increments of 5
for(var i = 0; i <= 100; i+=5) {
	console.log(i)
}
// 2. Save a variable value using getElementById and .value
function getUsername() {
	var username = document.getElementById('username').value

	document.getElementById('displayUsername').textContent = 'Your username: ' + username
}

// 3. Create 3 car objects with at least 4 properties
car1 = {
	img: 'img/car1.jpg',
	make: 'Honda',
	model: 'Fit',
	price: '$15,890'
}
car2 = {
	img: 'img/car2.jpg',
	make: 'Honda',
	model: 'Civic',
	price: '$18,640'
}
car3 = {
	img: 'img/car3.jpg',
	make: 'Honda',
	model: 'Accord',
	price: '$22,205'
}

// 4. Create an array of those 3 objects
var carArray = [car1, car2, car3] 
console.log(carArray)

// 5. Display that information on the page under an image of each car, add the images as one of the object's properties
for(var i = 0; i < carArray.length; i++) {
	document.getElementById( 'img' + (i+1) ).src = carArray[i].img
	document.getElementById( 'make' + (i+1) ).textContent = carArray[i].make + ' ' + carArray[i].model

	document.getElementById( 'price' + (i+1) ).textContent = carArray[i].price
}