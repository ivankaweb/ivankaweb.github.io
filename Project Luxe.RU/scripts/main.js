$(document).ready(function () {
    $('.multiple-items').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:6,
        slidesToScroll: 6,
        prevArrow: $('.prevArrow'),
        nextArrow: $('.nextArrow'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
    
        ]
      });
      $('.js-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.prevArrow'),
        nextArrow: $('.nextArrow')
        
      });


});