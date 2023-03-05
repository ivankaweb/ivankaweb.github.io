$(document).ready(function(){
    $('.js-scroll-btn').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function(){
       var backBtn = $('.js-scroll-btn');   
      if ($(window).scrollTop()> 300){ 
        backBtn.show(400);
      }else{
        backBtn.hide(400);
      }
       
      });

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style',
        responsive: [
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

});

