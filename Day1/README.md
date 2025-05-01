# GSAP Learning – Day 1

Basic GSAP animation practice using HTML, CSS, and JavaScript.

## 🔧 How to Run

```bash
git clone https://github.com/adithya-b-r/Learning-GSAP.git
cd Learning-GSAP
```

Then open `index.html` in your browser.

## 📂 File Structure

- `index.html` – Page layout and elements
- `style.css` – Styling for nav, boxes, and layout
- `script.js` – GSAP animations

## ✨ GSAP Examples

### 1. `gsap.to()`

```js
gsap.to("#box", {
  x: 800,
  repeat: -1,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "green",
  borderRadius: "50%",
  scale: 0.5,
  yoyo: true,
});
```

### 2. `gsap.from()` with stagger

```js
gsap.from("h1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  stagger: -1,
});
```

### 3. Timeline animation

```js
var t1 = gsap.timeline();

t1.to("#box1", { x: 800 })
  .to("#box2", { x: 800 })
  .to("#box3", { x: 800 });
```

### 4. Navigation animation

```js
var navtl = gsap.timeline();

navtl.from("h2", { y: -20, opacity: 0 })
     .from("#menu h4", {
       y: -20,
       opacity: 0,
       stagger: 0.3,
     })
     .from("#home p", {
       y: 20,
       opacity: 0,
       duration: 0.5,
       scale: 0.4,
     });
```

## 🧠 Notes

- `repeat: -1` → infinite loop  
- `yoyo: true` → reverses animation on each repeat  
- `stagger: -1` → animates elements in reverse order  
- `timeline()` → for sequencing animations in order  