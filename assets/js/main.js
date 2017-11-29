/*! Plugin options and other jQuery stuff */

// FitVids options
$(function () {
  $("article").fitVids();
});

// Table of Contents toggle
$(function () {
  $(".toc h3").click(function () {
    $("#drawer").toggleClass("hidden");
  });
});

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// $('head').append(
//   '<style type="text/css">body {display:none;}'
// );
// $(window).load(function() {
//   $('body').delay(100).fadeIn("slow");
// });

// Magnific-Popup options
$(document).ready(function () {
  $('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 10, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});

// ページのロードが終わった後の処理
$(window).on('load',function(){
  $('#js-loader').delay(300).fadeOut(400);
});

$(function(){
  setTimeout(function(){
    $('#js-loader').delay(300).fadeOut(400);
  }, 5000);
});
