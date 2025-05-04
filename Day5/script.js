const menuOpen = document.querySelector("#nav i");
const menuClose = document.querySelector("#full i");

var tl = gsap.timeline();
// var tl = gsap.timeline({paused: true});

tl.to("#full", {
  right: 0,
  duration: 0.8,
})
tl.from("#full h4", {
  x: 150,
  duration: 0.8,
  stagger: 0.3,
  opacity: 0,
})
tl.from("#full i", {
  opacity: 0,
})

tl.pause();

menuOpen.addEventListener("click", () => {
  tl.play();
})

menuClose.addEventListener("click", () => {
  tl.reverse();
})