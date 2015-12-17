//when the page is ready, do this
		$(document).ready(function() {
			//when the .button element is clicked, do this
			$(".button").click(function() {
				//animate all div with the contained rules
				$("div").animate({
					left: '300px',
					width: '500px',
					height: '400px'
				})
			});
		})