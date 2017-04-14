$(document).ready(function(){
  $(window).scroll(function(){

var wScroll = $(this).scrollTop();
console.log(wScroll);
// SCROLL TO TOP BUTTON
        // Show button when the window is a certain amount from the top
if(wScroll > $('body').height() / 3) {
  console.log($('body').height()/3)
  $('.scrollTop').css( 'opacity', '1');
};
    // And disappear when the scroll is higher than a certain value
    if(wScroll < $('body').height() / 3) {
      $('.scrollTop').css('opacity', '0');
    }
        // When the button is clicked
        $('.scrollTop').click(function(){
        // scroll the window to the top of the document
          $('html, body').animate({scrollTop : '0'}, 2000);
            // Problem: Causes the window to freeze
            $(window).on('mousewheel', function() {
              $('html, body').stop();
            });
            // Solution: End the animation
    });

      // LAZY LOAD IMAGES
                // If window is below a certain distance
          if(wScroll > $('.newsEventsSection').offset().top - ($(window).height()/4)) {

                  $('.news').each(function(i){
                // Make image divs appear one at a time
                    setTimeout(function(){
                    $('.news').eq(i).addClass('isShowing');
                  }, 150 * (i+1));
                  });
                };




  });
});
