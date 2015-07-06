$(document).ready(function() {
	// Adding new item
	$(this).keydown(function(event) {
		if (event.which == 13) {
			var newItem = $('input').val();
			// Create new item with value
			$(".items").append("<div class='item'><p class='item-name'>" + newItem + "</p><button name='done' class='done'>Done!</button><textarea class='item-desc' placeholder='Enter description here.'></textarea></div>");
		};
	});

	// Expanded the description
	$(".item").click(function() {
		if ($(this).hasClass("expanded")) {
			$(this).find("textarea").removeClass("visible");
			$(this).removeClass("expanded");
		} 
		else {
			$(this).addClass("expanded");
			var current = $(this);
			window.setTimeout(function() {
				current.find("textarea").addClass("visible");
			}, 1000);
		};
	})

	// Marking item done
	$("button").click(function(e) {
		e.stopPropagation();
		$(this).parent().addClass("completed");
		$(this).fadeOut(500, function() {
			$(this).remove();
		});
	});

	$(".item-desc").click(function(e) {
		e.stopPropagation();
	});
});