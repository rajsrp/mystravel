var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 5 seconds
}


function myFunction() {
	    var x = document.getElementById("demo");
	        if (x.className.indexOf("w3-show") == -1) {
			        x.className += " w3-show";
				    } else { 
					            x.className = x.className.replace(" w3-show", "");
						        }
}




