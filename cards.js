//voices
var plyHarmonyOrig = document.getElementById("harmony");
var plyHarmony = document.getElementById("harmony-vm");
var plyAliceOrig = document.getElementById("alice");
var plyAlice = document.getElementById("alice-vm");
var plyMothershipOrig = document.getElementById("mothership");
var plyMothership = document.getElementById("mothership-vm");

//checkbox, play
var togglebtn = document.getElementById("checkbox_nplayer");
var togglebtn2 = document.getElementById("checkbox2_nplayer");
var togglebtn3 = document.getElementById("checkbox3_nplayer");
var progressBarHarmony = document.getElementById("progress-play");
var progressBarAlice = document.getElementById("progress2-play");
var progressBarMothership = document.getElementById("progress3-play");

var playing = true;
var track1, track2;
var currentTime;
var musicDuration;
var progress;

//on load
$(window).on("load", function () {
  $("#nplayer_play").removeClass("control_disable disable-play");
  $("#n2player_play").removeClass("control_disable disable-play");
  $("#n3player_play").removeClass("control_disable disable-play");
  $(".checkbox--nplayer").addClass("w--redirected-checked");
  togglebtn.disabled = true;
  togglebtn2.disabled = true;
  togglebtn3.disabled = true;
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

function togglePlay2(showPlay) {
  if (showPlay) {
    document.getElementsByClassName("play_icon2--nplayer")[0].style.display =
      "block";
    document.getElementsByClassName("pause_icon2--nplayer")[0].style.display =
      "none";
  } else {
    document.getElementsByClassName("play_icon2--nplayer")[0].style.display =
      "none";
    document.getElementsByClassName("pause_icon2--nplayer")[0].style.display =
      "block";
  }
}

function togglePlay3(showPlay) {
  if (showPlay) {
    document.getElementsByClassName("play_icon3--nplayer")[0].style.display =
      "block";
    document.getElementsByClassName("pause_icon3--nplayer")[0].style.display =
      "none";
  } else {
    document.getElementsByClassName("play_icon3--nplayer")[0].style.display =
      "none";
    document.getElementsByClassName("pause_icon3--nplayer")[0].style.display =
      "block";
  }
}

plyHarmony.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyHarmony.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBarHarmony.style.width = `${progress}%`;

  if (currentTime == musicDuration) {
    togglePlay(true);
    togglebtn.disabled = true;
    $(".checkbox--nplayer").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

plyAlice.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyAlice.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBarAlice.style.width = `${progress}%`;

  if (currentTime == musicDuration) {
    togglePlay2(true);
    togglebtn2.disabled = true;
    $(".checkbox--nplayer").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

plyMothership.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyMothership.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBarMothership.style.width = `${progress}%`;

  if (currentTime == musicDuration) {
    togglePlay3(true);
    togglebtn3.disabled = true;
    $(".checkbox--nplayer").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

$("#nplayer_play").on("click", function (e) {
  togglebtn.disabled = false;
  track1 = plyHarmony;
  track2 = plyHarmonyOrig;

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

$("#n2player_play").on("click", function (e) {
  console.log("test");
  togglebtn2.disabled = false;

  track1 = plyAlice;
  track2 = plyAliceOrig;

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
    togglePlay2(false);
  } else {
    playing = !playing;
    if (track1.muted) {
      track2.pause();
    }
    track1.pause();
    togglePlay2(true);
    togglebtn2.disabled = true;
  }
});

$("#n3player_play").on("click", function (e) {
  togglebtn3.disabled = false;

  track1 = plyMothership;
  track2 = plyMothershipOrig;

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
    togglePlay3(false);
  } else {
    playing = !playing;
    if (track1.muted) {
      track2.pause();
    }
    track1.pause();
    togglePlay3(true);
    togglebtn3.disabled = true;
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

$("#checkbox2_nplayer").on("click", (e) => {
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

$("#checkbox3_nplayer").on("click", (e) => {
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

$(".swiper__btn").on("click", (e) => {
  togglePlay(true);
  togglePlay2(true);
  togglePlay3(true);
  track1.pause();
  track1.currentTime = 0;
  track2.pause();
  track2.currentTime = 0;
  playing = true;
  togglebtn.disabled = true;
  togglebtn2.disabled = true;
  togglebtn3.disabled = true;
  track1.muted = false;
});
