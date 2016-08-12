$(document).ready(function(){


  var videoOne = document.getElementById('video__1');
  var videoTwo = document.getElementById('video__2');

  $(videoTwo).hide();
  
  $( "#toggle-video" ).click(function() {

    $(videoOne).toggle();
    $(videoTwo).toggle();

    if ( $(videoTwo).css('display') == 'none' ){
        videoOne.play();
    } else {
        videoTwo.play();
    }

  });
    

});