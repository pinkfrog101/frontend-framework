import { diff } from "./diff.js";
let oldVnode = null;

export function render(vnode, container) {
  diff(container, oldVnode, vnode);
  oldVnode = vnode;
  console.log("rendered");
}
