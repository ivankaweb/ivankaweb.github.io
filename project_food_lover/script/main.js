/* MODAL */
let detailsRecipeModal = document.getElementById('detailsRecipeModal');

let recipeItemLinks = document.querySelectorAll('.find-recipe-result-item');


recipeItemLinks.forEach(link => {
  link.addEventListener('click', e => {
    detailsRecipeModal.style.display = 'block';
  })
})

var btnCloseModal = document.getElementById('btnCloseModal');

btnCloseModal.onclick = function() {
  detailsRecipeModal.style.display = 'none';

}

window.onclick = function(event) {
  if (event.target == detailsRecipeModal) {
    detailsRecipeModal.style.display = 'none';
  }
}


/* IMAGES BACKROUND SRC */
let listImages = document.getElementsByClassName('js-image-src');

if(listImages){
	for (let i = 0; i < listImages.length; i++) {
		let src = listImages[i].getAttribute('data-image-src');
		listImages[i].style.backgroundImage="url('" + src + "')";
	}
}


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

