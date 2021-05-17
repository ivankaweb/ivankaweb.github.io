function menuToggle() {
	var body = document.querySelector('body');
	var stringClass = 'nav-active';

	if(body.classList.contains(stringClass))
	    body.classList.remove(stringClass);
	else
	    body.classList.add(stringClass);
}

function readMore() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("btnMore");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "подробнее..."; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "меньше..."; 
	  moreText.style.display = "inline";
	}
}
