/* ======================================================================
  Author Custom JavaScript
====================================================================== */
var cars = ["fiat", "benz", "honda", "toyota"]
// console all cars
console.log(cars)
// console the number of items in the array
console.log(cars.length)
// loop through the array till out of index items
for(var i = 0; i < cars.length; i++) {
	// if the car is a benz, do this
	if(cars[i] == "benz") {
		// console the current car, should be a benz only
		console.log("You're driving a sweet " + cars[i])
	}
	// console the car on the current index
	console.log(cars[i])
}