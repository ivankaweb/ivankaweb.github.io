$(document).ready(function () {

  $('.js-btn-color a').click(function () {
    var buttonActive = $(this);
    var myAttr = buttonActive.attr('filter');

    if (myAttr == buttonActive) {
      $('.image div').show(500);
    } else {
      $('.image div').hide(500);
      $('div[filter="' + myAttr + '"]').show(500);
    }
    $('.js-btn-color a').removeClass('btn-active');
    buttonActive.addClass('btn-active');
  });

  $('.js-btn-small a').click(function () {
    var buttonActive = $(this);
    var myAttr = buttonActive.attr('filter');

    if (myAttr == buttonActive) {
      $('.image div').show(900);
    } else {
      $('.image div').hide(500);
      $('div[filter="' + myAttr + '"]').show(900);
    }

    $('.js-btn-small a').removeClass('btn-active-small');
    buttonActive.addClass('btn-active-small');
  });

  $('.dropbtn').click(function () {
    $('div .dropdown-content').toggle('slow', function () {
      $('a .dropdown-content').css({ 'display': 'inline-block' });

    });
  });


  $('.js-btn-nav').click(function () {
    $('ul.menu').toggle(900);
    $('nav.mobile-nav').css({
      'display': 'block'
    })

    if ($('i', this).hasClass('fa-align-justify')) {
      $(this).html('<i class="fas fa-align-justify"></i>')

    } else {
      $(this).html('<i class="fas fa-align-center"></i>')
    }
  });

});