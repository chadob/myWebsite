(function(module) {
  var sectionController = {};

  sectionController.index = function(ctx, next) {
    var clickedSection = ctx.params.section;
    $('.left-cover-container').css({transform: 'rotate(' + -(270) + 'deg)'});
    $('.right-cover-container').css({transform: 'rotate(' + (270) + 'deg)'});
    setTimeout(function() {
      $('.bottom-cover').css('height', '0px');
      $('.outside-covers').css('width', '2px');
      $('.eye-backdrop').css('height', '0px');
    }, 500);
    setTimeout(function() {
      $('.outside-covers').css('width', '0px');
      $('.nav-circle').css('visibility', 'hidden');
      $('main').hide('slow');
      $('.nav-circle').hide('slow');
      $('.covers').hide();
      $('.other-pages-wrapper').show('slow');
      $('.other-pages-wrapper > article').hide('slow');
      if (clickedSection == "about") {
        $('body').css('background', '#f8f8f8');
      } else {
        $('body').css('background', '#61442b');
      }
      console.log(ctx.params.section);
    }, 2000);
    setTimeout(function() {
      $('.' + clickedSection).show('slow');
    }, 2500);
  };
  module.sectionController = sectionController;
})(window);
