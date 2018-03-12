// This is where it all goes :)

//= require jquery/dist/jquery.min.js
//= require bootstrap-sass/assets/javascripts/bootstrap.min.js
//= require vegas/dist/vegas.min.js

// Vegas
$(function() {
  $("#home").vegas({
      slides: [
          { src: "./images/slide-1.jpg" },
          { src: "./images/slide-2.jpg" },
          { src: "./images/slide-3.jpg" }
      ]
  });
});


// Scroll
$(document).ready(function() {
	$('.js-scrollTo').on('click', function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
    $('html, body').animate( { scrollTop: $(page).offset().top }, 750);
		return false;
	});
});
