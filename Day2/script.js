gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});

gsap.from("#page2 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  // scrollTrigger: "#page2 #box" //Animation Starts when the user is in page2.

  scrollTrigger:{
    trigger: "#page2 #box",
    scroller: "body",
    // markers: true,
    start: "top 60%"
  }
})

gsap.from("#page3 #box", {
  scale: 0.4,
  rotate: 360,
  duration: 1,
  borderRadius: "100%",
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 45%",
    scrub: 2, //Can be used Numbers from, 1-5 or true/false.
  }
})

gsap.to("#page4 h1", {
  transform: "translateX(-35%)",
  scrollTrigger:{
    trigger: "#page4",  //Rule: When being used with pin
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 3,
    pin: true //Page stays at the same place, till the animations gets completed. [Pin the page while animating elements]
  }
})