var texts = [
  "Front-end",
  "Back-end",
  "Full-Stack",
];

var textIndex = 0;
var charIndex = 0;
var textElement = document.getElementById("text-animation");

function type() {
  if (charIndex < texts[textIndex].length) {
    textElement.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 50);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    setTimeout(type, 500);
  }
}

setTimeout(type, 500);	

function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  var elementPosition = element.getBoundingClientRect().top;
  var startingY = window.pageYOffset;
  var duration = 1000; 
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startingY, elementPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

scrollToElement('#projects');
