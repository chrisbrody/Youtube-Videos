// when the page is ready, do this
$(document).ready(function() {	
	// ====== EXAMPLE 1 ======
	// When any button tag is clicked, do this
	$('button').click(function() {
		// hide all h1 tags
		$("h1").hide()
	})

	// ====== EXAMPLE 2 ======
	// When any element with a class of button is clicked, do this
	$('.button').click(function() {
		// hide the tag that has an id of text
		$('#text').hide()
	})

	// ====== EXAMPLE 3 ======
	// When an element with a class of hide this is clicked, do this
	$('.hide-this').click(function() {
		// hide this elemment that was just clicked
		$(this).hide()
	})
})