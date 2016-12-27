var clickedProject;
var clickedIcon;
$('.icon-circle').on('click', function(e) {
  clickedProject = e.target.className.slice(0, e.target.className.indexOf(' ')).slice('0', e.target.className.indexOf('-'));
  clickedIcon =  e.target.className.slice(0, e.target.className.indexOf(' ')).slice(e.target.className.indexOf('-') + 1, e.target.className.length);
  $('.feature-pic').hide("slide", { direction: "right" }, 500, function() {
    $(this).remove();
  });
  $('.' + clickedProject + ' div:nth-of-type(2)').empty();
  $('.' + clickedProject + ' div:nth-of-type(1)').append('<img class="feature-pic" style="display: none;" src=' + modalData[clickedProject + '' + clickedIcon].pictureURL + '>');
  $('.feature-pic').show("slide", { direction: "left" }, 500);
  $('.' + clickedProject + ' div:nth-of-type(2)').append('<span class="diamond-des">' + modalData[clickedProject + '' + clickedIcon].pictureDescription + '</span>');
});
$('.project-image').on('mouseover', function(e) {
  $('.project-image').css('width', '22%');
  $(this).css('width', '34%');
});
$('.icon-circle').on('click', function(e) {
  e.preventDefault();
});
