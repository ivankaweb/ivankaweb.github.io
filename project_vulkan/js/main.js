$(document).ready(function(){


  //**************** SIGN-UP CLOSE *************** */
  $('.form-container .btn-close').click(function() {
    $(this).closest('.form-container').hide();
  });

  //**************** SIGN-UP *************** */
  $('.sign-up button').click(function() {
    $('.form-container').show();
  });
  //**************** OUR-ADVANTAGES-DESC *************** */
  $('.our-advantages-desc-item .icon-plus-conteiner').click(function() {
    $(this).closest('.our-advantages-desc-item').toggleClass('show-desc');
  });

  //**************** BTN-CONTACTS *************** */
  $('.btn-block a.btn').click(function() {
    $(this).closest('.btn-block').find('a.btn.active').removeClass('active');
    $(this).addClass('active');
  });


  //**************** OUR-PARTNERS-BTN-MORE *************** */
  $('span.btn-read-more').click(function() {
    $(this).closest('.our-partners-item').find('.about-partner-desc .more-text').toggle();
  });


  //**************** TEAMS-DESC *************** */s
    $('.teams-card').hover(
      function() {
        $('.teams-card-desc', this).fadeIn( 'slow' );
      }, function() {
        $('.teams-card-desc', this).fadeOut( 'slow' );
      }
    );

//**************** COUNTER-NUMBER *************** */

  $.fn.advantagesNumbCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);
    
    var end = thisElement.data('number');

    $({count: settings.start}).animate({count: end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};

function numberAnimate(){
  var isComplete = 0;
      $(window).scroll(function () {
        var box = $('#counter-box');
        if(box.length === 0)
          return;
        
        var oTop = box.offset().top - window.innerHeight + 100;
        if (isComplete == 0 && $(window).scrollTop() > oTop) {
          $('#counter-box .number').each(function(){
            $(this).advantagesNumbCounter({duration: 2500});
          })
          isComplete = 1;
        }
    });
};
numberAnimate();

  $('.js-slick-main').slick({
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });


  $('.js-slick-gallery').slick({
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  initScroll();
  
  $(window).on('resize', function(){
    initScroll();
  });

    //**************** SCROLL-BODY *************** */
  function initScroll(){
    let progressRight = document.getElementById('progressbar-right');
    let progressLeft = document.getElementById('progressbar-left');
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    // let totalHeight = (document.body.scrollHeight - window.screen.availHeight) * window.devicePixelRatio - 50;
    window.onscroll = function(){
      let progressHeight = (window.scrollY / totalHeight) * 100;
      let height = progressRight.style.height;
      const oldProgressHeight = parseFloat(height.replace('%', ''));
      progressRight.style.height = progressHeight + "%";
      progressLeft.style.height = progressHeight + "%";

      if(oldProgressHeight > progressHeight && !progressRight.classList.contains('plane-transform')){
        progressRight.classList.add('plane-transform'); 
        progressLeft.classList.add('plane-transform'); 
      } else if(oldProgressHeight < progressHeight && progressRight.classList.contains('plane-transform')){
        progressRight.classList.remove('plane-transform'); 
        progressLeft.classList.remove('plane-transform'); 
      }
    }

    window.addEventListener('scroll', () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      if (Math.ceil(scrolled === scrollable) && !progressRight.classList.contains('plane-transform')){
        progressRight.classList.add('plane-transform'); 
        progressLeft.classList.add('plane-transform'); 
      }else if(scrolled === 0 && progressRight.classList.contains('plane-transform')){
        progressRight.classList.remove('plane-transform'); 
        progressLeft.classList.remove('plane-transform'); 
      }
    });
  }
});
  
//**************** LOADED *************** */
  window.onload = function () {
    document.body.classList.add('loaded-hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded-hiding');
    }, 500);
  }



//**************** MOBILE-MENU *************** */
function openNav(id) {
  document.getElementById(id).style.width = "100%";
}

function closeNav(id) {
  document.getElementById(id).style.width = "0%";
}


var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("select-toggle");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
 
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
  
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {

      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {

  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);