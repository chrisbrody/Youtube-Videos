/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var cars = [
	{ // honda object
		make: "honda",
		model: "civic",
		year: 2014,
		color: "blue"
	},
	{ // toyota object
		make: "toyota",
		model: "camry",
		year: 2000,
		color: "red"
	},
	{ // ford object
		make: "ford",
		model: "mustang",
		year: 2005,
		color: "black"
	}

]
// console the make property of the 0 index in the cars array
console.log(cars[0].make)

for(var i = 0; i < cars.length; i++) {
	if(cars[i].year < 2010) {
		document.write(cars[i].make + ", " + cars[i].model + " ")
	}
}

