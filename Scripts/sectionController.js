(function(module) {
  var sectionController = {};

  sectionController.links = function(next) {
    $(window).scrollTo(0, 100vh)
  };
  module.sectionController = sectionController;
})(window);
