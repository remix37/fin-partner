// This is where it all goes :)

//= require jquery/dist/jquery.min.js
//= require bootstrap-sass/assets/javascripts/bootstrap.min.js
//= require vegas/index.js
//= require owl.carousel/index.js

$(function() {

  // Vegas
  $("#home").vegas({
      slides: [
          { src: "./images/home/slide-1.jpg" },
          { src: "./images/home/slide-2.jpg" },
          { src: "./images/home/slide-3.jpg" }
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
              items:3
          },
          1000:{
              items:5
          }
      }
  })

});
