$(document).ready(function () {
  $('#menu-btn').click(function () {
    $('body').toggleClass('nav-active');
  });

  var $slickElement = $('.js-slider');
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if (!slick.$dots) {
      return;
    }

    let total = $('.slick-slide', this).length;
    let active = $('.slick-slide', this).index($('.slick-active:last', this)) + 1;

    var $status = $(this).parents('.js-slider-container').find('.pagingSlick');
    $status.text(active + '/' + total);
  });

  $('#js-slider-main').slick({
    infinite: false,
    slidesToShow: 1,
    autoplay: false,
    dots: true,
    arrows: false,
    appendDots: $('.slick-slider-dots', this)
  });

  $('.js-product-slick').each(function () {
    $(this).slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      dots: true,
      arrows: false,
      appendDots: $(this).siblings('.slick-slider-dots'),
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3.1
          }
        },
        {
          breakpoint: 690,
          settings: {
            slidesToShow: 2.1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.1
          }
        }
      ]
    });
  })

  $('.js-document-slick').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: false,
    appendDots: $('.slick-slider-dots', this),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3.1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1
        }
      }
    ]
  });


  $('.dropbtn').click(function () {
    $(this).parent().toggleClass('dropdown-active');
  });
});