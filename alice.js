var Webflow = Webflow || [];
Webflow.push(function () {
  //voices
  var plyAliceOrig = document.getElementById("alice");
  var plyAlice = document.getElementById("alice-vm");

  //checkbox, play
  var togglebtnA = document.getElementById("checkbox_nplayer-a");
  var progressBarA = document.getElementById("progress-play-a");

  var playingA = true;
  var track1A = plyAlice;
  var track2A = plyAliceOrig;
  var currentTimeA;
  var musicDurationA;
  var progressA;

  //on load
  $(window).on("load", function () {
    $("#nplayer_play-a").removeClass("control_disable-a disable-play-a");
    $(".checkbox--nplayer-a").addClass("w--redirected-checked");
    togglebtnA.disabled = true;
  });

  function togglePlay(showPlay) {
    if (showPlay) {
      document.getElementsByClassName("play_icon--nplayer-a")[0].style.display =
        "block";
      document.getElementsByClassName(
        "pause_icon--nplayer-a"
      )[0].style.display = "none";
    } else {
      document.getElementsByClassName("play_icon--nplayer-a")[0].style.display =
        "none";
      document.getElementsByClassName(
        "pause_icon--nplayer-a"
      )[0].style.display = "block";
    }
  }

  plyAlice.addEventListener("timeupdate", (e) => {
    currentTimeA = e.target.currentTimeA.toFixed(2);
    musicDurationA = plyAlice.duration.toFixed(2);
    progressA = (currentTimeA / musicDurationA) * 100;
    progressBarA.style.width = `${progressA}%`;

    if (currentTimeA == musicDurationA) {
      togglePlay(true);
      togglebtnA.disabled = true;
      $(".checkbox--nplayer").addClass("w--redirected-checked");
      playingA = true;
      track1A.muted = false;
    }
  });

  $(".control_play--nplayer").on("click", function (e) {
    togglebtnA.disabled = false;

    if (playingA) {
      playingA = !playingA;
      if (track1A.muted) {
        track2A.play();
        track1A.play();
        track1A.muted = true;
      } else {
        track1A.play();
        track2A.play();
        track2A.muted = true;
      }
      togglePlay(false);
    } else {
      playingA = !playingA;
      if (track1A.muted) {
        track2A.pause();
      }
      track1A.pause();
      togglePlay(true);
      togglebtnA.disabled = true;
    }
  });

  $("#checkbox_nplayer").on("click", (e) => {
    if (track2A.muted) {
      track1A.muted = true;
      track2A.currentTimeA = track1A.currentTimeA;
      track2A.muted = false;
      playingA = false;
      console.log("Track 2");
    } else {
      track2A.muted = true;
      track1A.currentTimeA = track2A.currentTimeA;
      track1A.muted = false;
      playingA = false;
      console.log("Track 1");
    }
  });
});
