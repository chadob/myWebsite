$('.menu-cont').on('click', function() {
  $('.top-bar').toggleClass('top-bar-trans');
  $('.bot-bar').toggleClass('bot-bar-trans');
  $('.top-bar').toggleClass('top-bar-active');
  $('.mid-bar').toggleClass('top-bar-active');
  $('.bot-bar').toggleClass('bot-bar-active');
  $('.menu').toggleClass('menu-active');
  $('.menu-background').toggleClass('menu-background-active');
  $('.menu-cont').addClass('active');
  $('.menu-item').toggleClass('menu-item-active');
});
