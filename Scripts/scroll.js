$(document).ready(function(){
  var winHeight = $(document).height();
  var prevScreenPos = .1425;
  // $('body').css('height', (winHeight * 6) + 'px');

  function hideAll(shownEle) {
    $('.project').css('opacity', '0');
    $('.project').not(shownEle).hide();
    $('.about').hide();
  }
  function lockProjects() {
    $('.projects').css('position', 'fixed');
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
          $('.krgr').show();
          $('.krgr').css('opacity', '1');
          $('.projects').css('position', 'relative');
        }
        break;
      case screenPos < .4275:
        if (prevScreenPos === .4275) {
        } else {
          prevScreenPos = .4275;
          lockProjects();
          setTimeout(function() {
            hideAll('.krgr');
            $('.krgr').show();
            $('.krgr').css('z-index', 99);
            $('.krgr').css('opacity', '1');
          }, 500);
          $('.background').css('background', '#242527');
        }
        break;
      case screenPos < .5700:
        if (prevScreenPos === .5700) {
        } else {
          prevScreenPos = .5700;
          lockProjects();
          setTimeout(function() {
            hideAll('.otp');
            $('.otp').show();
            $('.otp').css('z-index', 99);
            $('.otp').css('opacity', '1');
          }, 500);
          $('.background').css('background', '#1bd394');
          $('.about-text').css('opacity', '1');
        }
        break;
      case screenPos < .7125:
        if (prevScreenPos === .7125) {
        } else {
          prevScreenPos = .7125;
          lockProjects();
          setTimeout(function() {
            hideAll('.bth');
            $('.bth').show();
            $('.bth').css('z-index', 99);
            $('.bth').css('opacity', '1');
          }, 500);
          $('.background').css('background', '#242527');
          $('.about-text').css('opacity', '1');
        }
        break;
      case screenPos < .8:
        if (prevScreenPos === .8) {
        } else {
          prevScreenPos = .8;
          $('.projects').css('position', 'relative');
          setTimeout(function() {
            $('.krgr').show();
            $('.otp').show();
            $('.bth').show();
            $('.youchoose').show();
            $('.about').show();
            $('.youchoose').css('z-index', 99);
            $('.youchoose').css('opacity', '1');
          }, 500);
          $('.background').css('background', '#242527');
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
