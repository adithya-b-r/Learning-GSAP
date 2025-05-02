var path = `M 10 80 Q 615 80 1230 80`;
var finalPath = `M 10 80 Q 615 80 1230 80`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", (e) => {
  path = `M 10 80 Q ${e.x} ${e.y} 1230 80`;

  // attr - Arribute
  // d - attribute
  // path - Above value

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out",
  })
})

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: {d: finalPath},
    ease: "elastic.out(1, 0.2)",
    duration: 1.5,
  })
})