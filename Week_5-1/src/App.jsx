import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Complete Workout",
      description: "Do 100 pushup and run for 1 km",
    },
    {
      title: "Complete assignment",
      description: "Do 100 dsa question in 10 days",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
      },
    ]);
  }

  return (
    <>
      <input id="title" type="text" placeholder="title" />
      <br />
      <br />
      <input id="description" type="text" placeholder="description" />
      <br />
      <br />
      <button onClick={addTodo}> ADD TODO</button>
      <br />
      <br />
      {/* <CustomButton count={count} setCount={setCount}></CustomButton> */}
      {todos.map((todo, index) => {
        return (
          <Todos
            key={index}
            title={todo.title}
            description={todo.description}
          />
        );
      })}
    </>
  );
}

//Todo component
function Todos(props) {
  return (
    <>
      <div>Title: {props.title}</div>
      <div>Description: {props.description}</div>
      <br />
    </>
  );
}

Todos.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// function CustomButton(props) {
//   function onClickEvent() {
//     props.setCount(props.count + 1);
//   }
//   return <button onClick={onClickEvent}>
//     Counter {props.count}
//   </button>
// }

// CustomButton.propTypes = {
//   count: PropTypes.number.isRequired,
//   setCount: PropTypes.func.isRequired
// };

export default App;
