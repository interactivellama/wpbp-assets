/* - - - - - - - - - - - - - - - - - - - - - - - -
	Safe Toggle Slide
	show/hide menu (similar to bootstrap's NavBar JavaScript)
- - - - - - - - - - - - - - - - - - - - - - - - */

(function($) {
	"use strict";

	$.fn.safeToggle = function() {

		if (!$(this).hasClass('collapsed')) {
			$(this).slideUp('slow', function() {
				$(this).addClass('collapsed').slideDown(0);
			});
		} else {
			$(this).slideUp(0, function() {
				$(this).removeClass('collapsed').slideDown('fast');
			});
		}

	};
})(jQuery);