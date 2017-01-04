$(document).ready(function(){
  var winHeight = $(document).height();
  var prevScreenPos = .1425;
  var popUpSeen = false;
  $('.pop-up').on('click', function() {
    popUpSeen = true;
    $('.pop-up').hide();
  });
  function hideAbout(shownEle) {
    $('.about').hide();
  }
  function adjustAbout () {
    var aboutLeftWidth = $('.about-left').width();
    var aboutRightWidth = $('.about-right').width();
    var aboutWidth = $('.about').width();
    $('.about-right').css('width', 'calc(100% - ' + (aboutLeftWidth + 50) + 'px)');
    if (aboutRightWidth === 600) {
      $('.about-right').css('margin-left', (aboutWidth - (aboutLeftWidth + aboutRightWidth)) / 2 + 'px');
    } else {
      $('.about-right').css('margin-left', '25px');
    }
    var aboutRightHeight = $('.about-right').height();
    var aboutHeight = $('.about').height();
    $('.about-right').css('margin-top', (aboutHeight - aboutRightHeight) / 2 + 'px');
  }
  adjustAbout();
  $(window).on('resize', function() {
    adjustAbout();
  });
  function lockProjects() {
    $('.projects').css('position', 'fixed');
    var pageWidth = $('body').width();
    $('.projects').css('width', pageWidth + 'px');
    $(window).on('resize', function() {
      pageWidth = $('body').width();
      $('.projects').css('width', pageWidth + 'px');
    });
  }
  function detectHidden(ele) {
    if ($(ele).hasClass('hidden')) {
      $(ele).css('z-index', 99);
      $('.project').not(ele).addClass('visually-hidden');
      $(ele).removeClass('hidden');
      setTimeout(function () {
        $('.project').not(ele).addClass('hidden');
        $(ele).removeClass('visually-hidden');
      }, 20);
    } else {
      $('.project').not(ele).addClass('visually-hidden');
      setTimeout(function () {
        $('.project').not(ele).addClass('hidden');
      }, 20);
    }
  }

  $(document).on('scroll', function() {
    var screenPos = $(document).scrollTop() / $('body').height();
    switch(true) {
      case screenPos < .1425:
        if (prevScreenPos === .1425) {
        } else {
          prevScreenPos = .1425;
          $('.projects').css('position', 'relative');
          hideAbout();
          $('.krgr').show();
          $('.krgr').css('opacity', '1');
          $('.projects').css('position', 'relative');
        }
        break;
      case screenPos < .285 :
        if (prevScreenPos === .285) {
        } else {
          prevScreenPos = .285;
          hideAbout();
          detectHidden('.krgr');
          $('.projects').css('position', 'relative');
        }
        break;
      case screenPos < .4275:
        if (prevScreenPos === .4275) {
        } else {
          prevScreenPos = .4275;
          lockProjects();
          detectHidden('.krgr');
        }
        break;
      case screenPos < .5700:
        if (prevScreenPos === .5700) {
        } else {
          prevScreenPos = .5700;
          lockProjects();
          hideAbout();
          detectHidden('.otp')
          $('.about-text').css('opacity', '1');
        }
        break;
      case screenPos < .7125:
        if (prevScreenPos === .7125) {
        } else if (prevScreenPos > 7.125) {

        } else {
          prevScreenPos = .7125;
          lockProjects();
          hideAbout();
          detectHidden('.bth');
          $('.about-text').css('opacity', '1');
        }
        break;
      case screenPos < .8:
        if (prevScreenPos >= .8) {
        } else {
          prevScreenPos = .8;
          $('.projects').css('position', 'relative');
          $('.project').not('.youchoose').removeClass('hidden');
          $('.project').not('.youchoose').removeClass('visually-hidden');
          if ($('.youchoose').hasClass('hidden')) {
            $('.youchoose').css('z-index', 99);
            $('.youchoose').removeClass('hidden');
            setTimeout(function () {
              $('.youchoose').removeClass('visually-hidden');
            }, 20);
          } else {
          }
          $('.about').show();
          adjustAbout();
          $('.about-text').css('opacity', '1');
        }
        break;
      case screenPos < .9875:
        $('.about').show();
        adjustAbout();
        $('.project').removeClass('hidden');
        $('.project').removeClass('visually-hidden');
        $('.projects').css('position', 'relative');
    }
  });
});
