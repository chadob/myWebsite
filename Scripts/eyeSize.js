var eyeSize = function (windowGreatestDistance, heightWidthSetter, irisSize, pupilSize) {
  $('.iris').css('height', (irisSize) - (.34/windowGreatestDistance * heightWidthSetter * irisSize) + "px");
  $('.pupil').css('height', (pupilSize) - (.34/windowGreatestDistance * heightWidthSetter * pupilSize)  + "px");
  // change shape for the iris and pupil
  $('.iris').css('border-radius', '75%');
  $('.pupil').css('border-radius', '75%');
}
