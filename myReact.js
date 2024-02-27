import {createElement,render} from './utils.js'
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
    function useEffect(cb,dparr){
        const oldDparr=_hooks[idx];
        let hasChanged=true;
        if(oldDparr){
            hasChanged=dparr.every((item,i) => {
               return !Object.is(item,oldDparr[i]);
            })
        }
        if(hasChanged) cb()
        _hooks[idx]=dparr;
        idx++;
    }
    return {createElement, useState,useEffect, render}
})()
function Greeting(props) {
    const [count, setcount] = MyReact.useState(1);
    const [text, setText] = MyReact.useState("apple");
    // React.useEffect(()=>console.log("hi there :)"),[text]);
    return (
        <div className="greeting">
            Hello, {props.name}!
        </div>
    )

}
const element = <Greeting name="World" />;
const root =document.getElementById('root');
MyReact.render(element,root);



