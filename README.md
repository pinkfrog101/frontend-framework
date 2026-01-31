This is a **lightweight frontend library built from scratch** that focuses on **DOM abstraction and efficient updates**.

This project is **inspired by how React works internally**, but it is **not built on React** or any existing frontend framework. Every part of the rendering pipeline — virtual DOM creation, DOM rendering, and diffing — is implemented manually to deeply understand how modern UI libraries work under the hood.

---

## Why

Modern frameworks like React hide a lot of complexity. This was built to answer questions like:

* How does a framework turn UI into the DOM?
* How does it update the DOM efficiently without reloading everything?
* Why do we need a Virtual DOM?

Domix exists purely to **learn and demonstrate these internals**.

---

##  Core Ideas

based on four core concepts:

1. **Virtual DOM (VNode)** – UI is represented as plain JavaScript objects
2. **DOM Abstraction** – Application code never touches the real DOM directly
3. **Diffing Algorithm** – Only changed parts of the DOM are updated
4. **Render Pipeline** – UI updates are controlled by the library

---
##  How It Works (High Level)

```
UI Description (VNode)
        ↓
Virtual DOM Tree
        ↓
Diff (Old VNode vs New VNode)
        ↓
Minimal DOM Updates
```

* The user describes UI using `h()`
* Domix converts it into a virtual DOM tree
* On updates, Domix compares the old and new trees
* Only the necessary DOM changes are applied

---

##  Virtual DOM Creation

UI is defined declaratively:

```js
h("h1", {}, "Hello World")
```

This does **not** create a DOM element. It creates a **virtual representation** of the UI.

---

##  Rendering & Diffing

The first render builds the DOM.
Subsequent renders:

* Compare old and new virtual DOM
* Replace, add, or remove only what changed

This mimics the core idea behind React’s reconciliation process.

---
##  Project Goals

* Understand frontend frameworks at a low level
* Learn how DOM abstraction actually works
* Build a framework-like system without external libraries
* Strengthen fundamentals for frontend interviews

---


