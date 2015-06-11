(function () {
  "use strict";

  // clockworks
  // something with the date object
  var dt = new Date();
  var hours = dt.getHours();
  var minutes = dt.getMinutes();
  var seconds = dt.getSeconds();
  console.log(hours, minutes, seconds);

  var minutes = minutes.toString().length > 1 ? minutes :  "0" + minutes;

  var seconds = seconds.toString().length > 1 ? seconds :  "0" + seconds;
  $(function () {
    var $time = $('#time');

    $time.find('.hrs').text(hours + ":");
    $time.find('.mins').text(minutes + ":");
    $time.find('.secs').text(seconds);



  setInterval(function() {
    console.log("its working");
    var dt = new Date();
    var hours = dt.getHours();
    var minutes = dt.getMinutes();
    var seconds = dt.getSeconds();
    var minutes = minutes.toString().length > 1 ? minutes :  "0" + minutes;

    var seconds = seconds.toString().length > 1 ? seconds :  "0" + seconds;
    $time.find('.hrs').text(hours + ":");
    $time.find('.mins').text(minutes + ":");
    $time.find('.secs').text(seconds);
    var bgColor = randomHex();
    console.log(bgColor);
    $("body").css("background-color", "#" + bgColor);
  }, 1000);
  });



})();
