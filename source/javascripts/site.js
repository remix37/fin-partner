// This is where it all goes :)

//= require jquery/dist/jquery.min.js
//= require bootstrap-sass/assets/javascripts/bootstrap.min.js
//= require vegas/dist/vegas.min.js

$(function() {
  $("#home").vegas({
      slides: [
          { src: "./images/slide1.jpg" },
          { src: "./images/slide2.jpg" },
          { src: "./images/slide3.jpg" }
      ]
  });
});
