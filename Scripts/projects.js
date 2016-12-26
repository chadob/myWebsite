var clickedProject;
var clickedIcon;
$('.icon-diamonds').on('click', function(e) {
  clickedProject = e.target.className.slice(0, e.target.className.indexOf(' ')).slice('0', e.target.className.indexOf('-'));
  clickedIcon =  e.target.className.slice(0, e.target.className.indexOf(' ')).slice(e.target.className.indexOf('-') + 1, e.target.className.length);
  $('.' + clickedProject + ' div:nth-of-type(1)').empty();
  $('.' + clickedProject + ' div:nth-of-type(2)').empty();
  $('.' + clickedProject + ' div:nth-of-type(1)').append('<img class="computer-screen" src="/Assets/computerscreen.png">');
  $('.' + clickedProject + ' div:nth-of-type(1)').append('<img class="feature-pic" src=' + modalData[clickedProject + '' + clickedIcon].pictureURL + '>');
  $('.' + clickedProject + ' div:nth-of-type(2)').append('<span class="diamond-des">' + modalData[clickedProject + '' + clickedIcon].pictureDescription + '</span>');
});
$('.project-image').on('mouseover', function(e) {
  $('.project-image').css('width', '22%');
  $(this).css('width', '34%');
});
$('.icon-diamonds').on('click', function(e) {
  e.preventDefault();
});
