import React from "react";

import "./App.css";

function App() {
  const [list, setList] = React.useState([]);
  // const [todoInput, setTodoInput] = React.useState("");
  const [todoInput, setTodoInput] = React.useState({
    title: "",
    completed: false
  });

  // let todoInput = React.createRef();
  const updateTodoInput = e => {
    setTodoInput({ title: e.target.value, completed: false });
  };

  const updateList = e => {
    e.preventDefault();
    setList(list => [...list, todoInput]);
    setTodoInput({ title: "", completed: false });
  };

  const markItem = (e, index) => {
    e.preventDefault();
    // var stateCopy = Object.assign({}, list);
    // if (stateCopy[index].completed) {
    //   stateCopy[index].completed = false;
    // } else {
    //   stateCopy[index].completed = true;
    // }
    // setList(stateCopy);
  };

  console.log(list);

  return (
    <div className="todo-wrapper">
      <h1>To Do List</h1>
      {list.length > 0 && (
        <div className="todo-output-wrapper">
          {list.map((todo, index) => (
            <>
              {!todo.completed && (
                <div className="todo-output-item">
                  <p key={index}>{todo.title.toString()}</p>
                  <button className="button-delete" onClick={ e => markItem(e, index)}>
                    Done
                  </button>
                </div>
              )}
              {todo.completed && (
                <div className="todo-output-item">
                <p key={index} style={{textDecoration: 'line-through'}}>{todo.title.toString()}</p>
                <button className="button-delete" onClick={markItem(todo)}>
                  Uncheck
                </button>
              </div>
              )}
            </>
          ))}
        </div>
      )}
      <form className="todo-input-wrapper">
        <input type="text" onChange={updateTodoInput} value={todoInput.title} />
        <button className="button-update" onClick={updateList}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
