// Modified code from https://css-tricks.com/snippets/jquery/smooth-scrolling/

$('a[href*="#"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('.parallax').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

$("#js-rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 2000,
    complete: function () {
    }
});

var $design = $('.design-waypoint');
var $mockup = $('.mockup-animate');


$design.waypoint(function (direction) {
  if (direction == 'down') {
    $mockup.addClass('js-mockup-animate')
  }

  if (direction == 'up') {
    $mockup.removeClass('js-mockup-animate')
  }
}, { offset: '25%', context: '.parallax' });
