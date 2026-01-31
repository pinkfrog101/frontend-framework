import { diff } from "./diff.js";
let oldVnode = null;
function resolveVNode(vnode) {
  if (typeof vnode === "string") return vnode;
  if (typeof vnode.type === "function") {
    return resolveVNode(vnode.type(vnode.props || {}));
  }
  return{
    type: vnode.type,
    props: vnode.props || {},
    children: vnode.children.map(resolveVNode) || []
  };
}

export function render(vnode, container) {
  const resolvedVNode = resolveVNode(vnode);
  diff(container, oldVnode, resolvedVNode);
  oldVnode = resolvedVNode;
  console.log("Rendered to container", container);
}
