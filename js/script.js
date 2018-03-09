$(document).ready(function() {

	$('#form1').submit(function(e) {
		e.preventDefault();
		$(this).html('<p>Thank you. Your message will be reviewed and answered as soon as possible. </p>');

	});	


	$('#form2').submit(function(e) {
		e.preventDefault();
		$(this).html('<h3 class="col-sm-offset-4">Thank you for subscribing</h3>')

	});

});