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

  const $owlCarousel = $('.owl-carousel');
  const owlCarouselCommonOptions = {};

  $owlCarousel.each((index, item) => {
    let $slider = $(item);
    let owlCarouselOptions;

    if ($slider.hasClass('owl-products')) {
      owlCarouselOptions = Object.assign(owlCarouselCommonOptions, {
        loop: false,
        nav: false,
        dots: true,
        margin: 30,
        responsive: {
          0: {
            items: 1,
          },
          480: {
            items: 2,
          },
          768: {
            items: 3,
            margin: 20,
          },
          1366: {
            items: 5,
          },
        }
      });
    } else {
      owlCarouselOptions = Object.assign(owlCarouselCommonOptions, {
        items: 1,
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
      });
    }

    $slider.owlCarousel(owlCarouselOptions);
  });
});
