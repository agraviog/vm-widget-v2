var Webflow = Webflow || [];
Webflow.push(function () {
  //voices
  var plyAliceOrig = document.getElementById("alice");
  var plyAlice = document.getElementById("alice-vm");

  //checkbox, play
  var togglebtn = document.getElementById("checkbox_nplayer-a");
  var progressBar = document.getElementById("progress-play-a");

  var playing = true;
  var track1 = plyAlice;
  var track2 = plyAliceOrig;
  var currentTime;
  var musicDuration;
  var progress;

  //on load
  $(window).on("load", function () {
    $("#nplayer_play").removeClass("control_disable disable-play");
    $(".checkbox--nplayer").addClass("w--redirected-checked");
    togglebtn.disabled = true;
  });

  function togglePlay(showPlay) {
    if (showPlay) {
      document.getElementsByClassName("play_icon--nplayer")[0].style.display =
        "block";
      document.getElementsByClassName("pause_icon--nplayer")[0].style.display =
        "none";
    } else {
      document.getElementsByClassName("play_icon--nplayer")[0].style.display =
        "none";
      document.getElementsByClassName("pause_icon--nplayer")[0].style.display =
        "block";
    }
  }

  plyAlice.addEventListener("timeupdate", (e) => {
    currentTime = e.target.currentTime.toFixed(2);
    musicDuration = plyAlice.duration.toFixed(2);
    progress = (currentTime / musicDuration) * 100;
    progressBar.style.width = `${progress}%`;

    if (currentTime == musicDuration) {
      togglePlay(true);
      togglebtn.disabled = true;
      $(".checkbox--nplayer").addClass("w--redirected-checked");
      playing = true;
      track1.muted = false;
    }
  });

  $(".control_play--nplayer").on("click", function (e) {
    togglebtn.disabled = false;

    if (playing) {
      playing = !playing;
      if (track1.muted) {
        track2.play();
        track1.play();
        track1.muted = true;
      } else {
        track1.play();
        track2.play();
        track2.muted = true;
      }
      togglePlay(false);
    } else {
      playing = !playing;
      if (track1.muted) {
        track2.pause();
      }
      track1.pause();
      togglePlay(true);
      togglebtn.disabled = true;
    }
  });

  $("#checkbox_nplayer").on("click", (e) => {
    if (track2.muted) {
      track1.muted = true;
      track2.currentTime = track1.currentTime;
      track2.muted = false;
      playing = false;
      console.log("Track 2");
    } else {
      track2.muted = true;
      track1.currentTime = track2.currentTime;
      track1.muted = false;
      playing = false;
      console.log("Track 1");
    }
  });
});
