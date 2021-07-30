function menuToggle() {
	var body = document.querySelector('body');
	var stringClass = 'nav-active';

	if(body.classList.contains(stringClass))
	    body.classList.remove(stringClass);
	else
	    body.classList.add(stringClass);
}
//loaded
 window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}

$(document).ready(function(){
     
	//Добавили классы к иконкам и тексту в ZeroBlock
	$('a[href="#placeicon"]').addClass('placeicon').hide();
	$('a[href="#placetext"]').addClass('placetext');
	
	$('.link_scroll').click(function () {
        var link = $(this).attr('href');
        link = link.slice(1);
        $('html,body').animate({scrollTop:$("#"+link).offset().top}, 1000);
        return false;
    });
  
	 ymaps.ready(function () {
	  var myMap = new ymaps.Map('map', {
			  //Координаты центра при запуске карты
			  center: [60.0477289,30.2788781],
			  //Увеличение карты при запуске
			  zoom: 10
		  }, {
			  searchControlProvider: 'yandex#search'
		  }),
  
		  // Создаём макет содержимого.
		  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			  '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		  ),
  //****************************************
		  //Задаём координаты нашей основной точки
		  myPlacemarkWithContent1 = new ymaps.Placemark([59.9503702,30.4075439], {
			  hintContent: 'hint1'
		  }, {
			  // Опции.
			  // Необходимо указать данный тип макета.
			  iconLayout: 'default#imageWithContent',
			  // Своё изображение иконки метки.
			  iconImageHref: 'img/maps-and-flags.svg',
			  // Размеры метки.
			  iconImageSize: [30, 30],
			  // Смещение левого верхнего угла иконки относительно
			  // её "ножки" (точки привязки).
			  iconImageOffset: [-15, -15],
			  // Смещение слоя с содержимым относительно слоя с картинкой.
			  iconContentOffset: [15, 15],
			  // Макет содержимого.
			  iconContentLayout: MyIconContentLayout
		  });
		  
  //****************************************        
		  //Задаём координаты нашей второй точки
		  myPlacemarkWithContent2 = new ymaps.Placemark([60.008098,30.1025646], {
			  hintContent: 'hint2'
		  }, {
			  // Опции.
			  // Необходимо указать данный тип макета.
			  iconLayout: 'default#imageWithContent',
			  // Своё изображение иконки метки.
			  iconImageHref: 'img/maps-and-flags.svg',  
			  // Размеры метки.
			  iconImageSize: [30, 30],
			  // Смещение левого верхнего угла иконки относительно
			  // её "ножки" (точки привязки).
			  iconImageOffset: [-15, -15],
			  // Смещение слоя с содержимым относительно слоя с картинкой.
			  iconContentOffset: [15, 15],
			  // Макет содержимого.
			  iconContentLayout: MyIconContentLayout
		  });
		  
  //****************************************        
		  //Задаём координаты нашей третьей точки
		  myPlacemarkWithContent3 = new ymaps.Placemark([60.0857279,31.0188174], {
			  hintContent: 'hint3'
		  }, {
			  // Опции.
			  // Необходимо указать данный тип макета.
			  iconLayout: 'default#imageWithContent',
			  // Своё изображение иконки метки.
			  iconImageHref: 'img/maps-and-flags.svg',  
			  // Размеры метки.
			  iconImageSize: [30, 30],
			  // Смещение левого верхнего угла иконки относительно
			  // её "ножки" (точки привязки).
			  iconImageOffset: [-15, -15],
			  // Смещение слоя с содержимым относительно слоя с картинкой.
			  iconContentOffset: [15, 15],
			  // Макет содержимого.
			  iconContentLayout: MyIconContentLayout
		  });     
		  
		  
  //Добавляем объекты на карту
	  myMap.geoObjects
		   .add(myPlacemarkWithContent1)
			.add(myPlacemarkWithContent2)
			 .add(myPlacemarkWithContent3);
 
		//При клике миниатюру 1         
		   // myPlacemarkWithContent1.events.add('click', function () { 
		   //       $('[class$="activebaloon"]').removeClass('activebaloon');
		   //       $('[class$="-image-with-content"]:eq(0)').addClass('activebaloon');
		   //       $('.placeicon').hide();$('.placeicon:eq(0)').show(200);
		   //       $('.placetext').text('БЕЛАЯ СКАЛА');
		   //     setTimeout(function(){$(".showsform1")[0].click();}, 500);  
		   // });
		   // //При клике миниатюру 2
		   // myPlacemarkWithContent2.events.add('click', function () {
		   //       $('[class$="activebaloon"]').removeClass('activebaloon');
		   //       $('[class$="-image-with-content"]:eq(1)').addClass('activebaloon');
		   //       $('.placeicon').hide();$('.placeicon:eq(1)').show(200);
		   //       $('.placetext').text('КОЯШСКОЕ ОЗЕРО');
		   //     setTimeout(function(){$(".showsform2")[0].click();}, 500);  
		   // });
		   // //При клике миниатюру 3
		   //  myPlacemarkWithContent3.events.add('click', function () {
		   //       $('[class$="activebaloon"]').removeClass('activebaloon');
		   //       $('[class$="-image-with-content"]:eq(2)').addClass('activebaloon');
		   //       $('.placeicon').hide();$('.placeicon:eq(2)').show(200);
		   //       $('.placetext').text('БАЛАКЛАВСКАЯ БУХТА');
		   //     setTimeout(function(){$(".showsform3")[0].click();}, 500);  
		   // });
		   
  });
  
  });
  
  //scroll
$(window).scroll(function () {
 
    //Стрелка к началу страницы
    if ($(this).scrollTop() > 768) {
        $('#to-top').fadeIn('slow');
    } else {
        $('#to-top').fadeOut();
    }
});
$('#to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 400);
    return false;
});

function metrika_goal(goal) {
	console.log(goal);
    //yaCounter39303040.reachGoal(goal);
}
function ajax_f(id) {
    var tel = $('#tel-'+id).val();

    if (tel == '') {
        $('#tel-'+id).addClass('error');
        $('#tel-'+id).attr('placeholder', 'Введите телефон');
        $('#tel-'+id).focus();
        setTimeout(function() {
            $('#tel-'+id).removeClass('error');
        }, 2500);
        return false;
    }
	var cel = $('#cel-' + id).val();
    var msg = $("#form-" + id).serializeArray();

    $.ajax({
        type: "POST",
        url: "ajax/proc.php",
        data: msg,
        success: function(data) {
			$("#form-" + id).fadeOut();
			$('.modal-header h5').html('Спасибо за заявку!<br>Скоро мы с вами свяжемся.');	
        
            $("#form-"+id)[0].reset();
            if (cel != '') {
                metrika_goal(cel);
            } else{
				metrika_goal('allorders');
			}
            
			setTimeout(function(){
				$('#collbackModal').modal('hide')
				$("#form-" + id).fadeIn();
				$('.modal-header h5').html('Узнать подробности <span>Оставьте свой телефон и мы вам перезвоним!</span>');	
			}, 5000);
        },
        error: function(xhr, str) {
            $('.btn').attr('disabled', false);
            alert("Возникла ошибка!");
        }
    });
}