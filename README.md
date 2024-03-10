# MyReactjs

## Introduction

MyReact is a lightweight JavaScript library inspired by React, designed to provide a simplified implementation of key React features such as components, state management, and hooks,
MyReact offers a straightforward approach to building interactive small web applications with the power of React-like functionality, but with a simpler and more lightweight implementation.

### Example
Explore the simple [Counter app](https://naveenguttedar.github.io/MyReactJs/Example/) built with MyReact in `./Example/index.js`.

## About the project
MyReact is focused on 4 things.
- JSX transpilation
  - To implement this feature we need `@babelJs` specialy the `@babel/preset-react` , it turns the JSX text to a `createEelment` method calls, you check this using a command
    
    ```
    npx babel (your_jsx_file).js --out-file (set_out-put_file_name).js
    
    ```
    So by default,`@babel/preset-react` converts JSX into `React.createElement` method calls. However, MyReactjs requires a bit customized setup to ensure that JSX transpilation results in calls to `MyReact.createElement` instead.
    check out `/.babelrc` for the configuration. And thats it now we can transpile JSX in `MReact.createElement` method calls .
- Dom manipulation
  - <i>Inspired by</i>:- [Build your own React](https://pomb.us/build-your-own-react/)
  - For creating Dom elements we will use `MyReact.createElement` method which returns Dom Object containing `type`,`props` and `childrens` array.
  - For rendering elements we will use `MyReact.render` method ,which uses Js internal `document.createElement(type)` ,`appendChild(element)` methods to render the Dom Objects.
- State manipulation
  - <i>source</i> :- [Shawn "Swyx" Wang JSConf.Asia 2019](https://youtu.be/KJP1E-Y-xyo?si=pB93CN5WdT8iKY4u)
  - For storing states we will using a array <i>I,e</i> `_hooks[]`.
  - `MyReact.useState` method used to add states and to update states .
  - `MyReact.useEffect` method used to handle side effects of components, such as fetching data and updating the DOM. 
* Dependency resolution (bundling)
- To bundle up all the dependencies(package.json files) and the working directory files to a single file <i>I,e</e> `./Example/build/bundle.js` we need a bundler. 
