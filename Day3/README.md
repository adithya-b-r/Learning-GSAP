# GSAP Learning – Day 3

Interactive SVG path animation using GSAP and the `attr` plugin for real-time morphing on mouse movement.

## 🗂️ Files

- `index.html` – Contains SVG with a `<path>` element inside `#string` div
- `style.css` – Basic layout and background styling
- `script.js` – Dynamic path animation using `gsap.to()` and `attr`

## ✨ Concept: SVG Path Morphing

Mouse movement bends a quadratic Bézier curve inside an SVG using GSAP, creating a **rubber-band string** effect.

## 🧩 Path Syntax Explanation

```svg
<path d="M 10 80 Q 615 80 1230 80" />
```

* `M 10 80`: Move to point (10, 80)
* `Q 615 80 1230 80`: Quadratic Bézier curve

  * Control point: (615, 80)
  * Endpoint: (1230, 80)

👉 When the mouse moves, the control point (`Q x y`) is replaced by the current mouse position (`e.x`, `e.y`), creating real-time curve bending.

## 📜 Code Snippets

### Dynamic Update on Mousemove

```js
string.addEventListener("mousemove", (e) => {
  path = `M 10 80 Q ${e.x} ${e.y} 1230 80`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out",
  });
});
```

### Snap Back on Mouseleave

```js
string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    ease: "elastic.out(1, 0.2)",
    duration: 1.5,
  });
});
```

## 💡 Key GSAP Techniques

* `gsap.to(..., { attr: { d: ... } })` — Animates SVG `d` attribute
* `ease: "power3.out"` — Smooth follow animation
* `ease: "elastic.out"` — Springy snap-back effect