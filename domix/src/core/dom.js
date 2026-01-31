export function createDOMElement(vnode) { // Converts virtual DOM node to real DOM element(rendering)
    if(typeof vnode === 'string'){
        return document.createTextNode(vnode);
    }
    const el = document.createElement(vnode.type);
    for(const key in vnode.props){
        el[key] = vnode.props[key];
    }
    (vnode.children||[]).forEach(child => {
        el.appendChild(createDOMElement(child));
    }

    );
    console.log("DOM element created for", vnode.type);
    return el;
}


