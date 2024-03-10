# MyReactjs

## Introduction

MyReact is a lightweight JavaScript library inspired by React, designed to provide a simplified implementation of key React features such as components, state management, and hooks,
MyReact offers a straightforward approach to building interactive small web applications with the power of React-like functionality, but with a simpler and more lightweight implementation.

### Example
Explore the simple [Counter app](https://naveenguttedar.github.io/MyReactJs/Example/) built with MyReact in `./Example/index.js`.
### Motivation for this project
- [Shawn "Swyx" Wang JSConf.Asia 2019](https://youtu.be/KJP1E-Y-xyo?si=pB93CN5WdT8iKY4u)
- [Build your own React](https://pomb.us/build-your-own-react/)
## About the project
MyReact is focused on <b> four </b> things.
- JSX transpilation
  - To implement this feature, we need `@babelJs`, especially the `@babel/preset-react`, which turns the JSX text into a createEelment method calls, You can check this using a command. 
    
    ```
    npx babel (your_jsx_file).js --out-file (set_out-put_file_name).js
    ```
    So by default,`@babel/preset-react` converts JSX into `React.createElement` method calls. However, MyReactjs requires a bit of customisation to ensure that JSX transpilation results in calls to `MyReact.createElement` instead.
    Check out `/.babelrc` for the configuration. And that's it. Now we can transpile JSX in `MReact.createElement` method calls.
- Dom manipulation
  - <i>Inspired by</i>:- [Build your own React](https://pomb.us/build-your-own-react/)
  - For creating Dom elements, we will use the `MyReact.createElement` method, which returns Dom objects containing 'type','props', and `children` arrays.
  - For rendering elements, we will use the `MyReact.render` method, which uses the internal `document.createElement(type)` and `appendChild(element)` methods to render the Dom objects.
- State manipulation
  - <i>source</i> :- [Shawn "Swyx" Wang JSConf.Asia 2019](https://youtu.be/KJP1E-Y-xyo?si=pB93CN5WdT8iKY4u)
  - For storing states we will using a array <i>i,e</i> `_hooks[]`.
  - `MyReact.useState` method is used to add and update states.
  - `MyReact.useEffect` method is used to handle side effects of components, such as fetching data and updating the DOM.
- Dependency resolution (bundling)
  - To bundle up all the dependencies(package.json files) and the working directory files into a single file, <i>ex:-</i> `./Example/build/bundle.js` we need a bundler.Though I love `vite` but to keep the customisation simple, let's go with `Webpack`.
  - All the customisation is available in `Webpack.config.js`.
## Installation
1. Clone the repository
   ```sh
    git clone https://github.com/Naveenguttedar/MyReactJs.git
   ```
2. Change directory(`cd`) to MyReactJs and install all the dependencies
   ```sh
      npm install
   ```
## Usage
   ```js
      import MyReact from './MyReact.js'
   ```
To run local  web server 
  ```sh
     npm run dev-server  # by default it's rendering Example (counter app)
  ```
To create a production build
   ```sh
      npm run build
   ```

