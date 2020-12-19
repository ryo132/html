$(document).on('ready', function() {
  $(".full-screen").slick({
    centerMode: true,
    centerPadding: '5%',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
  });
});

$(function() {
	$(window).on('load scroll', function() {
		var scrollPos = $(this).scrollTop();
		if ( scrollPos > 80 ) {
			$('header').addClass('is-animation');
		} else {
			$('header').removeClass('is-animation');
		}
	});
});	