$(document).ready(function(){
    $('.js-slider-news').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true
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
      $('.js-slider-product').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        dots: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true
              }
            },
            {
              breakpoint: 768,
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


      $('.toggle').click(function(){
        $('span', this).toggleClass('active');
        $($(this).data('target-id')).toggleClass('active');
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