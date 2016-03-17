// Set Headroom classes and offset
$(document).ready(function() {
	$(".navbar-fixed-top").headroom({
	  "tolerance": 5,
	  "offset": 205,
	  "classes": {
	    "initial": "animated",
	    "pinned": "slideDown",
	    "unpinned": "slideUp",
	    "top": "headroom--top",
	    "notTop": "headroom--not-top"
	  }
	});
});

// Call the bxSlider
$(document).ready(function(){
	$('.bxslider').bxSlider({
        mode: 'fade',
        controls: false
    });
});

/*-------------------------------------------------------*\
    Main
/*-------------------------------------------------------*/

// Example of window resize function
$(window).resize(function(){
  make the changes here...
});


// enquire.js example media query
enquire.register("screen and (max-width: 767px)", {
    match : function() {

    },  
    unmatch : function() {

    }
});