$(document).ready(function () {
    $('.car-brands-slider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:6,
        slidesToScroll: 6,
        prevArrow: $('.js-sliderPrev-cars'),
        nextArrow: $('.js-sliderNext-cars'),
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
      $('.our-works-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,

        prevArrow: $('.js-sliderPrev-ourWorks'),
        nextArrow: $('.js-sliderNext-ourWorks')
        
      });


});