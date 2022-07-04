var Webflow = Webflow || [];
Webflow.push(function () {
  //ai voices title and description
  $(".voice-1").click(() => {
    document.querySelector(".voice-title").innerHTML = "The Narrator";
    document.querySelector(".voice-description").innerHTML =
      "A deep, soothing voice that can make anything feel epic: from your greatest achievements down to what you had for breakfast. This voice will take what you say and make it sound like it was scripted for the silver screen.";
  });

  $(".voice-2").click(() => {
    document.querySelector(".voice-title").innerHTML = "Bob";
    document.querySelector(".voice-description").innerHTML =
      "Meet Bob, a middle-aged man. You’re the man, Bob! With this AI voice, you’re always the man! With this male AI voice, your squad will know you’re the man!";
  });

  $(".voice-3").click(() => {
    document.querySelector(".voice-title").innerHTML = "Alice";
    document.querySelector(".voice-description").innerHTML =
      "Meet Alice. She’s just a regular girl like you or me.";
  });

  $(".voice-4").click(() => {
    document.querySelector(".voice-title").innerHTML = "Pilot";
    document.querySelector(".voice-description").innerHTML =
      "Step into the cockpit as Ellen or Michael, the two characters that come with this voice. With dynamic effects and epic background music that you can toggle on and off, you’re sitting up front on this aircraft.";
  });

  $(".voice-5").click(() => {
    document.querySelector(".voice-title").innerHTML = "Astronaut";
    document.querySelector(".voice-description").innerHTML =
      "What kid didn’t want to be an astronaut? Well, at least now you can sound like one. Actually, with this voice, you can sound like two*—*John and Anne. Play around with the carefully designed effects, like space ambiance, radio comms, and the oxygen value to hear what a mission to Outer Space sounds likes.";
  });

  $(".voice-6").click(() => {
    document.querySelector(".voice-title").innerHTML = "Mothership";
    document.querySelector(".voice-description").innerHTML =
      "Please identify yourself and disengage. With this digitized female voice, your listeners will hear you loud and clear.";
  });

  $(".voice-7").click(() => {
    document.querySelector(".voice-title").innerHTML = "AI-9000";
    document.querySelector(".voice-description").innerHTML =
      "Inspired by the main antagonist in Arthur C. Clarke’s famous space-based series, try this fictional AI voice for the perfect digitized effect.";
  });
});
