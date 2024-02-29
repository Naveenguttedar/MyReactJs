const MyReact = (() => {
  let _hooks = [], idx = 0;
  function useState(intialValue) {
    const _idx = idx;
    const state = _hooks[idx] || intialValue;
    const setState = (newValue) => {
      _hooks[_idx] = newValue;
    }
    idx++;
    return [state, setState]
  }
  function useEffect(cb, dparr) {
    const oldDparr = _hooks[idx];
    let hasChanged = true;
    if (oldDparr) {
      hasChanged = dparr.every((item, i) => {
        return !Object.is(item, oldDparr[i]);
      })
    }
    if (hasChanged) cb()
    _hooks[idx] = dparr;
    idx++;
  }
  // source https://pomb.us/build-your-own-react/
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
  return { createElement, useState, useEffect, render }
})()
// function Greeting(props) {
//     const [count, setcount] = MyReact.useState(1);
//     const [text, setText] = MyReact.useState("apple");
//     // React.useEffect(()=>console.log("hi there :)"),[text]);
//     return (
//         <div className="greeting" id="greet">
//             Hello, {props.name}!
//         </div>
//     )
//
// }
// const element = <Greeting name="World" age="25" />;
// const root = document.getElementById('root');
// MyReact.render(element, root);
function sayHi(user) {
  alert(`Hello, ${user}!`);
}
export { sayHi as default };

