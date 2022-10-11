var Webflow = Webflow || [];
Webflow.push(function () {
  // Nav menu mobile open
  $(".nav-menu").click(function (e) {
    e.preventDefault();
    $(".nav-mobile").addClass("nav-mobile-open");
    // Prevent body from scrolling
    $("body").css("overflow", "hidden");
  });

  // Nav menu mobile close
  $(".close-nav-button, .nav-close-wrapper").click(function (e) {
    e.preventDefault();
    $(".nav-mobile").removeClass("nav-mobile-open");
    // Allow body from scrolling
    $("body").css("overflow", "auto");
  });
});
