// Target audio voices
var plyNarratorOrig = document.getElementById("narrator");
var plyNarrator = document.getElementById("vm-narrator");
var plyBobOrig = document.getElementById("bob");
var plyBob = document.getElementById("vm-bob");
var plyAliceOrig = document.getElementById("alice");
var plyAlice = document.getElementById("vm-alice");
var plyPilotOrig = document.getElementById("pilot");
var plyPilot = document.getElementById("vm-pilot");
var plyAstroOrig = document.getElementById("astro");
var plyAstro = document.getElementById("vm-astro");
var plyMothershipOrig = document.getElementById("mothership");
var plyMothership = document.getElementById("vm-mothership");
var plyAiOrig = document.getElementById("ai");
var plyAi = document.getElementById("vm-ai");

// Target buttons
var narratorOption = document.getElementById("narrator-o");
var bobOption = document.getElementById("bob-o");
var aliceOption = document.getElementById("alice-o");
var pilotOption = document.getElementById("pilot-o");
var astroOption = document.getElementById("astro-o");
var mothershipOption = document.getElementById("mothership-o");
var aiOption = document.getElementById("ai-o");

// Duration, progress bar and toggle button variables
var duration = document.getElementById("duration--nplayer");
var togglebtn = document.getElementById("checkbox_nplayer");
var progressBar = document.getElementById("progress-play");

var voice = 1;
var playing = true;
var track1 = plyNarrator;
var track2 = plyNarratorOrig;
var currentTime;
var musicDuration;
var progress;

// Function on load
$(window).on("load", function () {
  $(".control_play--nplayer").removeClass("control_disable");
  $(".control_play--nplayer").removeClass("disable-play");
  $(".checkbox--nplayer-2").addClass("w--redirected-checked");
  togglebtn.disabled = true;
  //duration.innerHTML = secondsToTime(track1.duration.toFixed(2));
});

// Change current button function
$(".nplayer--btn-2").on("click", function () {
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

// Toggle play pause function
function togglePlay(showPlay) {
  if (showPlay) {
    document.getElementsByClassName("play_icon--nplayer-2")[0].style.display =
      "block";
    document.getElementsByClassName("pause_icon--nplayer-2")[0].style.display =
      "none";
  } else {
    document.getElementsByClassName("play_icon--nplayer-2")[0].style.display =
      "none";
    document.getElementsByClassName("pause_icon--nplayer-2")[0].style.display =
      "block";
  }
}

narratorOption.onclick = function () {
  voice = 1;
  progressBar.style.width = "0%";
  togglePlay(true);
  $(".checkbox--nplayer-2").addClass("w--redirected-checked");
  track1.pause();
  track1.currentTime = 0;
  track2.pause();
  track2.currentTime = 0;
  playing = true;
  togglebtn.disabled = true;
  track1.muted = false;
};

bobOption.onclick = function () {
  voice = 2;
  progressBar.style.width = "0%";
  togglePlay(true);
  $(".checkbox--nplayer-2").addClass("w--redirected-checked");
  track1.pause();
  track1.currentTime = 0;
  track2.pause();
  track2.currentTime = 0;
  playing = true;
  togglebtn.disabled = true;
  track1.muted = false;
};

aliceOption.onclick = function () {
  voice = 3;
  progressBar.style.width = "0%";
  togglePlay(true);
  $(".checkbox--nplayer-2").addClass("w--redirected-checked");
  track1.pause();
  track1.currentTime = 0;
  track2.pause();
  track2.currentTime = 0;
  playing = true;
  togglebtn.disabled = true;
  track1.muted = false;
};

pilotOption.onclick = function () {
  voice = 4;
  progressBar.style.width = "0%";
  togglePlay(true);
  $(".checkbox--nplayer-2").addClass("w--redirected-checked");
  track1.pause();
  track1.currentTime = 0;
  track2.pause();
  track2.currentTime = 0;
  playing = true;
  togglebtn.disabled = true;
  track1.muted = false;
};

astroOption.onclick = function () {
  voice = 5;
  progressBar.style.width = "0%";
  togglePlay(true);
  $(".checkbox--nplayer-2").addClass("w--redirected-checked");
  track1.pause();
  track1.currentTime = 0;
  track2.pause();
  track2.currentTime = 0;
  playing = true;
  togglebtn.disabled = true;
  track1.muted = false;
};

mothershipOption.onclick = function () {
  voice = 6;
  progressBar.style.width = "0%";
  togglePlay(true);
  $(".checkbox--nplayer-2").addClass("w--redirected-checked");
  track1.pause();
  track1.currentTime = 0;
  track2.pause();
  track2.currentTime = 0;
  playing = true;
  togglebtn.disabled = true;
  track1.muted = false;
};

aiOption.onclick = function () {
  voice = 7;
  progressBar.style.width = "0%";
  togglePlay(true);
  $(".checkbox--nplayer-2").addClass("w--redirected-checked");
  track1.pause();
  track1.currentTime = 0;
  track2.pause();
  track2.currentTime = 0;
  playing = true;
  togglebtn.disabled = true;
  track1.muted = false;
};

plyNarrator.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyNarrator.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBar.style.width = `${progress}%`;
  duration.innerHTML = secondsToTime(currentTime);

  if (currentTime == musicDuration) {
    togglePlay(true);
    togglebtn.disabled = true;
    $(".checkbox--nplayer-2").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

plyBob.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyBob.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBar.style.width = `${progress}%`;
  duration.innerHTML = secondsToTime(currentTime);

  if (currentTime == musicDuration) {
    togglePlay(true);
    togglebtn.disabled = true;
    $(".checkbox--nplayer-2").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

plyAlice.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyAlice.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBar.style.width = `${progress}%`;
  duration.innerHTML = secondsToTime(currentTime);

  if (currentTime == musicDuration) {
    togglePlay(true);
    togglebtn.disabled = true;
    $(".checkbox--nplayer-2").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

plyPilot.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyPilot.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBar.style.width = `${progress}%`;
  duration.innerHTML = secondsToTime(currentTime);

  if (currentTime == musicDuration) {
    togglePlay(true);
    togglebtn.disabled = true;
    $(".checkbox--nplayer-2").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

plyAstro.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyAstro.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBar.style.width = `${progress}%`;
  duration.innerHTML = secondsToTime(currentTime);

  if (currentTime == musicDuration) {
    togglePlay(true);
    togglebtn.disabled = true;
    $(".checkbox--nplayer-2").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

plyMothership.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyMothership.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBar.style.width = `${progress}%`;
  duration.innerHTML = secondsToTime(currentTime);

  if (currentTime == musicDuration) {
    togglePlay(true);
    togglebtn.disabled = true;
    $(".checkbox--nplayer-2").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

plyAi.addEventListener("timeupdate", (e) => {
  currentTime = e.target.currentTime.toFixed(2);
  musicDuration = plyAi.duration.toFixed(2);
  progress = (currentTime / musicDuration) * 100;
  progressBar.style.width = `${progress}%`;
  duration.innerHTML = secondsToTime(currentTime);

  if (currentTime == musicDuration) {
    togglePlay(true);
    togglebtn.disabled = true;
    $(".checkbox--nplayer-2").addClass("w--redirected-checked");
    playing = true;
    track1.muted = false;
  }
});

$(".control_play--nplayer").on("click", function (e) {
  togglebtn.disabled = false;
  switch (voice) {
    case 1:
      track1 = plyNarrator;
      track2 = plyNarratorOrig;
      break;
    case 2:
      track1 = plyBob;
      track2 = plyBobOrig;
      break;
    case 3:
      track1 = plyAlice;
      track2 = plyAliceOrig;
      break;
    case 4:
      track1 = plyPilot;
      track2 = plyPilotOrig;
      break;
    case 5:
      track1 = plyAstro;
      track2 = plyAstroOrig;
      break;
    case 6:
      track1 = plyMothership;
      track2 = plyMothershipOrig;
      break;

    case 7:
      track1 = plyAi;
      track2 = plyAiOrig;
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
  } else {
    track2.muted = true;
    track1.currentTime = track2.currentTime;
    track1.muted = false;
    playing = false;
  }
});
