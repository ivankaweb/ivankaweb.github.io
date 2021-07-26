$(document).ready(function(){

    $('.popular-card').hover(function(){     
        $('.name',(this)).addClass('hover-link');    
    },     
    function(){    
        $('.name', (this)).removeClass('hover-link');     
	});
	
	$('.js-popular').slick({
		dots: false,
		infinite: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  });

	  $('.slider').slick({
		prevArrow: $('.js-sliderPrev'),
		nextArrow: $('.js-sliderNext')
	  });

	  $('form').on('click', '.toggle-password', function() {

		$(this).toggleClass('icon-eye icon-eye-show');
		
		var input = $(this).closest('.input-password').find('#password-input');
		input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
	});

	$('.guest-counter .btn-minus').on('click', function() {
		var input = $(this).closest('.guest-counter').find('input.number');
		var inputVal = parseInt(input.val());

		input.val(inputVal - 1);
	});

	$('.guest-counter .btn-plus').on('click', function() {
		var input = $(this).closest('.guest-counter').find('input.number');
		var inputVal = parseInt(input.val());

		input.val(inputVal + 1);
	});


	$('.contacts button').on('click', function() {
		var valid = true;
		var form = $(this).closest('form');
		// form.find('.error-msg').hide();
	
		$('input.required', form).each(function( index, element ) {
			if(!element.value){
				$(element).val($(element).data('err-msg'));
				$(element).addClass('invalid');
				valid = false;
			}
		});
		
		if(valid) 
			form.submit();
	});

	$('.form-field').click(function () {
		if(!$(this).hasClass('invalid'))
			return;

        $(this).val('');
		$(this).removeClass('invalid');
	});
	
	$('.toggle-calendar').on('click', function(e) {
		hidePopups();
		
		var $this = $(this);
		var target = $this.data('popup');
		var offset = $this.parents('form').find('.toggle-calendar').first().offset();
		$(target).addClass('active').css({left: offset.left, top: offset.top});
		e.stopPropagation();
	});

	$('.toggle-popup').on('click', function(e) {
		hidePopups();

		var target = $(this).data('popup');
		$(target).addClass('active');
		e.stopPropagation();
	});

	// If an event gets to the body
	$('body').click(function(){
		hidePopups();
	});

	function hidePopups(){
		$('.pop-up.active').fadeOut().removeClass('active');
		$('#calendar').fadeOut().removeClass('active');
	}
	
	// Prevent events from getting pass .popup
	$('.pop-up,#calendar').click(function(e){
		e.stopPropagation();
	});

	$('.calendar .dates button').on('click', function() {
		var calendarsContainer = $(this).parents('.calendar-container');
		var activeButtons = $('.calendar .dates button.active', calendarsContainer);
		if(activeButtons.length == 2){
			activeButtons.removeClass('active');
			$('.calendar .dates button', calendarsContainer).removeClass('day-from day-to day-between')
		}

		$(this).toggleClass('active');

		if($('.calendar .dates button.active', calendarsContainer).length == 2){
			$('.calendar .dates button.active', calendarsContainer).first().addClass('day-from').nextUntil('button.active').addClass('day-between');
			$('.calendar .dates button.active', calendarsContainer).eq(1).addClass('day-to')
			if($('.calendar', calendarsContainer).length == 2 && $('.calendar:eq(1) .dates button.active', calendarsContainer).length == 1){
				$('.calendar:eq(1) .dates button', calendarsContainer).first().addClass('day-between').nextUntil('button.active').addClass('day-between');
			}
		}
	});
});
	
 
  function menuToggle() {
	var body = document.querySelector('body');
	var stringClass = 'nav-active';

	if(body.classList.contains(stringClass))
	    body.classList.remove(stringClass);
	else
	    body.classList.add(stringClass);
}

let map, popup, Popup;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 14,
	  center: { lat: 59.865763, lng: 38.369028 },
	});
	
	const churchs = [
	  [
		  { lat: 59.856763, lng: 38.369028 }, 
		  'Кирилло-Белозерский монастырь', 
		  'content'
		],
	];

	const hotels = [
		[
			{ lat: 59.866763, lng: 38.389028 },
			'hotel 1', 
		  	'content2'
		]
	  ];

	/**
   * A customized popup on the map.
   */
  class Popup extends google.maps.OverlayView {
    position;
    containerDiv;
    constructor(position, content) {
      super();
      this.position = position;
      // This zero-height div is positioned at the bottom of the bubble.
      const bubbleAnchor = document.createElement("div");
      bubbleAnchor.classList.add("popup-bubble-anchor");
      bubbleAnchor.appendChild(content);
      // This zero-height div is positioned at the bottom of the tip.
      this.containerDiv = document.createElement("div");
      this.containerDiv.classList.add("popup-container");
      this.containerDiv.appendChild(bubbleAnchor);
      // Optionally stop clicks, etc., from bubbling up to the map.
      Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
    }
    /** Called when the popup is added to the map. */
    onAdd() {
      this.getPanes().floatPane.appendChild(this.containerDiv);
    }
    /** Called when the popup is removed from the map. */
    onRemove() {
      if (this.containerDiv.parentElement) {
        this.containerDiv.parentElement.removeChild(this.containerDiv);
      }
	}
	hide() {
		if (this.div) {
		  this.div.style.visibility = "hidden";
		}
	}
	show() {
		if (this.div) {
		  this.div.style.visibility = "visible";
		}
	  }
    /** Called each frame when the popup needs to draw itself. */
    draw() {
      const divPosition = this.getProjection().fromLatLngToDivPixel(
        this.position
      );
      // Hide the popup when it is far out of view.
      const display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
          ? "block"
          : "none";

      if (display === "block") {
        this.containerDiv.style.left = divPosition.x + "px";
        this.containerDiv.style.top = divPosition.y + "px";
      }

      if (this.containerDiv.style.display !== display) {
        this.containerDiv.style.display = display;
      }
    }
  }
	churchs.forEach(([position, title, popupId], i) => {
	  const marker = new google.maps.Marker({
		position,
		map,
		title: title,
		icon: 'img/icons/church.png',
		optimized: false,
		popupId: popupId
	  });

	  marker.addListener('click', () => {
		if(document.body.clientWidth <= 576){
			var popupDiv = document.getElementById(popupId);
			popupDiv.style.visibility = 'visible';
			return;
		}

		if(popup){
			popup.show();
			popup.setMap(map);
		} else{
			showPopup();
		}
	  });

	  showPopup();

	  function showPopup(){
		if(document.body.clientWidth <= 576){
			var popupDiv = document.getElementById(popupId);
			popupDiv.style.visibility = 'visible';

			var btnClose = popupDiv.getElementsByClassName('btn-close')[0];
			btnClose.addEventListener("click", () => {
				popupDiv.style.visibility = 'hidden';
			});
			return;
		}

		if(popup){
			popup.content.style.visibility = 'hidden';
			popup.setMap(null);
		}

		let popupContent = document.getElementById(popupId);
		popupContent.style.visibility = 'visible';

		popup = new Popup(
			new google.maps.LatLng(59.858263, 38.369028),
			popupContent
		);

		popup.setMap(map);

		var btnClose = popupContent.getElementsByClassName('btn-close')[0];
		btnClose.addEventListener("click", () => {
			popup.setMap(null);
		  });
	  }
	});

	hotels.forEach(([position, title, popupId], i) => {
		const marker = new google.maps.Marker({
		  position,
		  map,
		  title: title,
		  icon: 'img/icons/place.png',
		  optimized: false,
		  popupId: popupId
		});

		google.maps.event.addListener(marker,'mouseover',function(){
			$('img[src="'+this.icon+'"]').stop().addClass('hotel-hover');
		  });
	
		  google.maps.event.addListener(marker,'mouseout',function(){
			$('img[src="'+this.icon+'"]').stop().removeClass('hotel-hover');
		  });
		
		// marker.addListener('click', () => {
		//   popup = new Popup(
		// 	  new google.maps.LatLng(59.858263, 38.369028),
		// 	  document.getElementById(popupId)
		// 	);
  
		//   popup.setMap(map);
		// });
	  });	 
}

