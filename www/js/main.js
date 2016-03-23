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

// Smooth page scroll to an anchor on the same page
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/*-------------------------------------------------------*\
    Main
/*-------------------------------------------------------*/

// Example of window resize function
$(window).resize(function(){
  //make the changes here...
});


// enquire.js example media query
enquire.register("screen and (max-width: 767px)", {
    match : function() {

    },  
    unmatch : function() {

    }
});