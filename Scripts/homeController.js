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

  module.homeController = homeController;
})(window);
