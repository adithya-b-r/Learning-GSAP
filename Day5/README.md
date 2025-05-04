# GSAP Day 5 – Sidebar Menu Animation

This project demonstrates how to use GSAP's `timeline()` to animate a sidebar menu with play, pause, reverse, and other timeline control functionalities.

---

## 💡 Features

- Menu slide-in animation
- Text and close button reveal using timeline
- Controls: `.play()`, `.pause()`, `.reverse()` and more

---

## 🧩 Code Overview

### HTML Structure

```html
<div id="main">
  <div id="nav">
    <h2>Sheriyans</h2>
    <i class="ri-menu-3-fill"></i>
  </div>
  <div id="full">
    <h4>Work</h4>
    <h4>About</h4>
    <h4>Services</h4>
    <h4>Courses</h4>
    <h4>Contact Us</h4>
    <i class="ri-close-line"></i>
  </div>
</div>
````

### JavaScript (GSAP Timeline Control)

```js
const menuOpen = document.querySelector("#nav i");
const menuClose = document.querySelector("#full i");

var tl = gsap.timeline();
tl.to("#full", {
  right: 0,
  duration: 0.8,
});
tl.from("#full h4", {
  x: 150,
  duration: 0.8,
  stagger: 0.3,
  opacity: 0,
});
tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menuOpen.addEventListener("click", () => {
  tl.play();
});

menuClose.addEventListener("click", () => {
  tl.reverse();
});
```

---

## 🛠️ GSAP Timeline Controls

| Method             | Description                                  |
| ------------------ | -------------------------------------------- |
| `.play()`          | Play the timeline forward from current point |
| `.pause()`         | Pause the timeline                           |
| `.reverse()`       | Play the timeline in reverse                 |
| `.restart()`       | Restart the timeline from beginning          |
| `.seek(time)`      | Jump to a specific time (in seconds)         |
| `.progress(value)` | Get/Set progress (0 to 1)                    |
| `.time(time)`      | Get/Set the current time of the timeline     |
| `.kill()`          | Kill the timeline and all animations         |
| `.clear()`         | Remove all animations from the timeline      |
| `.addLabel(name)`  | Add a label at the current position          |
| `.play("label")`   | Play the timeline from a specific label      |

---

## 🔗 Resources

* [GSAP Official Docs](https://gsap.com/docs/v3/)
* [Remix Icon](https://remixicon.com/)