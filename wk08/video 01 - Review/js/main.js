/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// 1. Print "hello world" to the console, the screen and an alert
	console.log("hello world")
	document.write("hello world")
	alert("hello world")
// 2. Save a varaible value using prompt()
	var user = prompt("What's your name?")
// 3. Create 4 variable with different types of values
	var numVar = 25
	var strVar = "Cool Words"
	var boolVar = true
	var arrayVar = [25, "twenty-five", numVar]
// 4. Use concatenation to combine the value of 3 variables into 1
	var combinedVar = strVar + ", Cool Numbers: " + numVar + ", this is " + boolVar
// 5. Write an if else statement using at least 2 of these variables
	if(numVar === arrayVar[0]) {
		console.log("Yes! " + numVar + " is equal in type and vaule to " + arrayVar[0])
	}
// 6. Create a for loop that prints numbers numbers 1 - 20
	for(var i = 1; i <= 20; i++) {
		console.log(i)
	}
// 7. Create a function that accepts a parameter and runs with an argument
	function sweetness(a, b) {
		console.log(a * b)
	}
	sweetness(numVar, arrayVar[0])