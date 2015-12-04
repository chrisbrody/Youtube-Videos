// when the page is ready, do this
$(document).ready(function() {	
	// ====== EXAMPLE 1 ======
	// When any tag with a class of button is clicked, do this
	$('.button').click(function() {
		// show all h1 tags
		$("h1").show(); 
	})

	// ====== EXAMPLE 2 ======
	// When any tag with a class of show is clicked, do this
	$('.show').click(function() {
		// show the tag that has the id of text
		$("#text").show(); 
	})
	// When any tag with a class of hide is clicked, do this
	$('.hide').click(function() {
		// hide the tag that has the id of text
		$("#text").hide(); 
	})

	// ====== EXAMPLE 3 ======
	// When any tag with a class of button-toggle is clicked, do this
	$('.button-toggle').click(function() {
		// toggle between the show and hide states on the tag with an id of text-again
		$("#text-again").toggle(); 
	})
})