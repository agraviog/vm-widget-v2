// Lazy load youtube iframe
function canUseWebP() {
  var elem = document.createElement("canvas");
  if (!!(elem.getContext && elem.getContext("2d"))) {
    return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
  }
  return false;
}
var youtube = document.querySelectorAll("div.youtube-video[data-embed]");
var canUseWebP = canUseWebP();
(function () {
  var youtube = document.querySelectorAll(".youtube-video");
  for (var i = 0; i < youtube.length; i++) {
    if (canUseWebP) {
      var source =
        "https://i.ytimg.com/vi_webp/" +
        youtube[i].dataset.embed +
        "/sddefault.webp";
    } else {
      var source =
        "https://img.youtube.com/vi/" +
        youtube[i].dataset.embed +
        "/sddefault.jpg";
    }
    var image = new Image();
    image.alt = "Yotube Image for video id " + youtube[i].dataset.embed;
    image.src = source;
    image.addEventListener(
      "load",
      (function () {
        youtube[i].appendChild(image);
      })(i)
    );
    youtube[i].addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("allow", "autoplay; encrypted-media");
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/" +
          this.dataset.embed +
          "?rel=0&showinfo=0&autoplay=1"
      );
      this.innerHTML = "";
      this.appendChild(iframe);
    });
  }
})();

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

// Blur nav on scroll
function scrollValue() {
  var navbar = document.getElementById("navbar");
  var scroll = window.scrollY;
  if (scroll < 40) {
    navbar.classList.remove("blur-nav");
  } else {
    navbar.classList.add("blur-nav");
  }
}
window.addEventListener("scroll", scrollValue);
