

  var vid = document.getElementById("myVideo");
  var currentlyPlaying = 1;
  var currentlPlayingTime;

  var src1 = "videos/video__1.mp4";

  var src2 = "videos/video__2.mp4";

  function myFunction() {
      currentlPlayingTime = vid.currentTime;
      if (currentlyPlaying === 1) {
          vid.src = src2;
          currentlyPlaying = 2;
      } else {
          vid.src = src1;
          currentlyPlaying = 1;
      }
      vid.load();
      vid.addEventListener('loadedmetadata', function () {
          vid.currentTime = currentlPlayingTime;
          console.log(currentlPlayingTime);
      }, false);
  }


