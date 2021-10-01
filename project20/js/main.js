$(document).ready(function(){
    $('.dropdown-toggle').click(function(){
      $('.dropdown-menus').toggle();
    });
    $('.btn-close').click(function(){
      $('.dropdown-menus').hide();
    });
    
    $('#menu-mobile .main-menu .dropdown').click(function(){
      $('#menu-mobile .main-menu').hide();
      $('#menu-mobile .main-menu-category').show();
    });

    $('#menu-mobile .main-menu-category .dropdown').click(function(){
      $('#menu-mobile .main-menu-category').hide();
      $('#menu-mobile .main-menu-subcategory').show();
    });

    $('#menu-mobile .main-menu-category .js-back').click(function(){
      $('#menu-mobile .main-menu-category').hide();
      $('#menu-mobile .main-menu').show();
    });

    $('#menu-mobile .main-menu-subcategory .js-back').click(function(){
      $('#menu-mobile .main-menu-subcategory').hide();
      $('#menu-mobile .main-menu-category').show();
    });
        var $slickElement = $('.js-slick-product-sale');
      $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if(!slick.$dots){
          return;
        }
        var $status = $('.products-sale .js-slider-count');
        
        var i = (currentSlide ? currentSlide : 0) + 1;
        
        $status.find('.currentSlide').text(formatNumber(i));
        $status.find('.slidesCount').text('/' + formatNumber((slick.$dots[0].children.length)));
        $('.products-sale .slick-dots').remove();
      });

      function formatNumber(number){
        return number.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false
        })
      }

      $slickElement.slick({
        slidesToShow: 3,
        dots: true,
        appendDots: $('.products-sale .js-slider-count'),
        prevArrow: $('.products-sale .js-sliderPrev-arrow'),
        nextArrow: $('.products-sale .js-sliderNext-arrow'),
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              speed: 300,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
      var $slickElement2 = $('.js-slick-about-us');
      $slickElement2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if(!slick.$dots){
          return;
        }
        var $status = $('.about-us .js-slider-count');
        
        var i = (currentSlide ? currentSlide : 0) + 1;
        
        $status.find('.currentSlide').text(formatNumber(i));
        $status.find('.slidesCount').text('/' + formatNumber((slick.$dots[0].children.length)));
        $('.about-us .slick-dots').remove();
      });
      $slickElement2.slick({
        slidesToShow: 1,
        dots: true,
        appendDots: $('.about-us .js-slider-count'),
        prevArrow: $('.about-us .js-sliderPrev-arrow'),
        nextArrow: $('.about-us .js-sliderNext-arrow')
      });

  });
  function openNav() {
    document.getElementById('menu-mobile').style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById('menu-mobile').style.width = "0%";
  }
  