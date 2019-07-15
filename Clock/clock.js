// Get elements
var secondHand = document.querySelector('.secondHand');
var minuteHand = document.querySelector('.minuteHand');
var hourHand = document.querySelector('.hourHand');
// Get time
var date = new Date();
var second = date.getSeconds();
var minute = date.getMinutes();
var hour = date.getHours();
// Convert hour
if (hour > 12) hour = hour - 12;
// Convert time to degrees
var secondDeg = second * (360 / 60);
var minuteDeg = minute * (360 / 60);
// Make hour hand degrees smooth
var hourDeg = (hour + (minute / 60)) * (360 / 12);
// initially set second, minute and hour hands
secondHand.style.transform = 'rotate(' + secondDeg + 'deg)'
minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)'
hourHand.style.transform = 'rotate(' + hourDeg + 'deg)'

function theRealRotation() {
  setInterval(function () {
    var date = new Date();
    var currentMinute = date.getMinutes();
    var currentHour = date.getHours();
    console.log(currentMinute, currentHour);
    if (currentHour > 12) currentHour = currentHour - 12;

    // get minute hand degree and add 6 degrees to account for earlier waiting tick
    var minuteDeg = (currentMinute * (360 / 60)) + 6;
    var hourDeg = (currentHour + (currentMinute / 60)) * (360 / 12);

    minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
  }, 60000);
}

// find the delay needed to make minute tick in sync with second hand the first time
var waitToTickTime = (360 - secondDeg) / 6;
setTimeout(function () {
  var newMinuteDeg = minuteDeg + 6;
  minuteHand.style.transform = 'rotate(' + newMinuteDeg + 'deg)'
  theRealRotation();
}, waitToTickTime * 1000);


// SIMPLER METHOD
// function clockTime() {
//   // get the element
// var hourHand = document.querySelector('.hourHand');
// var minuteHand = document.querySelector('.minuteHand');
// var secondHand = document.querySelector('.secondHand');

// var time = new Date();
// var hour = time.getHours();
// var minute = time.getMinutes();
// var second = time.getSeconds();

// if(hour > 12) hour = hour - 12;
// var minuteDeg = minute * (360 / 60);
// // create the slow movement of hour hand
// var hourDeg = (hour + (minute / 60)) * (360 / 12);
// var secondDeg = second * (360 / 60);

// hourHand.style.transform = 'rotate(' + hourDeg + 'deg)'
// minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)'
// secondHand.style.transform = 'rotate(' + secondDeg + 'deg)'
// }

// setInterval(clockTime, 1000);