# Day 4 – Custom Cursor with GSAP

An interactive animated cursor using GSAP. The cursor follows the mouse smoothly and transforms on hover over a specific element.

## 🧠 Features

- Smooth animated cursor using `gsap.to()`
- Cursor scales and shows text when hovering over the image box
- Returns to original state on mouse leave

## 📦 Key GSAP Concepts

- `gsap.to()` for animating position (`x`, `y`) and scale
- `ease: "back.out(1.7)"` for a soft bounce movement
- Custom cursor behavior tied to mouse events

## ✨ Behavior

| Action               | Effect                               |
|----------------------|----------------------------------------|
| Mouse move           | Cursor follows with easing            |
| Mouse leave document | Cursor hides                          |
| Hover over image     | Cursor enlarges and shows "View More" |
| Leave image          | Cursor shrinks and resets             |


## 💡 Code Highlights

```js
document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x - 10,
    y: e.y - 10,
    duration: 1,
    ease: "back.out(1.7)"
  });
});
```

```js
imgDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, { scale: 3.5, backgroundColor: "#ffffffa8" });
});
```