$(function() {
	//variable declarations
		var winHeight, eyeHeight, mouseX, mouseY, eyeX, eyeY, angle, heightWidthSetter, xRotate, yRotate, pupilSize, irisSize;

	//code for eye following cursor
	$(document).mousemove(function(e) {
		winHeight = $(window).height(), eyeHeight = 120, mouseX, mouseY, eyeX = $(window).width() / 2, eyeY = winHeight - 125, angle = 0, heightWidthSetter, xRotate, yRotate, pupilSize = 40, irisSize=80;

	  mouseX = e.pageX;
  	mouseY = e.pageY;
		xRotate = mouseX - eyeX;
		yRotate = mouseY - eyeY;
		angle = Math.atan(yRotate/xRotate) / (Math.PI / 180);
		if (eyeX > eyeY) {
			windowGreatestDistance = eyeX;
		} else {
			windowGreatestDistance = eyeY;
		}
		if (Math.abs(eyeX - mouseX) > Math.abs(eyeY- mouseY)) {
			heightWidthSetter = Math.abs(eyeX - mouseX);
		} else {
			heightWidthSetter = Math.abs(eyeY - mouseY);
		}

		eyeRotation(mouseX, mouseY, angle, eyeY, eyeX);
		eyeSize(windowGreatestDistance, heightWidthSetter, irisSize, pupilSize);
		eyePlacement(mouseX, mouseY, eyeX, eyeY, winHeight, windowGreatestDistance, irisSize, heightWidthSetter);
	});
});
