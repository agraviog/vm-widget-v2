//voices
var plyBobOrig = document.getElementById("bob");
var plyBob = document.getElementById("bob-vm");
var plyAliceOrig = document.getElementById("alice");
var plyAlice = document.getElementById("alice-vm");
var plyMothershipOrig = document.getElementById("mothership");
var plyMothership = document.getElementById("mothership-vm");
var plyNarratorOrig = document.getElementById("narrator");
var plyNarrator = document.getElementById("narrator-vm");
var plyAstroOrig = document.getElementById("astro");
var plyAstro = document.getElementById("astro-vm");
var plyPilotOrig = document.getElementById("pilot");
var plyPilot = document.getElementById("pilot-vm");
var plyAiOrig = document.getElementById("ai9000");
var plyAi = document.getElementById("ai9000-vm");

//checkbox, play
var togglebtn = document.getElementById("checkbox_nplayer");
var togglebtn2 = document.getElementById("checkbox2_nplayer");
var togglebtn3 = document.getElementById("checkbox3_nplayer");
var togglebtn4 = document.getElementById("checkbox4_nplayer");
var togglebtn5 = document.getElementById("checkbox5_nplayer");
var togglebtn6 = document.getElementById("checkbox6_nplayer");
var togglebtn7 = document.getElementById("checkbox7_nplayer");

//progress bar
var progressBarBob = document.getElementById("progress-play");
var progressBarAlice = document.getElementById("progress2-play");
var progressBarMothership = document.getElementById("progress3-play");
var progressBarNarrator = document.getElementById("progress4-play");
var progressBarAstro = document.getElementById("progress5-play");
var progressBarPilot = document.getElementById("progress6-play");
var progressBarAi9000 = document.getElementById("progress7-play");

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
  $("#n4player_play").removeClass("control_disable disable-play");
  $("#n5player_play").removeClass("control_disable disable-play");
  $("#n6player_play").removeClass("control_disable disable-play");
  $("#n7player_play").removeClass("control_disable disable-play");

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

function togglePlay4(showPlay) {
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

function togglePlay5(showPlay) {
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

function togglePlay6(showPlay) {
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

function togglePlay7(showPlay) {
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

plyBob.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyBob.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBarBob.style.width = `${progress}%`;

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

plyNarrator.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyNarrator.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBarNarrator.style.width = `${progress}%`;

  if (currentTime == musicDuration) {
    togglePlay4(true);
    togglebtn4.disabled = true;
    $(".checkbox--nplayer").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

plyAstro.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyAstro.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBarAstro.style.width = `${progress}%`;

  if (currentTime == musicDuration) {
    togglePlay5(true);
    togglebtn5.disabled = true;
    $(".checkbox--nplayer").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

plyPilot.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyPilot.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBarPilot.style.width = `${progress}%`;

  if (currentTime == musicDuration) {
    togglePlay6(true);
    togglebtn6.disabled = true;
    $(".checkbox--nplayer").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

plyAi.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyAi.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBarAi9000.style.width = `${progress}%`;

  if (currentTime == musicDuration) {
    togglePlay7(true);
    togglebtn7.disabled = true;
    $(".checkbox--nplayer").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

$("#nplayer_play").on("click", function (e) {
  togglebtn.disabled = false;
  track1 = plyBob;
  track2 = plyBobOrig;

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

$("#n4player_play").on("click", function (e) {
  togglebtn4.disabled = false;

  track1 = plyNarrator;
  track2 = plyNarratorOrig;

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
    togglePlay4(false);
  } else {
    playing = !playing;
    if (track1.muted) {
      track2.pause();
    }
    track1.pause();
    togglePlay4(true);
    togglebtn4.disabled = true;
  }
});

$("#n5player_play").on("click", function (e) {
  togglebtn5.disabled = false;

  track1 = plyAstro;
  track2 = plyAstroOrig;

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
    togglePlay5(false);
  } else {
    playing = !playing;
    if (track1.muted) {
      track2.pause();
    }
    track1.pause();
    togglePlay5(true);
    togglebtn5.disabled = true;
  }
});

$("#n6player_play").on("click", function (e) {
  togglebtn6.disabled = false;

  track1 = plyPilot;
  track2 = plyPilotOrig;

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
    togglePlay6(false);
  } else {
    playing = !playing;
    if (track1.muted) {
      track2.pause();
    }
    track1.pause();
    togglePlay6(true);
    togglebtn6.disabled = true;
  }
});

$("#n7player_play").on("click", function (e) {
  togglebtn7.disabled = false;

  track1 = plyAi;
  track2 = plyAiOrig;

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
    togglePlay7(false);
  } else {
    playing = !playing;
    if (track1.muted) {
      track2.pause();
    }
    track1.pause();
    togglePlay7(true);
    togglebtn7.disabled = true;
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

$("#checkbox4_nplayer").on("click", (e) => {
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

$("#checkbox5_nplayer").on("click", (e) => {
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

$("#checkbox6_nplayer").on("click", (e) => {
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

$("#checkbox7_nplayer").on("click", (e) => {
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
  togglePlay4(true);
  togglePlay5(true);
  togglePlay6(true);
  togglePlay7(true);
  track1.pause();
  track1.currentTime = 0;
  track2.pause();
  track2.currentTime = 0;
  playing = true;
  togglebtn.disabled = true;
  togglebtn2.disabled = true;
  togglebtn3.disabled = true;
  togglebtn4.disabled = true;
  togglebtn5.disabled = true;
  togglebtn6.disabled = true;
  togglebtn7.disabled = true;
  track1.muted = false;
});
