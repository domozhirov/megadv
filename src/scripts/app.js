$(function () {
  const $navigationWrapper = $('.site-navigation-wrapper');

  // header-menu
  resizeController([0, 1023], 1024, function() {
    $navigationWrapper.pudgeJS();
  }, function () {
    $navigationWrapper.pudgeJS('destroy');
  });

  $('.site-navigation-button').click(function (event) {
    event.preventDefault();

    $navigationWrapper.pudgeJS('toggle');
  });

  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true
  });
});
