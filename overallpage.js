var Webflow = Webflow || [];
Webflow.push(function () {
  //voices
  var plyHarmonyOrig = document.getElementById("harmony");
  var plyHarmony = document.getElementById("harmony-vm");

  //checkbox, play
  var togglebtn = document.getElementById("checkbox_nplayer");
  var progressBar = document.getElementById("progress-play");

  var playing = true;
  var track1 = plyHarmony;
  var track2 = plyHarmonyOrig;
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

  plyHarmony.addEventListener("timeupdate", (e) => {
    currentTime = e.target.currentTime.toFixed(2);
    musicDuration = plyHarmony.duration.toFixed(2);
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

  $(".link__wrap").on("mouseenter", function () {
    $(".link__circle").addClass("btn__hover-in");
  });
  $(".link__wrap").on("mouseleave", function () {
    $(".link__circle").removeClass("btn__hover-in");
  });

  $(".nav__btn").on("mouseenter", function () {
    $(".link__circle--nav").addClass("btn__hover-in--nav");
  });
  $(".nav__btn").on("mouseleave", function () {
    $(".link__circle--nav").removeClass("btn__hover-in--nav");
  });

  $(".link-tw").on("mouseenter", function () {
    $("#circle-tw").addClass("btn__hover-in--footer");
  });
  $(".link-tw").on("mouseleave", function () {
    $("#circle-tw").removeClass("btn__hover-in--footer");
  });

  $(".link-tt").on("mouseenter", function () {
    $("#circle-tt").addClass("btn__hover-in--footer");
  });
  $(".link-tt").on("mouseleave", function () {
    $("#circle-tt").removeClass("btn__hover-in--footer");
  });

  $(".link-yt").on("mouseenter", function () {
    $("#circle-yt").addClass("btn__hover-in--footer");
  });
  $(".link-yt").on("mouseleave", function () {
    $("#circle-yt").removeClass("btn__hover-in--footer");
  });

  $(".link-dc").on("mouseenter", function () {
    $("#circle-dc").addClass("btn__hover-in--footer");
  });
  $(".link-dc").on("mouseleave", function () {
    $("#circle-dc").removeClass("btn__hover-in--footer");
  });
});
