$(document).ready(function() {
	// $("body").droppable();

	// Adding new item
	$(this).keydown(function(event) {
		if (event.which == 13 && $('input').val() != '') {
			var newItem = $('input').val();
			// Create new item with value
			$(".items").append("<div class='item' style='display: none'><p class='item-name'>" + newItem + "</p><button name='done' class='done'>Done!</button><textarea class='item-desc' placeholder='Enter details here.'></textarea></div>");
			$(".item").show('fast');
			$(".items").sortable({
				containment: '.main',
				items: '.item',
				axis: 'y'
			});
			$(".item").disableSelection();
			$('input').val('');
		};
	});

	// Expanded the description
	$(".items").on('click', '.item', function() {
		if ($(this).hasClass("expanded")) {
			$(this).find("textarea").removeClass("visible");
			$(this).removeClass("expanded");
		} 
		else {
			$(this).addClass("expanded");
			var current = $(this);
			window.setTimeout(function() {
				current.find("textarea").addClass("visible");
			}, 500);
		};
	});

	// Marking item done
	$(".items").on('click', 'button', function(e) {
		e.stopPropagation();
		$(this).parent().addClass("completed");
		$(this).fadeOut(500, function() {
			$(this).remove();
		});
	});

	// Prevent clicks on description from collapsing item
	$(".items").on('click', '.item-desc', function(e) {
		e.stopPropagation();
	});
});