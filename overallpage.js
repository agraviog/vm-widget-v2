var Webflow = Webflow || [];
Webflow.push(function () {
  // Add click event to buttons
  incrementCount.addEventListener("click", handleIncrement);
  decrementCount.addEventListener("click", handleDecrement);

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
