$('.project-image').on('mouseover', function(e) {
  if ($(window).width() >= 1184) {
    $('.project-image').css('width', '15%');
    $(this).css('width', '40%');
  }
});
