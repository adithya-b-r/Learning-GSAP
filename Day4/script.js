const cursor = document.getElementById('cursor');
const imgDiv = document.getElementById("image");

document.addEventListener("mousemove", (e) => {
  cursor.style.display = "flex";

  gsap.to(cursor, {
    x: e.x - 10,
    y: e.y - 10,
    duration: 1,
    ease: "back.out(1.7)"
  })
});

document.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});

imgDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More"

  gsap.to(cursor, {
    scale: 3.5,
    backgroundColor: '#ffffffa8'
  })
});

imgDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = ""

  gsap.to(cursor, {
    scale: 1,
    backgroundColor: '#fff'
  })
});