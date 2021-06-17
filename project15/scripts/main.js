function menuToggle() {
	var body = document.querySelector('body');
	var stringClass = 'nav-active';

	if(body.classList.contains(stringClass))
	    body.classList.remove(stringClass);
	else
	    body.classList.add(stringClass);
}

$(document).ready(function(){
	$('.js-team-slick').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		appendArrows: $('.slick-slider-nav'),
		appendDots: $('.slick-slider-dots'),
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			  }
			}
		  ]
	  });
	  
	  var filtered = false;
	  
	  $('.js-filter').on('click', function(){
		if (filtered === false) {
		  $('.js-team-slick').slick('slickFilter',':even');
		  $(this).text('Unfilter Slides');
		  filtered = true;
		} else {
		  $('.js-team-slick').slick('slickUnfilter');
		  $(this).text('Filter Slides');
		  filtered = false;
		}
	  });
});
