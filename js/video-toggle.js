$(document).ready(function(){
  var videoOne = document.getElementById('video__1');
  var videoTwo = document.getElementById('video__2');
  $(videoOne).hide();
  $( "#toggle-video" ).click(function() {
    $(videoOne).toggle();
    $(videoTwo).toggle();
    videoOne.play();
    videoTwo.play();
  });
});
