import MyReact from "../myReact";
function Counter(props) {
  const [count, setCount] = MyReact.useState(1);
  return MyReact.createElement("div", {
    class: "Counter"
  }, "Counter of ", props.name, MyReact.createElement("div", {
    id: "count"
  }, count), MyReact.createElement("button", {
    id: "add-btn"
  }, "Add"));
}
const element = MyReact.createElement(Counter, {
  name: "Naveen"
});
const root = document.getElementById('root');
MyReact.render(element, root);
