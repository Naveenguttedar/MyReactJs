function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children
        }
    };
}

function render(element, container) {
    if (typeof element.type === 'string') {
        const domElement = document.createElement(element.type);
        for (let prop in element.props) {
            if (prop !== 'children') {
                domElement[prop] = element.props[prop];
            }
        }
        
        element.props.children.forEach(child => {
            if (typeof child === 'object') {
                render(child, domElement);
            } else {
                const textNode = document.createTextNode(child);
                domElement.appendChild(textNode);
            }
        });
        
        container.appendChild(domElement);
    } else if (typeof element.type === 'function') {
        const component = element.type(element.props);
        render(component, container);
    }
}
export {
    createElement,render
}
