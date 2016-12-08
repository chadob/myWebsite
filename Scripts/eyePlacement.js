var eyeRotation = function (mouseX, mouseY, angle, eyeY, eyeX) {
  if (mouseY <= eyeY) {
    if (mouseX < eyeX) {
      $('.iris').css({'transform' : 'rotate(' + (270 + angle) + 'deg)'});
    }	else {
      $('.iris').css({'transform' : 'rotate(' + (90 + angle) + 'deg)'});
    }
  } else {
    if (mouseX < eyeX) {
      $('.iris').css({'transform' : 'rotate(' + (270 + angle) + 'deg)'});
    }	else {
      $('.iris').css({'transform' : 'rotate(' + (90 + angle) + 'deg)'});
    }
  }
}


var eyePlacement = function(mouseX, mouseY, eyeX, eyeY, winHeight, windowGreatestDistance, irisSize, heightWidthSetter) {
  // $('.iris').css('left', 'calc(' + mouseXPosition + '% + ' + (-14 - 53/100 * mouseXPosition) + 'px)');
  // $('.iris').css('top', 'calc((' + mouseYPosition + '%) - (' + mouseYPosition / 100 * $('.iris').css('height').replace('px', "") + 'px)');
  wGDPercentage = windowGreatestDistance / winHeight * 100;
  leftPerFix = (50 - eyeX / (windowGreatestDistance * 2) * 100);
  curIrisHeight = $('.iris').height();
  curIrisWidth = $('.iris').width();
  var lob = (irisSize) - (.34/windowGreatestDistance * Math.abs(eyeX - mouseX) * irisSize);
  var xRange = (eyeX/eyeY);
  var xStart = 50 - (eyeX/(eyeY*2)) * 100;
  var eyeXPercent = xStart + xRange * ((mouseX/eyeX) * 50)
  var heightWidthDiff = 80 - (irisSize - (.34 / eyeY * Math.abs(eyeX - mouseX) * irisSize));
  if ((mouseX / eyeX) < 1) {
    var heightWidthDiff = 80 - (irisSize - (.34 / eyeY * Math.abs(eyeX - mouseX) * irisSize));
  } else {
    var heightWidthDiff = 0;
  }
  if (eyeX >= eyeY) {
    $('.iris').css('left', 'calc(' + (leftPerFix + mouseX / (windowGreatestDistance * 2) * 100) + '% - ' + ((lob * (mouseX / (eyeX * 2))) + (15 * (Math.abs(eyeX - mouseX) / eyeX))) + 'px)');
    $('.iris').css('top', 'calc(' + mouseY / (windowGreatestDistance * 2) * 100 + '% - ' + (curIrisHeight * mouseY / (windowGreatestDistance * 2)) + 'px)');
  } else {
    $('.iris').css('left', 'calc(' + (eyeXPercent) + '% - ' + (heightWidthDiff + (eyeXPercent/100 * (irisSize - (.34 / eyeY * Math.abs(eyeX - mouseX) * irisSize)))) + 'px)');
    $('.iris').css('top', 'calc(' + mouseY / (windowGreatestDistance * 2) * 100 + '% - ' + (curIrisHeight * mouseY / (windowGreatestDistance * 2)) + 'px)');
  }
}
