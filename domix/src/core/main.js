import { h } from "./vnode.js";
import { render } from "./render.js";

function App() {
  return h(
    "div",
    { id: "app" },
    h("h1", { style: "color: blue" }, "Hello, Domix!"),
    h("p", null, "This is a simple virtual DOM implementation.")
  );
}
render(h(App), document.getElementById("root"));
