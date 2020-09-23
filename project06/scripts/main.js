$(document).ready(function(){

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

    $('.js-gallery').hover(function(){
        $('.js-card-gallery', this).show()
    },
         function(){
             $('.js-card-gallery', this).hide()
         }
     );

     

    });