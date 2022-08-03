var Webflow = Webflow || [];
Webflow.push(function () {
  //scrolltrigger
  gsap.registerPlugin(SplitText, ScrollTrigger);

  //nav blur when scrolled
  gsap.to(".nav-main", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: () => innerHeight / 2 + " top",
      scrub: 0.25,
    },
    backdropFilter: "blur(20px)",
    duration: 0.8,
    ease: "Circ.easeOut",
  });

  //gsap split text
  const quotes = document.querySelectorAll(".split-text");

  function setupSplits() {
    quotes.forEach((quote) => {
      if (quote.anim) {
        quote.anim.progress(1).kill();
        quote.split.revert();
      }

      quote.split = new SplitText(quote, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });

      // Set up the anim
      quote.anim = gsap.from(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          start: "top 80%",
        },
        duration: 0.6,
        ease: "circ.out",
        y: 200,
        stagger: 0.007,
        onComplete: () => {
          quote.anim.progress(1).kill();
          quote.split.revert();
        },
      });
    });
  }

  ScrollTrigger.addEventListener("refresh", setupSplits);
  setupSplits();

  //global animation

  if ($(window).width() > 991) {
    //main button animation
    $(".link__wrap").on("mouseenter", function () {
      $(".link__circle").addClass("btn__hover-in");
    });
    $(".link__wrap").on("mouseleave", function () {
      $(".link__circle").removeClass("btn__hover-in");
    });

    //nav button animation
    $(".nav__btn").on("mouseenter", function () {
      $(".link__circle--nav").addClass("btn__hover-in--nav");
    });
    $(".nav__btn").on("mouseleave", function () {
      $(".link__circle--nav").removeClass("btn__hover-in--nav");
    });

    //footer micro animation
    $(".link-tw").on("mouseenter", function () {
      $("#circle-tw").addClass("btn__hover-in--footer");
      $(".tw-radius").css("border-color", "rgba(255, 255, 255, 0)");
    });
    $(".link-tw").on("mouseleave", function () {
      $("#circle-tw").removeClass("btn__hover-in--footer");
      $(".tw-radius").css("border-color", "rgba(255, 255, 255, 0.5)");
    });

    $(".link-tt").on("mouseenter", function () {
      $("#circle-tt").addClass("btn__hover-in--footer");
      $(".tt-radius").css("border-color", "rgba(255, 255, 255, 0)");
    });
    $(".link-tt").on("mouseleave", function () {
      $("#circle-tt").removeClass("btn__hover-in--footer");
      $(".tt-radius").css("border-color", "rgba(255, 255, 255, 0.5)");
    });

    $(".link-yt").on("mouseenter", function () {
      $("#circle-yt").addClass("btn__hover-in--footer");
      $(".yt-radius").css("border-color", "rgba(255, 255, 255, 0)");
    });
    $(".link-yt").on("mouseleave", function () {
      $("#circle-yt").removeClass("btn__hover-in--footer");
      $(".yt-radius").css("border-color", "rgba(255, 255, 255, 0.5)");
    });

    $(".link-dc").on("mouseenter", function () {
      $("#circle-dc").addClass("btn__hover-in--footer");
      $(".dc-radius").css("border-color", "rgba(255, 255, 255, 0)");
    });
    $(".link-dc").on("mouseleave", function () {
      $("#circle-dc").removeClass("btn__hover-in--footer");
      $(".dc-radius").css("border-color", "rgba(255, 255, 255, 0.5)");
    });
  } else {
  }

  //open menu no scroll
  $(".menu-button").on("click", function () {
    $("body").toggleClass("no-scroll");
  });

  $("a").mouseenter(function () {
    $(".cursor").click();
  });
  $("a").mouseleave(function () {
    $(".cursor").click();
  });

  //nav menu animation when clicked
  $(".menu-button").on("click", function () {
    $(".voicemod-logo").toggleClass("logo-white");
    $(".nav-main").toggleClass("nav-main-open");
  });
});
