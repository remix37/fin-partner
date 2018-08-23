// This is where it all goes :)

//= require jquery/dist/jquery.min.js
//= require bootstrap-sass/assets/javascripts/bootstrap.min.js
//= require vegas/index.js
//= require owl.carousel/index.js
//= require country-select-js/src/js/countrySelect.js
//= require jquery.cookie/jquery.cookie.js
//= require cookieCuttr/jquery.cookiecuttr.js

$(function() {

  // Vegas
  $("#home").vegas({
      slides: [
          { src: "../images/home/slide-4.jpg" },
          { src: "../images/home/slide-1.jpg" },
          { src: "../images/home/slide-2.jpg" },
          { src: "../images/home/slide-3.jpg" }
      ]
  });

  // Scroll
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
  	var page = $(this).attr('href'); // Page cible
    $('html, body').animate( { scrollTop: $(page).offset().top }, 750);
  	return false;
  });

  // Carousel
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
      }
  })

  //Cookies
  $.cookieCuttr();

  if (jQuery.cookie('cc_cookie_accept') == "cc_cookie_accept") {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-118045796-2']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document. getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  }


});
