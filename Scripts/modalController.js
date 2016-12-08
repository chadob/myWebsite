
  $('.modal-opener').on('click', function(e) {
    e.preventDefault();
    var thisClass = $(this).attr('class').replace(' modal-opener', '');
    var thisInfo = modalData[thisClass];
    console.log(thisInfo);
    $('.modal-image').attr('src', thisInfo.pictureURL);
    $('.modal-description').text(thisInfo.pictureDescription);
    $('.modal-bg').css("visibility", "visible");
    $('.modal-wrap').css('visibility', 'visible');
    $('.modal-bg').css('opacity', .97);
    $('.modal-wrap').css('opacity', 1);
  });
$('.modal').on('click', function(e) {
  $('.modal-image').attr('src', '');
  $('.modal-description').text('');
  $('.modal-bg').css('opacity', 0);
  $('.modal-wrap').css('opacity', 0);
  $('.modal-bg').css("visibility", "hidden");
  $('.modal-wrap').css('visibility', 'hidden');
});
