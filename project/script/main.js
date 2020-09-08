$(document).ready(function(){
   $('.js-portfolio').hover(function(){
       $('.portfolio-desc', this).show()
   },
        function(){
            $('.portfolio-desc', this).hide(200)
        }
    );

    $('.js-sctive-link').hover(handlerIn, handlerOut);
    
    function handlerIn(){
        $('.services-link-text', this).show() 
        $('.services-link-line', this).animate({left: '70px'});
    }
    function handlerOut(){
        $('.services-link-line', this).animate({left: '0px'});
        $('.services-link-text', this).hide()
    }
  });