const MyReact = (() => {
  let _hooks = [], idx = 0,_rootComponent=null,_rootContainer=null;

  function useState(initialValue) {
    const _idx = idx;
    const state = _hooks[idx] || initialValue;
    const setState = (newValue) => {
      _hooks[_idx] = newValue;
      re_render()
    };
    idx++;
    return [state, setState];
  }

  function useEffect(cb, depArray) {
    const oldDepArray = _hooks[idx];
    let hasChanged = true;
    if (oldDepArray) {
      hasChanged = depArray.every((item, i) => {
        return !Object.is(item, oldDepArray[i]);
      });
    }
    if (hasChanged) cb();
    _hooks[idx] = depArray;
    idx++;
  }

  function createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map(child =>
          typeof child === 'object' ? child : createTextElement(child)
        )
      }
    };
  }

  function createTextElement(text) {
    return {
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: text,
        children: []
      }
    };
  }
  function createRoot(element,container){
    _rootComponent=element;
    _rootContainer=container;
    return{
      render:()=>render(_rootComponent,_rootContainer)
    }
  }
  function render(element, container) {
    if (typeof element === 'string' || typeof element === 'number') {
      container.appendChild(document.createTextNode(String(element)));
      return;
    }

    if (Array.isArray(element)) {
      element.forEach((child) => {
        render(child, container);
      });
      return;
    }

    if (typeof element === 'object' && element !== null) {
      if (element.type === 'TEXT_ELEMENT') {
        const textNode = document.createTextNode(element.props.nodeValue);
        container.appendChild(textNode);
        return;
      };
      if (typeof element.type === 'string') {
        const domElement = document.createElement(element.type);

        for (let prop in element.props) {
          if (prop === 'onClick') {
            domElement.addEventListener('click', element.props[prop]);
          } else if (prop !== 'children') {
            domElement[prop] = element.props[prop];
          }
        }

        if (element.props.children) {
          element.props.children.forEach((child) => {
            render(child, domElement);
          });
        }

        container.appendChild(domElement);
      } else if (typeof element.type === 'function') {
        const component = element.type(element.props);
        render(component, container);
      }
    }
  }

  function re_render(){
    idx = 0; // Reset index for new render
    const rootContainer = _rootContainer || document.getElementById('root');
    while (rootContainer.firstChild) {
      rootContainer.removeChild(rootContainer.firstChild);
    }
    render(_rootComponent, rootContainer);
  }
  return { createElement, useState, useEffect, createRoot,re_render  };
})();

export default MyReact;

