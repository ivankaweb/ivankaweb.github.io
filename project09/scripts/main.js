$(document).ready(function(){
    $('.js-product').hover(function(){
      $('.js-product-card', this).show()
    },
     function(){
        $('.js-product-card', this).hide()
    });


    $('.js-category').hover(function(){
      $('.js-category-link', this).show()
    },
     function(){
        $('.js-category-link', this).hide()
    });
  });