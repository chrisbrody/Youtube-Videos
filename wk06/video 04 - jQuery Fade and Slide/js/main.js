// when the page is ready, do this
$(document).ready(function() {	
	// ====== EXAMPLE 1 ======
	// When any tag with a class of button-fade-in is clicked, do this
	$('.button-fade-in').click(function() {
		// Fade In any element with a class of first-1 at default 300ms
		$(".first-1").fadeIn();
		/// Fade In any element with a class of second-1 at "slow" speed - 700ms
		$(".second-1").fadeIn("slow"); 
		// Fade In any element with a class of third-1 over 3000ms or 3s
		$(".third-1").fadeIn(3000); 
	})

	// ====== EXAMPLE 2 ======
	// When any tag with a class of button-fade-out is clicked, do this
	$('.button-fade-out').click(function() {
		// Fade Out any element with a class of first-2 at default 300ms
		$(".first-2").fadeOut();
		/// Fade Out any element with a class of second-2 at "slow" speed - 700ms
		$(".second-2").fadeOut("slow"); 
		// Fade Out any element with a class of third-2 over 3000ms or 3s
		$(".third-2").fadeOut(3000); 
	})

	// ====== EXAMPLE 3 ======
	// When any tag with a class of button-fade-toggle is clicked, do this
	$('.button-fade-toggle').click(function() {
		// Fade Toggle any element with a class of first-3 at default 300ms
		$(".first-3").fadeToggle();
		/// Fade Toggle any element with a class of second-3 at "slow" speed - 700ms
		$(".second-3").fadeToggle("slow"); 
		// Fade Toggle any element with a class of third-3 over 3000ms or 3s
		$(".third-3").fadeToggle(3000); 
	})

	// ====== EXAMPLE 4 ======
	// When any tag with a class of button-slide-up is clicked, do this
	$('.button-slide-up').click(function() {
		// Slide Up any element with a class of first-4 at default 300ms
		$(".first-4").slideUp();
		/// Slide Up any element with a class of second-4 at "slow" speed - 700ms
		$(".second-4").slideUp("slow"); 
		// Slide Up any element with a class of third-4 over 3000ms or 3s
		$(".third-4").slideUp(3000); 
	})

	// ====== EXAMPLE 5 ======
	// When any tag with a class of button-slide-down is clicked, do this
	$('.button-slide-down').click(function() {
		// Slide Down any element with a class of first-5 at default 300ms
		$(".first-5").slideDown();
		/// Slide Down any element with a class of second-5 at "slow" speed - 700ms
		$(".second-5").slideDown("slow"); 
		// Slide Down any element with a class of third-5 over 3000ms or 3s
		$(".third-5").slideDown(3000); 
	})

	// ====== EXAMPLE 6 ======
	// When any tag with a class of button-slide-toggle is clicked, do this
	$('.button-slide-toggle').click(function() {
		// Slide Toggle any element with a class of first-6 at default 300ms
		$(".first-6").slideToggle();
		/// Slide Toggle any element with a class of second-6 at "slow" speed - 700ms
		$(".second-6").slideToggle("slow"); 
		// FSlide Toggle any element with a class of third-6 over 3000ms or 3s
		$(".third-6").slideToggle(3000); 
	})

})