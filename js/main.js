$(document).ready(function(){
	$('.slider_header').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000,
	}); 


	$('#nav li a').click(function() {
		$('#nav li a').removeClass('active');
		$(this).addClass('active');
	});

	$("#nav-toggle").click(function() {
		$(this).toggleClass("active");
		$('#nav').slideToggle();
	});
});