$(document).ready(function(){

  $('.dropdown-toggle').click(function () {
    $(this).parent().find('.dropdown-menu').toggleClass('hide');
  });

  $('.tab-btn').click(function () {
    var $this = $(this);
    if($this.hasClass('active'))
      return;

     $this.parent().find('.tab-btn').toggleClass('active');
     $this.parent().parent().find('.tab').toggleClass('show');
  });

  $(document).mouseup(function(e) 
  {
    var container = $('.dropdown-menu').parent();

    if (!container.is(e.target) && container.has(e.target).length === 0) 
        container.find('.dropdown-menu').addClass('hide');
  });


  var $slickElement = $('.js-slick-tariffs');
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if(!slick.$dots){
      return;
    }
    var $status = $('.js-slider-count');
    
    var i = (currentSlide ? currentSlide : 0) + 1;
    
    $status.find('.currentSlide').text(formatNumber(i));
    $status.find('.slidesCount').text('/' + formatNumber((slick.$dots[0].children.length)));
    $('.slick-dots').remove();
  });

  $slickElement.slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.js-slider-count'),
    speed: 300,
    prevArrow: $('.js-sliderPrev-trariff'),
    nextArrow: $('.js-sliderNext-trariff'),
    cssEase: 'linear',  
    variableWidth: true,
    variableHeight: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          speed: 300,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


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

    function formatNumber(number){
      return number.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
    }
    var sheet = document.createElement('style'),  
    $rangeInput = $('.range input'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

  document.body.appendChild(sheet);

  var getTrackStyle = function (el) {  
    var curVal = el.value,
        val = (curVal - 1) * 10,
        style = '';
    

    $('.range-labels li').removeClass('active selected');
    
    var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
    
    curLabel.addClass('active selected');
    curLabel.prevAll().addClass('selected');
    

    for (var i = 0; i < prefs.length; i++) {
      style += '.range {background: linear-gradient(to right, #FBFF2B 0%, #FBFF2B ' + val + '%, #454545 ' + val + '%, #454545 100%)}';
      style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #FBFF2B 0%, #FBFF2B ' + val + '%, #454545 ' + val + '%, #454545 100%)}';
    }

    return style;
  }

  $rangeInput.on('input', function () {
    sheet.textContent = getTrackStyle(this);
  });


  $('.range-labels li').on('click', function () {
    var index = $(this).index();
    
    $rangeInput.val(index + 1).trigger('input');
    
  });

});

 
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