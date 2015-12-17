//when the page is ready, do this
$(document).ready(function() {
	//when the .button element is clicked, do this
	$(".button").click(function() {
		//toggle the class of fonts to all li
		$("li").toggleClass("fonts")
	});
})