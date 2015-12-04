// When the document is ready, do this
$(document).ready(function() {
	// ====== EXAMPLE 1 ======
	// When any tag with a class of button-dbl-click is doubled click, do this
	$('.button-dbl-click').dblclick(function() {
		// do something
		console.log('woah this was double clicked')
	})
	// ====== EXAMPLE 2 ======
	// When any tag with a class of button-mouse-down is activated when mouse is clicked down, do this
	$('.button-mouse-down').mousedown(function() {
		// do something
		console.log('woah the mouse was pushed down')
	})
	// ====== EXAMPLE 3 ======
	// When any tag with a class of button-mouse-enter has the mouse enter the element, do this
	$('.button-mouse-enter').mouseenter(function() {
		// do something
		console.log('woah the element was entered by the mouse')
	})
	// ====== EXAMPLE 4 ======
	// When any tag with a class of button-mouse-leave has the mouse leave the element, do this
	$('.button-mouse-leave').mouseleave(function() {
		// do something
		console.log('woah the element was exited by the mouse')
	})
})