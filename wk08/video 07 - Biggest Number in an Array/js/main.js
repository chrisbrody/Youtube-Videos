/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// find the biggest number in an array and display it in the console
var arr = [10, 55, 22, 87, 14]
// start the biggest number at 0
var biggest = 0;

for(var i = 0; i < arr.length; i++) {
	// check to see if the biggest number is smaller than the current array index number
	if (biggest < arr[i]) {
		// change biggest to this larger current array index number
		biggest = arr[i]
		// console the final biggest number
		console.log("The new biggest number is: " + biggest)
	}
}
// console the final biggest number
console.log("Final biggest Number is: " + biggest)