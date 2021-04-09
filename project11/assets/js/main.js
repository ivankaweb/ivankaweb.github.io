$(document).ready(function(){
    $('div.btn-burger').on('click', function() {
        $(this).closest('header').find('div.header-mobile').toggleClass('active');
      
      });
      $('.products-card').hover(function(){
        $('.products-size', this).show()
    },
         function(){
             $('.products-size', this).hide()
         }
     );
     $('#categories label').click(function(){
      $('h3', this).toggleClass('dotsColor');
     });
      
$('.slickHeader').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    arrows: false,
    vertical: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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
  $('.slickProduct').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
  $('.slickBrands').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
  $('.slickProductWeek').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    arrows: false
   
  });
  $(window).scroll(function(){
    var btnTop = $('.btn-scroll');   
   if ($(window).scrollTop()> 400){ 
     btnTop.show(400);
   }else{
     btnTop.hide(400);
   }
    
   });

   $('.btn-scroll').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
      
});