window.onload = function () {
	document.body.classList.add('loaded');
}
window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
}
$(document).ready(function(){
	 //$('.nav-list ul').hide();
	// $(".nav-list a>ul.nav-link").hover(function () {
	// 	$(this).show()
	// 	$(this).parent(".nav-list").children("ul").slideToggle("200");
	// 	$(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");
	// });
	// $('.js-team-slick').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 3,
	// 	arrows: false,
	// 	dots: true,
	// 	appendArrows: $('.slick-slider-nav'),
	// 	appendDots: $('.slick-slider-dots'),
	// 	responsive: [
	// 		{
	// 		  breakpoint: 1024,
	// 		  settings: {
	// 			slidesToShow: 2,
	// 			slidesToScroll: 2,
	// 			infinite: true,
	// 			dots: true
	// 		  }
	// 		}
	// 	  ]
	//   });
	  
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

	  $('.menu-icon').on('click', function(){
		var body = $('body');

		if(body.hasClass('nav-active')){
			body.removeClass('nav-active');
			$('#products-menu-mobile').removeClass('active');
			$('.header-mobile .nav-mobile-list-item').removeClass('active');
		} else{
			body.addClass('nav-active');
		}
	  });

	  $('.btn-arrow.toggle').on('click', function(){
		  var navItem = $(this).closest('.nav-mobile-list-item');
		  navItem.siblings().removeClass('active');
		if (navItem.hasClass('active')){
			navItem.removeClass('active');
			navItem.find('.nav-mobile-list-item.active').removeClass('active');
		} else {
			navItem.addClass('active');
		}
	  });

	  $('.toggle-submenu').on('click', function(){
		var submenuId = $(this).data('submenu-id');

		$(this).closest('.nav-mobile-list-item').toggleClass('active');
		$(submenuId).toggleClass('active');
	  });
});
