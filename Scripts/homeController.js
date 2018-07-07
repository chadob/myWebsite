(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('.eye-backdrop').css('height', '250px');
    $('.nav-circle').css('visibility', 'visible');
    $('body').css("background-color", "");
    // $('.swapped-body-content').hide();
    $('main').show();
    $('.nav-circle').show();
    $('.covers').show();
    $('.other-pages-wrapper').hide();
  };
  $(window).one('scroll', function () {
    $('.intro').css('opacity', '1');
  });
  $('.background-info-button').click(function () {
    console.log('hi')
    $('.background-info').css('opacity', '1');
  });
  $('.info-background').click(function () {
    $('.background-info').css('opacity', '0');
  });
  $('.info-exit').click(function () {
    $('.background-info').css('opacity', '0');
  });
  module.homeController = homeController;
})(window);
