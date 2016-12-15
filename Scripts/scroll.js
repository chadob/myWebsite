$(document).ready(function(){
  var winHeight = $(document).height();
  var prevScreenPos = .1425;
  // $('body').css('height', (winHeight * 6) + 'px');

  function hideAll(shownEle) {
    $('.about').hide();
  }
  function lockProjects() {
    $('.projects').css('position', 'fixed');
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
      $(ele).addClass('visually-hidden');
      $(ele).one('transitionend', function(e) {
        $(ele).addClass('hidden');
      });
    }
  }

  $(document).on('scroll', function() {
    var screenPos = $(document).scrollTop() / $('body').height();
    console.log(screenPos);
    console.log($(document).scrollTop());
    console.log($('body').height());
    switch(true) {
      case screenPos < .1425:
        if (prevScreenPos === .1425) {
        } else {
          prevScreenPos = .1425;
          $('.projects').css('position', 'relative');
          hideAll();
          $('.background').css('background-image', 'url("../Assets/profileBlue.jpg")');
          $('.background').css('background-repeat', 'no-repeat');
          $('.background').css('background-position', 'top');
          $('.background').css('background-size', 'cover');
          $('.krgr').show();
          $('.krgr').css('opacity', '1');
          $('.projects').css('position', 'relative');
        }
        break;
      case screenPos < .285 :
        if (prevScreenPos === .285) {
        } else {
          prevScreenPos = .285;
          hideAll();
          $('.background').css('background', '#242527');
          detectHidden('.krgr');
          $('.projects').css('position', 'relative');
        }
        break;
      case screenPos < .4275:
        if (prevScreenPos === .4275) {
        } else {
          prevScreenPos = .4275;
          lockProjects();
          $('.background').css('background', '#242527');
        }
        break;
      case screenPos < .5700:
        if (prevScreenPos === .5700) {
        } else {
          prevScreenPos = .5700;
          lockProjects();
          hideAll();
          detectHidden('.otp')
          $('.background').css('background', '#1bd394');
          $('.about-text').css('opacity', '1');
        }
        break;
      case screenPos < .7125:
        if (prevScreenPos === .7125) {
        } else {
          prevScreenPos = .7125;
          lockProjects();
          hideAll();
          detectHidden('.bth');
          $('.background').css('background', '#242527');
          $('.about-text').css('opacity', '1');
        }
        break;
      case screenPos < .8:
        if (prevScreenPos === .8) {
        } else {
          prevScreenPos = .8;
          $('.projects').css('position', 'relative');
          $('.project').not('.youchoose').removeClass('hidden');
          $('.project').not('.youchoose').removeClass('hidden');
          $('.project').not('.youchoose').removeClass('visually-hidden');
          if ($('.youchoose').hasClass('hidden')) {
            $('.youchoose').css('z-index', 99);
            $('.youchoose').removeClass('hidden');
            setTimeout(function () {
              $('.youchoose').removeClass('visually-hidden');
            }, 20);
          } else {
            $('.youchoose').addClass('visually-hidden');
            $('.youchoose').one('transitionend', function(e) {
              $('.youchoose').addClass('hidden');
            });
          }
          $('.about').show();
          $('.background').css('background', '#7f0b0b');
          $('.about-text').css('opacity', '1');
        }
        break;
      case screenPos < .9875:
      $('.about').show();
      $('.project').show();
      $('.project').css('position', 'relative');
        $('.projects').css('position', 'relative');
    }
  });
});
