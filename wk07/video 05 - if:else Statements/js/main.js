  /* ======================================================================
  Author Custom JavaScript
====================================================================== */
// part 1
// if(1 > 2) {
// 	alert('2 is greater than 1')
// }
// part 2
// if(numberValue > 2) {
// 	alert(numberValue + ' is greater than 2')
// }
var numberValue = 12
var numberValue2 = Number(prompt('choose a number between 1 - 100'))

if(numberValue > numberValue2) {
	console.log(numberValue + ' is greater than ' + numberValue2)

} else if (numberValue < numberValue2){
	console.log(numberValue2 + ' is greater than ' + numberValue)
}