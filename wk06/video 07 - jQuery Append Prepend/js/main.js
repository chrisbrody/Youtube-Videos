//when the page is ready, do this
			$(document).ready(function() {
				//when the .button element is clicked, do this
				$(".button").click(function() {
					//prepend a new list item to all ol elements
					$("ol").prepend("<li>four</li>")
				});
			})