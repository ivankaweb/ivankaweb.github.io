$(document).ready(function () {
    $('.js-btn-nav').click(function(){
        $('ul.nav').fadeToggle(600);
        $('div.mobile-nav').css({
            'display' : 'flex', 'flex-direction' : 'column', 'justify-content' : 'center'
            })

        if($('i', this).hasClass('fa-align-justify')) {
            $(this).html('<i class="fas fa-align-right"></i>')
           
        } else {
            $(this).html('<i class="fas fa-align-justify"></i>')
        }
    });
  
    $(window).scroll( function () {
        var btn = $('.scroll-back');
        if ($(window).scrollTop() > 300) {
            btn.show();
          } else {
            btn.hide();
          }
        
        });

    $('.scroll-back').click(function(){
        $(window).scrollTop(0);
    });

    $('.js-portfolio').hover(function(){ 
            $('.portfolio-skills-text', this).show(); 
        },
            function(){ 
                $('.portfolio-skills-text', this).hide(); 
        }
    );


});
