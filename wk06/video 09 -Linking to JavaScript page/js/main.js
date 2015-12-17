//when the page is ready, do this
$(document).ready(function() {
	//when the .button element is clicked, do this
	$(".button").click(function() {
		//toggle the class of fonts on all li
		$("li").toggleClass("fonts")
	});
})