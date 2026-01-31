export function h(type, props, ...children) // Abstraction for creating virtual DOM nodes
 {
    return{
        type,
        props: props || {} ,  
            children: children.flat()
    }
}
