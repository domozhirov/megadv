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
});
