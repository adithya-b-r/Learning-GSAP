# GSAP Learning – Day 2

Scroll-triggered GSAP animations across multiple full-page sections using `ScrollTrigger`.

## 🗂️ Files

- `index.html` – Full-page sections (`#page1` to `#page5`)
- `style.css` – Layout, background colors, and box styles
- `script.js` – Scroll-based animations using GSAP + ScrollTrigger


## ⚙️ GSAP Features Used

### Basic Entry Animation

```js
gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});
```

### Scroll-Triggered Animation (Page 2)

```js
gsap.from("#page2 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    start: "top 60%"
  }
});
```

### Scroll + Scrub Animation (Page 3)

```js
gsap.from("#page3 #box", {
  scale: 0.4,
  rotate: 360,
  duration: 1,
  borderRadius: "100%",
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller: "body",
    start: "top 60%",
    end: "top 45%",
    scrub: 2
  }
});
```

### Pinned Section Scroll (Page 4)

```js
gsap.to("#page4 h1", {
  transform: "translateX(-35%)",
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    start: "top 0%",
    end: "top -150%",
    scrub: 3,
    pin: true,
    markers: true // for debugging
  }
});
```

## 💡 Key Concepts

* `scrollTrigger.trigger`: Element that triggers the animation
* `start` / `end`: Scroll positions (relative to viewport)
* `scrub`: Sync animation with scroll
* `pin`: Keep element fixed during scroll
* `markers`: Debug scroll start/end visually