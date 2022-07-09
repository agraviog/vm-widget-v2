var Webflow = Webflow || [];
Webflow.push(function () {
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
  $(".menu-trigger").on("click", function () {
    $("body").toggleClass("no-scroll");
  });
});
