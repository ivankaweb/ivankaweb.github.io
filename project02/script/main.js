
$(document).ready(function () {
    $('.js-btn-search').click(function(){
      $('.has-search').toggleClass('d-inline-block');
    });

    $('.js-mobile-btn').click(function(){
      var svg = $('svg', this);
      $('.section-menu').toggle();
      $('.section-menu ul.menu').toggleClass('flex-column text-center');
      svg.toggleClass('fa-toggle-on fa-toggle-off');
    })

    $('.js-works-buttons button').click(function(){
       var buttonActive = $(this);
       var myAttr = buttonActive.attr('filter');

       if(myAttr == "all"){
         $('.site-cards div').show(300);
       }else{
         $('.site-cards div').hide(300);
         $('div[filter="'+ myAttr +'"]').show(300);
       }
       $('.js-works-buttons button').removeClass('button-active');
       buttonActive.addClass('button-active');
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
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
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

     $(window).scroll(function () {
       if($(this).scrollTop() != 0)
          $('#toTop').fadeIn();
        else
          $('#toTop').fadeOut();  
     }) 
     $('#toTop').click(function(){
       $('html, body').animate({
         scrollTop: 0
       }, 800);
     })

});
