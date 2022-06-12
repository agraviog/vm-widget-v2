// Find all text with .tricks class and break each letter into a span
var tricksWord = document.getElementsByClassName("tricks");
for (var i = 0; i < tricksWord.length; i++) {
  var wordWrap = tricksWord.item(i);
  wordWrap.innerHTML = wordWrap.innerHTML.replace(
    /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
    '$1<span class="tricksword">$2</span>'
  );
}

var tricksLetter = document.getElementsByClassName("tricksword");
for (var i = 0; i < tricksLetter.length; i++) {
  var letterWrap = tricksLetter.item(i);
  letterWrap.innerHTML = letterWrap.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
}

// Fade Up Animation
var fadeUp = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUp.add({
  targets: ".fade-up .letter",
  translateY: [100, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1400,
  delay: (el, i) => 300 + 30 * i,
});

// Play your animation with these
fadeUp.play();

// Wait before playing animation
setTimeout(() => {
  // Put the play below this line
}, 800);

// Play animaton when something is clicked
$(".your-button-class").click(function () {
  // Put the play below this line
});

// Play animaton when hovered in
$(".your-button-class").mouseenter(function () {
  // Put the play below this line
});

// Play animation when scrolled into view
$("#heading-container").on("inview", function (event, isInView) {
  if (isInView) {
  } else {
  }
});

$(".link__wrap").on("mouseenter", function () {
  $(".link__circle").toggleClass("btn__hover-in");
});
$(".link__wrap").on("mouseleave", function () {
  $(".link__circle").removeClass("btn__hover-in");
});

$(".nav__btn").on("mouseenter", function () {
  $(".link__circle--nav").toggleClass("btn__hover-in--nav");
});
$(".nav__btn").on("mouseleave", function () {
  $(".link__circle--nav").removeClass("btn__hover-in--nav");
});

$(".footer__link--wrapper").on("mouseenter", function () {
  $(".link__circle--footer").toggleClass("btn__hover-in--footer");
});
$(".footer__link--wrapper").on("mouseleave", function () {
  $(".link__circle--footer").removeClass("btn__hover-in--footer");
});
