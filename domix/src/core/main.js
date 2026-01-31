import { h } from "./vnode.js";
import { render } from "./render.js";

const root = document.getElementById("root");

// FIRST render
const view1 = h("h1", {}, "Hello");
render(view1, root);

