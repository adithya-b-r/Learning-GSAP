gsap.to("#box", {
  x: 800,
  repeat: -1,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "green",
  borderRadius: "50%",
  scale: "0.5",
  yoyo: true,
});

gsap.from("h1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  // stagger: 1, //One by one, Not all at once. [1: 1s]
  stagger: -1, //Last first [Reverse order]
});

var t1 = gsap.timeline();

t1.to("#box1", {
  x: 800,
})
  .to("#box2",
    {
      x: 800,
    })
  .to("#box3",
    {
      x: 800,
    });

var navtl = gsap.timeline();

navtl.from("h2", {
  y: -20,
  opacity: 0,
})
  .from("#menu h4", {
    y: -20,
    opacity: 0,
    stagger: .3
  }).from("#home p", {
    y:20,
    opacity: 0,
    duration: 0.5,
    scale: 0.4
  })