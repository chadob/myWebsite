(function(module) {
  var sectionController = {};
  homePos = 0;
  linksPos = $('.scroll-links').offset().top;
  // console.log(linksPos);
  projectsPos = $('.scroll-projects').offset().top;
  console.log(projectsPos);
  aboutPos = $('.scroll-about').offset().top;
  sectionController.home = function(next) {
    $('body').scrollTop(homePos);
  };
  sectionController.links = function(next) {
    $('body').scrollTop(linksPos);
  };
  sectionController.projects = function(next) {
    $('body').scrollTop(projectsPos);
  };
  sectionController.about = function(next) {
    $('body').scrollTop(aboutPos);
  };

  module.sectionController = sectionController;
})(window);
