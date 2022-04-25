var Webflow = Webflow || [];
Webflow.push(function () {
  var plyApple = document.getElementById("apple-vm");
  var plyHarmony = document.getElementById("harmony-vm");
  var plyPhone = document.getElementById("phone-vm");
  var plyAppleOrig = document.getElementById("apple");
  var plyHarmonyOrig = document.getElementById("harmony");
  var plyPhoneOrig = document.getElementById("phone");
  var appleOption = document.getElementById("apple-o");
  var harmonyOption = document.getElementById("harmony-o");
  var phoneOption = document.getElementById("phone-o");
  var duration = document.getElementById("duration--nplayer");
  var togglebtn = document.getElementById("checkbox_nplayer");
  var progressBar = document.getElementById("progress-play");

  var voice = 1;
  var playing = true;
  var track1 = plyApple;
  var track2 = plyAppleOrig;
  var currentTime;
  var musicDuration;
  var progress;

  //on load
  $(window).on("load", function () {
    $(".control_play--nplayer").removeClass("control_disable");
    $(".control_play--nplayer").removeClass("disable-play");
    $(".checkbox--nplayer").addClass("w--redirected-checked");
    togglebtn.disabled = true;
    //duration.innerHTML = secondsToTime(track1.duration.toFixed(2));
  });

  //change current button
  $(".nplayer--btn").on("click", function () {
    $(".current").removeClass("current");
    $(this).addClass("current");
  });

  function secondsToTime(e) {
    var h = Math.floor(e / 3600)
        .toString()
        .padStart(2, "0"),
      m = Math.floor((e % 3600) / 60)
        .toString()
        .padStart(2, "0"),
      s = Math.floor(e % 60)
        .toString()
        .padStart(2, "0");

    return m + ":" + s;
  }

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

  appleOption.onclick = function () {
    voice = 1;
    progressBar.style.width = "0%";
    togglePlay(true);
    $(".checkbox--nplayer").addClass("w--redirected-checked");
    track1.pause();
    track1.currentTime = 0;
    track2.pause();
    track2.currentTime = 0;
    playing = true;
    togglebtn.disabled = true;
  };

  harmonyOption.onclick = function () {
    voice = 2;
    progressBar.style.width = "0%";
    togglePlay(true);
    $(".checkbox--nplayer").addClass("w--redirected-checked");
    track1.pause();
    track1.currentTime = 0;
    track2.pause();
    track2.currentTime = 0;
    playing = true;
    togglebtn.disabled = true;
  };

  phoneOption.onclick = function () {
    voice = 3;
    progressBar.style.width = "0%";
    togglePlay(true);
    $(".checkbox--nplayer").addClass("w--redirected-checked");
    track1.pause();
    track1.currentTime = 0;
    track2.pause();
    track2.currentTime = 0;
    playing = true;
    togglebtn.disabled = true;
  };

  plyApple.addEventListener("timeupdate", (e) => {
    currentTime = e.target.currentTime.toFixed(2);
    musicDuration = plyApple.duration.toFixed(2);
    progress = (currentTime / musicDuration) * 100;
    progressBar.style.width = `${progress}%`;
    duration.innerHTML = secondsToTime(currentTime);

    if (currentTime == musicDuration) {
      togglePlay(true);
      togglebtn.disabled = true;
      $(".checkbox--nplayer").addClass("w--redirected-checked");
      playing = true;
      track1.muted = false;
    }
  });

  plyHarmony.addEventListener("timeupdate", (e) => {
    currentTime = e.target.currentTime.toFixed(2);
    musicDuration = plyHarmony.duration.toFixed(2);
    progress = (currentTime / musicDuration) * 100;
    progressBar.style.width = `${progress}%`;
    duration.innerHTML = secondsToTime(currentTime);

    if (currentTime == musicDuration) {
      togglePlay(true);
      togglebtn.disabled = true;
      $(".checkbox--nplayer").addClass("w--redirected-checked");
      playing = true;
      track1.muted = false;
    }
  });

  plyPhone.addEventListener("timeupdate", (e) => {
    currentTime = e.target.currentTime.toFixed(2);
    musicDuration = plyPhone.duration.toFixed(2);
    progress = (currentTime / musicDuration) * 100;
    progressBar.style.width = `${progress}%`;
    duration.innerHTML = secondsToTime(currentTime);

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
    switch (voice) {
      case 1:
        track1 = plyApple;
        track2 = plyAppleOrig;
        break;
      case 2:
        track1 = plyHarmony;
        track2 = plyHarmonyOrig;
        break;
      case 3:
        track1 = plyPhone;
        track2 = plyPhoneOrig;
        break;
    }
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
