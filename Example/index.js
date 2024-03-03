import MyReact from '../myReact.js'
import minus_svg from './minus-3108.svg'
import plus_svg from './plus-3107.svg'
import refresh_svg from './refresh-3104.svg'
import "./style.css"


// Simple counter app 

function Counter() {
  const [count, setCount] = MyReact.useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="Container">
      <h1>Counter </h1>
      <h1 id="count" className="green">{count}</h1>
      <div className="buttons">
         <Button operation={increment} icon={plus_svg}/>
         <Button operation={reset} icon={refresh_svg}/>
         <Button operation={decrement} icon={minus_svg}/>
      </div>
    </div>
  );
}
function Button({operation,icon}) {
  return(
    <div onClick={operation} className="btn">
      <img src={icon} alt="" />
    </div>
  )
}
const root = document.getElementById('root');
MyReact.createRoot(<Counter />, root).render();
