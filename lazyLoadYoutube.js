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
