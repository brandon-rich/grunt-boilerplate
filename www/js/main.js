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

/**
* Reset angled border width
*/

$(document).ready(function() {
	var wwidth = $(window).width();
	$(".angle:not(.rev)").css("borderLeftWidth", wwidth);
	$(".angle.rev").css("borderRightWidth", wwidth);
});

$(window).resize(function() {
	var wwidth = $(window).width();
	$(".angle:not(.rev)").css("borderLeftWidth", wwidth);
	$(".angle.rev").css("borderRightWidth", wwidth);
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