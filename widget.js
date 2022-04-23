var Webflow = Webflow || [];
Webflow.push(function () {
  const lottie = Webflow.require("lottie").lottie;
  const REQUEST_KEY = "voicemod_mic_request";
  const animations = lottie.getRegisteredAnimations();
  const API_URL = "https://api.voicemod.net/v2/cloud";
  const X_KEY = "DGx0ojrgI6lpD7M6kqecr4jkh5in4q8c";
  const MOD_AUDIO = "control_upload_audio_transformed";
  const ORIG_AUDIO = "control_upload_audio_original";
  const SHARE_SNIPPET_URL = "https://voicemod-net.webflow.io/share-snippet";
  const DEFAULT_VOICE = "original";
  const MAX_GET_RETRIES = 10;
  function getShareData(url) {
    return {
      title: "Voicemod share snippet",
      text: "Listen to my voicemod!",
      url,
    };
  }
  var voice1, voice2, voice3, voice4;
  var done = false;
  var choice = 1;

  const workerOptions = {
    OggOpusEncoderWasmPath:
      "https://cdn.jsdelivr.net/npm/opus-media-recorder@latest/OggOpusEncoder.wasm",
    WebMOpusEncoderWasmPath:
      "https://cdn.jsdelivr.net/npm/opus-media-recorder@latest/WebMOpusEncoder.wasm",
  };

  // ready | recording | loading | ready_to_play |  playing | paused | playing
  let state = "ready";
  let isTransformed = false;
  let chunks = [];
  let mediaRecorder = null;
  let recordInterval = 0;
  let recordIntervalId = null;
  let fetchInterval = null;
  let retryCount = 0;
  const convertedFiles = {
    baby: "",
    "magic-chords": "",
    cave: "",
    original: "",
  };

  const fetchIds = {
    baby: "",
    "magic-chords": "",
    cave: "",
  };

  const convertVoiceIds = ["baby", "magic-chords", "cave"];

  function getFileUrlOnActiveType() {
    const voiceId = $(".vm-widget--btns").attr("data-voiceid") || DEFAULT_VOICE;
    if (!!convertedFiles.original) {
      return convertedFiles[voiceId];
    }
    return null;
  }

  function toggleIcon() {
    state = "ready_to_play";
    $(".pause_icon--vm-widget").removeClass("played");
    $(".play_icon--vm-widget").addClass("paused");
  }

  function resetPlay() {
    const transformedEl = document.getElementById(MOD_AUDIO);
    const originalEl = document.getElementById(ORIG_AUDIO);
    if (transformedEl || originalEl) {
      transformedEl.currentTime = 0;
      transformedEl.pause();
      originalEl.pause();
      originalEl.currentTime = 0;
    }
  }

  function setFilesOnCorrectType() {
    setTimeout(() => {
      const voiceId =
        $(".vm-widget--btns").attr("data-voiceid") || DEFAULT_VOICE;
      const transformedUrl = convertedFiles[voiceId];

      if (transformedUrl) {
        //setAudio(transformedUrl, MOD_AUDIO);
        resetPlay();
      }
      toggleIcon();
    }, 50);
  }

  function handlePlay() {
    const transformedEl = document.getElementById(MOD_AUDIO);
    const originalEl = document.getElementById(ORIG_AUDIO);

    if (isTransformed) {
      transformedEl.play();
      originalEl.pause();
    } else {
      originalEl.play();
      transformedEl.pause();
    }
  }

  function createUrlBasedOnFile(file) {
    const blob = window.URL || window.webkitURL;
    return blob.createObjectURL(file);
  }

  async function submitAudioData(formData) {
    const originalFile = formData.get("audioFile");
    const formDataWithNewVoiceIds = convertVoiceIds.map((voiceId) => {
      const data = new FormData();
      data.append("audioFile", originalFile);
      data.append("voice", voiceId);
      return data;
    });

    try {
      const URL = `${API_URL}/audio`;
      const results = await Promise.all(
        formDataWithNewVoiceIds.map((body) =>
          fetch(URL, {
            method: "POST",
            headers: {
              "x-api-key": X_KEY,
            },
            body,
          })
        )
      );

      if (results.some((res) => res.status !== 202)) {
        throw new Error("Fetch was not successful!");
      }

      let i = 0;
      for (const result of results) {
        const { id } = await result.json();
        fetchIds[convertVoiceIds[i]] = id;
        i += 1;
      }

      const originalFileUrl = createUrlBasedOnFile(originalFile);
      convertedFiles.original = originalFileUrl;

      return true;
    } catch (e) {
      return false;
    }
  }

  function secondsToMinutes(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  function setAudio(url, id) {
    let audioEl = document.getElementById(id);
    audioEl.src = url;
    return audioEl;
  }

  function stopRecord() {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
    }
  }

  $(`.play-pause--vm-widget`).on("click", function () {
    if (done) {
      state = "playing";
      done = false;
    } else {
      state = state === "playing" ? "paused" : "playing";
    }

    if (state === "playing") {
      console.log(state);

      if (choice == 1) {
        voice1.play();
        voice2.play();
        voice3.play();
        voice4.play();
        voice2.muted = true;
        voice3.muted = true;
        voice4.muted = true;
      } else if (choice == 2) {
        voice1.play();
        voice2.play();
        voice3.play();
        voice4.play();
        voice1.muted = true;
        voice3.muted = true;
        voice4.muted = true;
      } else if (choice == 3) {
        voice1.play();
        voice2.play();
        voice3.play();
        voice4.play();
        voice1.muted = true;
        voice2.muted = true;
        voice4.muted = true;
      } else if (choice == 4) {
        voice1.play();
        voice2.play();
        voice3.play();
        voice4.play();
        voice1.muted = true;
        voice2.muted = true;
        voice3.muted = true;
      }
    } else {
      console.log(state);
      voice1.pause();
      voice2.pause();
      voice3.pause();
      voice4.pause();
    }

    $(".pause_icon--vm-widget").toggleClass("played");
    $(".play_icon--vm-widget").toggleClass("paused");
  });

  function showLoadingUI() {
    state = "loading";
    $(".record--vm-widget").css({ display: "none" });
    $(".loading_record--vm-widget").css({ display: "flex" });
    $(".recording-text").removeClass("active-text");
    $(".loading-text").addClass("active-text");
  }

  function showReadyToPlayUI() {
    state = "ready_to_play";
    $(".loading_record--vm-widget").css({ display: "none" });
    $(".vm-widget--img-wrapper").css({ display: "none" });
    $(".play-pause--vm-widget").css({ display: "flex" });
    $(".vm-widget--btns-wrapper").css({ display: "flex" });
    $(".control_share--vm-widget").css({ display: "flex" });
    $(".loading-text").removeClass("active-text");
    $(".done-text").addClass("active-text");
  }

  function setMicrophoneLocalStorage() {
    localStorage.setItem(REQUEST_KEY, "true");
  }

  async function validateMicrophoneAccess() {
    // if has navigator.permissions, validate, else, trust localStorage
    if (navigator?.permissions) {
      try {
        const micQuery = await navigator?.permissions.query({
          name: "microphone",
        });
        if (micQuery.state === "granted") {
          setMicrophoneLocalStorage();
        }
      } catch (e) {
        console.log({ e });
      }
    }
  }

  async function startRecordProcess() {
    $(".div-block-466").css({ display: "none" });
    resetPlay();
    if (navigator.mediaDevices) {
      await validateMicrophoneAccess();
      try {
        const hasRequestedPermission = localStorage.getItem(REQUEST_KEY);
        if (["ready", "ready_to_play", "playing", "paused"].includes(state)) {
          const userMedia = await navigator.mediaDevices.getUserMedia({
            audio: true,
          });

          mediaRecorder = new OpusMediaRecorder(
            userMedia,
            { mimeType: "audio/wav" },
            workerOptions
          );

          recordInterval = 0;
          if (mediaRecorder) {
            mediaRecorder.onstart = function () {
              state = "recording";
              animations[0].play();
              $(".start-text").removeClass("active-text");
              $(".recording-text").addClass("active-text");
              recordIntervalId = setInterval(() => {
                recordInterval += 1;
                if (recordInterval > 10) {
                  stopRecord();
                }
              }, 1000);
            };

            mediaRecorder.onstop = function () {
              showLoadingUI();
              userMedia.getTracks().forEach((track) => track.stop());
              animations[0].stop();
              clearInterval(recordIntervalId);
              recordIntervalId = null;
              initializeUpload();
            };

            mediaRecorder.ondataavailable = function (e) {
              chunks.push(e.data);
            };
            if (hasRequestedPermission) {
              mediaRecorder.start();
            } else {
              userMedia.getTracks().forEach((track) => track.stop());
            }
            setMicrophoneLocalStorage();
          }
        } else if (state === "recording") {
          mediaRecorder.stop();
        }
      } catch (e) {
        localStorage.removeItem(REQUEST_KEY);
      }
    }
  }

  $(".record--vm-widget").on("click", startRecordProcess);

  function clearFetchInterval() {
    clearInterval(fetchInterval);
    fetchInterval = null;
    retryCount = 0;
  }

  async function fetchAudioUrl() {
    fetchInterval = setInterval(async () => {
      if (retryCount > MAX_GET_RETRIES) {
        clearFetchInterval();
      }
      const results = await Promise.all(
        convertVoiceIds.map((voiceKey) =>
          fetch(`${API_URL}/audio/${fetchIds[voiceKey]}`, {
            headers: {
              "x-api-key": X_KEY,
            },
          })
        )
      );

      retryCount += 1;

      if (results.some((res) => [400, 500].includes(res.status))) {
        clearFetchInterval();
        throw new Error("Fetch was not successful!");
      }
      if (results.every((res) => res.status === 200)) {
        let i = 0;
        for (const result of results) {
          const { url } = await result.json();
          convertedFiles[convertVoiceIds[i]] = url;
          i += 1;
        }
        showReadyToPlayUI();

        const recentActiveFile = getFileUrlOnActiveType();
        //setAudio(convertedFiles.original, ORIG_AUDIO);
        //setAudio(recentActiveFile, MOD_AUDIO);
        voice1 = setAudio(convertedFiles.original, "orig");
        voice2 = setAudio(convertedFiles.baby, "baby");
        voice3 = setAudio(convertedFiles.cave, "cave");
        voice4 = setAudio(convertedFiles["magic-chords"], "magic-chords");
        voice1.addEventListener("timeupdate", (e) => {
          console.log(currentTime);
          var currentTime = e.target.currentTime.toFixed(2);
          var musicDuration = voice1.duration.toFixed(2);

          if (currentTime == musicDuration) {
            done = true;
            $(".pause_icon--vm-widget").removeClass("played");
            $(".play_icon--vm-widget").addClass("paused");
          }
        });
        chunks = [];
        clearFetchInterval();
      }
    }, 1000);
  }

  async function initializeUpload() {
    // has recorded
    if (mediaRecorder && recordInterval > 0) {
      stopRecord();
      const blob = new Blob(chunks, { type: "audio/wav" });
      const file = new File([blob], `recoring-for-voicemod.wav`, {
        type: "audio/wav",
      });
      const formData = new FormData();
      formData.append("audioFile", file);
      const success = await submitAudioData(formData);

      if (!success) {
        $(".upload-fail-wrapper").css({ display: "flex" });
      }

      setTimeout(() => {
        fetchAudioUrl();
      }, 1000);
    }
  }

  function voiceClick() {
    setFilesOnCorrectType();
    toggleIcon();
  }

  const buttons = ["original-btn", "voice1-btn", "voice2-btn", "voice3-btn"];

  function showVoiceItem(voiceItemClass) {
    const inactiveClasses = buttons.filter(
      (button) => button !== voiceItemClass
    );
    inactiveClasses.forEach((voiceClass) => {
      $(voiceClass).removeClass("active");
    });
    $(voiceItemClass).addClass("active");
  }

  function setVoiceItemAttr(item) {
    $(".vm-widget--btns").attr("data-voiceid", item);
  }

  $(".original-btn").on("click", function () {
    choice = 1;
    showVoiceItem(".original-btn");
    isTransformed = false;
    if (!voice2.muted) {
      voice1.currentTime = voice2.currentTime;
    } else if (!voice3.muted) {
      voice1.currentTime = voice3.currentTime;
    } else {
      voice1.currentTime = voice4.currentTime;
    }
    voice2.muted = true;
    voice1.muted = false;
    voice1.addEventListener("timeupdate", (e) => {
      var currentTime = e.target.currentTime.toFixed(2);
      var musicDuration = voice1.duration.toFixed(2);

      if (currentTime == musicDuration) {
        done = true;
        $(".pause_icon--vm-widget").removeClass("played");
        $(".play_icon--vm-widget").addClass("paused");
      }
    });
    voice3.muted = true;
    voice4.muted = true;
    setVoiceItemAttr("original");
  });

  $(".voice1-btn").on("click", function () {
    choice = 2;
    showVoiceItem(".voice1-btn");
    isTransformed = true;

    if (!voice1.muted) {
      voice2.currentTime = voice1.currentTime;
    } else if (!voice3.muted) {
      voice2.currentTime = voice3.currentTime;
    } else {
      voice2.currentTime = voice4.currentTime;
    }
    voice2.muted = false;
    voice2.addEventListener("timeupdate", (e) => {
      var currentTime = e.target.currentTime.toFixed(2);
      var musicDuration = voice2.duration.toFixed(2);

      if (currentTime == musicDuration) {
        done = true;
        $(".pause_icon--vm-widget").removeClass("played");
        $(".play_icon--vm-widget").addClass("paused");
      }
    });
    voice1.muted = true;
    voice3.muted = true;
    voice4.muted = true;
    setVoiceItemAttr(convertVoiceIds[0]);
  });

  $(".voice2-btn").on("click", function () {
    choice = 3;
    showVoiceItem(".voice2-btn");
    isTransformed = true;
    if (!voice1.muted) {
      voice3.currentTime = voice1.currentTime;
    } else if (!voice2.muted) {
      voice3.currentTime = voice2.currentTime;
    } else {
      voice3.currentTime = voice4.currentTime;
    }
    voice2.muted = true;
    voice1.muted = true;
    voice3.muted = false;
    voice3.addEventListener("timeupdate", (e) => {
      var currentTime = e.target.currentTime.toFixed(2);
      var musicDuration = voice3.duration.toFixed(2);

      if (currentTime == musicDuration) {
        done = true;
        $(".pause_icon--vm-widget").removeClass("played");
        $(".play_icon--vm-widget").addClass("paused");
      }
    });
    voice4.muted = true;
    setVoiceItemAttr(convertVoiceIds[2]);
  });

  $(".voice3-btn").on("click", function () {
    choice = 4;
    showVoiceItem(".voice3-btn");
    isTransformed = true;
    if (!voice1.muted) {
      voice4.currentTime = voice1.currentTime;
    } else if (!voice3.muted) {
      voice4.currentTime = voice3.currentTime;
    } else {
      voice4.currentTime = voice2.currentTime;
    }
    voice2.muted = true;
    voice1.muted = true;
    voice3.muted = true;
    voice4.muted = false;
    voice4.addEventListener("timeupdate", (e) => {
      var currentTime = e.target.currentTime.toFixed(2);
      var musicDuration = voice4.duration.toFixed(2);

      if (currentTime == musicDuration) {
        done = true;
        $(".pause_icon--vm-widget").removeClass("played");
        $(".play_icon--vm-widget").addClass("paused");
      }
    });
    setVoiceItemAttr(convertVoiceIds[1]);
  });

  $(".control_share--vm-widget").on("click", async function () {
    const voiceId = $(".vm-widget--btns").attr("data-voiceid") || DEFAULT_VOICE;
    const id = fetchIds[voiceId];
    const url = `${SHARE_SNIPPET_URL}?voiceId=${voiceId}&id=${id}`;
    if (navigator?.share) {
      try {
        const shareData = getShareData(url);
        if (navigator?.canShare?.(shareData)) {
          await navigator.share(shareData);
        }
      } catch (e) {
        console.log({ e });
      }
    } else {
      $(".share-link-wrapper--vm-widget").css({ display: "block" });
      $(".share-link--vm-widget").text(url);
    }
  });

  $(".share-link_btn--vm-widget").on("click", async function () {
    const voiceId = $(".vm-widget--btns").attr("data-voiceid") || DEFAULT_VOICE;
    const id = fetchIds[voiceId];
    const text = `${SHARE_SNIPPET_URL}?voiceId=${voiceId}&id=${id}`;
    await navigator.clipboard.writeText(text);
    $(".share-link-wrapper--vm-widget").css({ display: "none" });
  });

  $(".control_reset--vm-widget").on("click", function () {
    location.reload();
  });
});
