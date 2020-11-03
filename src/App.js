import React from "react";

import "./App.css";

function App() {
  const [list, setList] = React.useState([]);

  let todoInput = React.createRef();

  const updateList = (e) => {
    e.preventDefault();
    setList(list => [...list, todoInput]);
  };
  console.log(list);

  return (
    <div className="todo-wrapper">
      <h1>To Do List</h1>
      {list.length > 0 && (
        <div className="todo-output-wrapper">
          {list.map((todo, index) => (
            <div key={index}>{todo.toString()}</div>
          ))}
        </div>
      )}
      <form className="todo-input-wrapper">
        <input type="text" ref={todoInput} />
        <button className="button-update" onClick={updateList}>
          Submit
        </button>
        <button className="button-delete" >
          Delete
        </button>
      </form>
    </div>
  );
}

export default App;
