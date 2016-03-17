/*-------------------------------------------------------*\
    Modernizr
/*-------------------------------------------------------*/

if(!Modernizr.svg) {

    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });

}

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

$(document).ready(function(){
	$('.bxslider').bxSlider({
        mode: 'fade',
        controls: false
    });
});

/*-------------------------------------------------------*\
    Main
/*-------------------------------------------------------*/

/* Example of window resize function
$(window).resize(function(){
  make the changes here...
});
*/

// enquire.js

enquire.register("screen and (max-width: 767px)", {
    match : function() {

    },  
    unmatch : function() {

    }
});