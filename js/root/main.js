/* Project: 
   Author: Stephen M James

	Import libraries/dependent scripts into one file and minify with CodeKit
	Visit http://www.incident57.com/codekit for more information

	Vendor
	@codekit-prepend "wpbp-assets/js/vendor/smartresize.js";
	@codekit-prepend "wpbp-assets/js/vendor/console-wrapper.js";
  @codekit-prepend 'wpbp-assets/js/vendor/bootstrap/js/bootstrap.js';
  @codekit-prepend 'wpbp-assets/js/vendor/chosen/chosen.jquery.js';
  @codekit-prepend 'wpbp-assets/js/vendor/formidable/formidable.js';	
  @codekit-prepend 'wpbp-assets/js/vendor/bxslider-4-master/jquery.bxslider.js';

  Custom
  @codekit-prepend 'wpbp-assets/js/formidable-forms.js';
	@codekit-prepend "wpbp-assets/js/jquery.safetoggle.js";

*/

/* jshint devel:true */
/* global Modernizr */

/*------------------------------------------
=DOCUMENT OUTLINE
--------------------------------------------

	Everything is wrapped in a jquery call for encapsulation. Functions first, then main statements that call the functions.

*/

jQuery(function() {
	"use strict";

	// start here


/*	if (!Modernizr.touch) {

	} else {

	} */
	
	// add size to file upload button for FireFox
	$('.frm_fileupload .file').attr('size', 10);

	// prevent Flash of unstyled content by fading it in
	$('.fouc').animate({
		opacity: 1
	}, 1000);

});

$(document).ready(function() {
	"use strict";

});