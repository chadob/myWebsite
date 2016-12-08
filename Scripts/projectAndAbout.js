//get scroll position and adjust titles accordingly
function titleMover (ele) {
  scrollY = ((ele.offset().top + ele.height / 2 - $('.other-pages-wrapper').scrollTop() - $(window).height) / -($(window).height())) * 100 + "%";
  $(ele + ' > .project-title').css('top', scrollY);
}

//event handler
$('.other-pages-wrapper').on('scroll', function() {
  if ($('.projects').css('display') === 'block') {
    $('.projects-description').each(function(idx) {
      scrollPercentage = ((100 - ($(this).offset().top + $(this).height() / 2) / $(window).height() * 100) / 100);
      console.log(2 - (2 * scrollPercentage));
      $(this).contents('.project-title').css('top', "calc(" + scrollPercentage * 100 + "% - " + $('.project-title').height() * scrollPercentage + "px)");
      $(this).contents('.project-title').css('display', 'block');
      if(scrollPercentage < .5) {
          $(this).contents('.project-title').css('opacity', 2 * scrollPercentage);
      } else {
          $(this).contents('.project-title').css('opacity', 2 - (2 * scrollPercentage));
      }
    });
  } else {

  }
});

//interests animations
$('.topic-wrapper').on('click', function() {
  var currentTopic = $(this);
  if ($(this).css('width') === $('.about').css('width') || $(this).css('width') === '250px') {
    setTimeout(function() {
      currentTopic.contents('.interest-wrapper').slideToggle("slow", function() {
        if ($(this).is(':visible')) {
          // $(this).css('display','inline-block');
        }
      });
    }, 500);
  }
  if ($(this).width() === 250) {
    $(this).css('width', '100%');
    var margLeft = $(this).css('margin-left');
    $(this).contents('interest-wrapper').css('margin-left', margLeft);
    $(this).css('margin-left', '0px');
  } else if ($(this).css('width') === $('.about').css('width')) {
    $(this).css('width', '250px');
  }
});

//code for the skills list animations
var skillsArray = ['MVC', 'Client side routing using Page.js', 'Youtube API', 'Responsive Design', 'Single Page Applications', 'Jquery', 'SMACSS organization', 'CSS animations', 'Jquery Animations', 'Github', 'Local Storage', 'Working with JSON', 'Some Templating with Handlebars', 'Some SQL', 'Event Handling', 'AJAX calls', 'CSS', 'Javascript']
$('.skills-list').on('click', function () {
  var timerCounter = 0;
  if ($(this).contents('li').length > 0) {
    $(this).empty();
  } else {
    skillsArray.forEach(function(skill) {
      timerCounter += 100;
      setTimeout(function() {
        $('.skills-list').append('<li> <span class="bullet-point">.</span> <p>' + skill + '</p> </li>');
      }, timerCounter);
    });
    setTimeout(function() {
      $('.skills-list').find('p').css('margin-left', '0%');
    }, timerCounter + 100);
  }
});
