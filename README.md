# MyReactjs

## Introduction

MyReact is a lightweight JavaScript library inspired by React, designed to provide a simplified implementation of key React features such as components, state management, and hooks,
MyReact offers a straightforward approach to building interactive small web applications with the power of React-like functionality, but with a simpler and more lightweight implementation.

### Example
Explore the simple [Counter app](https://naveenguttedar.github.io/MyReactJs/Example/) built with MyReact in `./Example/index.js`.

## About the project
MyReact is focused on 3 things.
- JSX transpilation
  - To implement this feature we need `@babelJs` specialy the `@babel/preset-react` , it turns the JSX text to a `createEelment` method calls, you check this using a command
    
    ```
    npx babel (your_jsx_file).js --out-file (set_out-put_file_name).js
    
    ```
    So by default,`@babel/preset-react` converts JSX into `React.createElement` method calls. However, MyReactjs requires a bit customized setup to ensure that JSX transpilation results in calls to `MyReact.createElement` instead.
    check out `/.babelrc` for the configuration. And thats it now we can transpile JSX in `MReact.createElement` method calls .
- Dom manupulation
* Dependency resolution (build)
