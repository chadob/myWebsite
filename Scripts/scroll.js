$(document).ready(function(){
  var winHeight = $(document).height();
  var prevScreenPos = .1;
  $('body').css('height', (winHeight * 6) + 'px');

  function hideAll(shownEle) {
    $('.initial-page').css('opacity', '0');
    $('.project-grid').css('opacity', '0');
    $('.project').css('opacity', '0');
    $('.about').css('opacity', '0');
      $('.initial-page').not(shownEle).hide();
      $('.project-grid').not(shownEle).hide();
      $('.project').not(shownEle).hide();
      $('.about').not(shownEle).hide();
  }


  $(document).on('scroll', function() {
    var screenPos = $(document).scrollTop() / $('body').height();
    console.log(screenPos);
    switch(true) {
      case screenPos < .1:
        if (prevScreenPos === .1) {
        } else {
          prevScreenPos = .1;
          setTimeout(function() {
            hideAll('.initial-page');
            $('.initial-page').show();
            $('.initial-page').css('z-index', 99);
            $('.background').css('opacity', '1');
            $('.initial-page').css('opacity', '1');
          }, 500);
          $('.home').css('background', '#242527');
          $('.background').css('background-image', 'url("../Assets/profileBlue.jpg")');
          $('.background').css('background-repeat', 'no-repeat');
          $('.background').css('background-position', 'top');
          $('.background').css('background-size', 'cover');
        }
        break;
      case screenPos < .2:
        if (prevScreenPos === .2) {
        } else {
          prevScreenPos = .2;
          setTimeout(function() {
            hideAll('.project-grid');
            $('.project-grid').show();
            $('.project-grid').css('z-index', 99);
            $('.project-grid').css('opacity', '1');
          }, 500);
          $('.background').css('background', '#242527');
          $('.about-text').css('opacity', '1');
        }
        break;
      case screenPos < .3:
        if (prevScreenPos === .3) {
        } else {
          prevScreenPos = .3;
          setTimeout(function() {
            hideAll('.krgr');
            $('.krgr').show();
            $('.krgr').css('z-index', 99);
            $('.krgr').css('opacity', '1');
          }, 500);
          $('.background').css('background', '#242527');
        }
        break;
      case screenPos < .4:
        if (prevScreenPos === .4) {
        } else {
          prevScreenPos = .4;
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
      case screenPos < .5:
        if (prevScreenPos === .5) {
        } else {
          prevScreenPos = .5;
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
      case screenPos < .6:
        if (prevScreenPos === .6) {
        } else {
          prevScreenPos = .6;
          setTimeout(function() {
            hideAll('.youchoose');
            $('.youchoose').show();
            $('.youchoose').css('z-index', 99);
            $('.youchoose').css('opacity', '1');
          }, 500);
          $('.background').css('background', '#242527');
          $('.about-text').css('opacity', '1');
        }
        break;
      case screenPos < .7:
        if (prevScreenPos === .7) {
        } else {
          prevScreenPos = .7;
          setTimeout(function() {
            hideAll('.about');
            $('.about').show();
            $('.about').css('z-index', 99);
            $('.about').css('opacity', '1');
          }, 500);
          $('.background').css('background', '#17a16e');
        }
        break;
    }
  });
});
