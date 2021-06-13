$(".button-nav").click(function () {
  $(".nav-list").toggleClass("slide");
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $(".navbar").css({ top: "0px" });
  } else {
    $(".navbar").css({ top: "-125px" });
  }
  prevScrollpos = currentScrollPos;
};

let boxTl = gsap.timeline();
tl = new TimelineMax({});
tl.staggerFrom(".hidden-text", 2, { y: "100%", ease: Power4.easeOut }, 0.15);

const words = ["Muhammad Fajri.", "a Front-End Developer."];

let cursor = gsap.to(`.cursor`, { opacity: 0, ease: "power2.inOut", repeat: -1 });

boxTl
  .to(".box", { duration: 1, width: "20vw", delay: 0.5, ease: "power4.inOut" })
  .from(".hi", { duration: 1, y: "7vw", ease: "power3.out" })
  .to(".box", {
    duration: 1,
    height: "7vw",
    ease: "elastic.easeOut",
    onComplete: () => masterTl.play(),
  })
  .to(".box", { duration: 1, autoAlpha: 0.5, yoyo: true, repeat: -1 });
// .to(".o-text", { duration: 1, autoAlpha: 0.5, yoyo: true, repeat: -1 });

let masterTl = gsap.timeline({ repeat: -1 }).pause();

words.forEach((word) => {
  let gtl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
  gtl.to(".o-text", { duration: 1.5, text: word });
  masterTl.add(gtl);
});
$(".nav-list .link-a").click(function () {
  $(".nav-list .link-a").removeClass("active-button");
  $(this).addClass("active-button");
});
