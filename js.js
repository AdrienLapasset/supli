$(document).ready(function () {

  // Tiny Slider https://github.com/ganlanyuan/tiny-slider
  var slider = tns({
    container: '.features__slider',
    items: 1,
    edgePadding: 80,
    loop: false,
    swipeAngle: false,
    speed: 400,
    mouseDrag: true,
    navPosition: "bottom",
    controls: false,
    arrowKeys: true,
    gutter: 32,
    navAsThumbnails: true,
    navContainer: ".features__slider__navContainer",
  });

  // Add class "show" on elements
  $(window).scroll(function () {
    isVisible($('.trust__logos'))
    isVisible($('.comment'))
    isVisible($('.features'))
    isVisible($('.features__row-manage'))
    isVisible($('#cta-one'))
    isVisible($('#cta-two'))
    isVisible($('.why'))
    isVisible($('.partner'))
  });

  var isVisible = function (el) {
    var top_of_element = el.offset().top;
    var bottom_of_element = el.offset().top + el.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();
    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
      el.addClass("show");
    } else {
    }
  }

  // Anchor smooth scroll
  $("a[href*='#']:not([href='#'])").click(function () {
    if (
      location.hostname == this.hostname
      && this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top - 100 }, 1200);
      }
    }
  });
})
