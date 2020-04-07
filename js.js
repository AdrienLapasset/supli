$(document).ready(function () {

  var slider = tns({
    container: '.features__slider',
    items: 2,
    center: true,
    loop: false,
    swipeAngle: false,
    speed: 400,
    mouseDrag: true,
    navPosition: "bottom",
    controls: false,
    arrowKeys: true,
    gutter: 40,
    navAsThumbnails: true,
    navContainer: ".features__slider__navContainer",
    // fixedWidth: 190,
  });


  var logos = $('.trust__logos');

  $(window).scroll(function () {
    var top_of_element = logos.offset().top;
    var bottom_of_element = logos.offset().top + logos.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
      logos.addClass("trust__logos--show");
    } else {
    }
  });


})
