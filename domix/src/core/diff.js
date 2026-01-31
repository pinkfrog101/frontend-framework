import { createDOMElement } from "./dom.js";// for diffing (keeping old dom and impementing changes to new dom)
export function diff(parent,oldVnode, newVnode, index = 0) {
    // 1. Node added
  if (!oldVnode) {
    parent.appendChild(createDOMElement(newVnode));
    return;
  }

  // 2. Node removed
  if (!newVnode) {
    parent.removeChild(parent.childNodes[index]);
    return;
  }
  
  // 3. Node replaced
  if (changed(newVnode, oldVnode)) {
    parent.replaceChild(
      createDOMElement(newVnode),
      parent.childNodes[index]
    );
    return;
  }
  updateProps(parent.childNodes[index], oldVnode.props, newVnode.props);

  // 4. Same node → diff children
  if (typeof newVnode !== "string" && typeof oldVnode !== "string") {
    const newLen = newVnode.children.length;
    const oldLen = oldVnode.children.length;

    for (let i = 0; i < Math.max(newLen, oldLen); i++) {
      diff(
        parent.childNodes[index],
        oldVnode.children[i],
        newVnode.children[i],
        i
      );
    }
  }
  console.log("diffing:", newVnode, oldVnode);

}

function changed(a, b) {
  return (
    typeof a !== typeof b ||
    typeof a === "string" && a !== b ||
    a.type !== b.type
  );
}  
function updateProps(dom, oldProps = {}, newProps = {}) {
    for (const key in oldProps) {
      if (!(key in newProps)) {
        dom[key] = null;
      }
    }
    for (const key in newProps) {
      if (oldProps[key] !== newProps[key]) {
        dom[key] = newProps[key];
      }
    }
  }
