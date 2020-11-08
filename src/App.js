import React from "react";

import "./App.css";

function App() {
  const [finishedList, setFinishedList] = React.useState([]);
  const [unfinishedList, setUnfinishedList] = React.useState([]);
  const [todoInput, setTodoInput] = React.useState("");

  const handleTodoInputChange = e => {
    setTodoInput(e.target.value);
  };

  const updateList = e => {
    e.preventDefault();
    var unfinishedListCopy = [...unfinishedList];
    unfinishedListCopy.push(todoInput);
    setUnfinishedList(unfinishedListCopy);
    setTodoInput("");
  };

  const markAsUnfinished = (e, index) => {
    e.preventDefault();
    var unfinishedListCopy = [...unfinishedList];
    unfinishedListCopy.push(finishedList[index]);
    setUnfinishedList(unfinishedListCopy);
    var finishedListCopy = [...finishedList];
    finishedListCopy.splice(index, 1);
    setFinishedList(finishedListCopy);
  };

  const markAsFinished = (e, index) => {
    e.preventDefault();
    var finishedListCopy = [...finishedList];
    finishedListCopy.push(unfinishedList[index]);
    setFinishedList(finishedListCopy);
    var unfinishedListCopy = [...unfinishedList];
    unfinishedListCopy.splice(index, 1);
    setUnfinishedList(unfinishedListCopy);
  };

  return (
    <div className="todo-wrapper">
      <h1>To Do List</h1>
      {finishedList.length > 0 && (
        <div className="todo-output-wrapper">
          {finishedList.map((todo, index) => (
            <>
              {todo && (
                <div className="todo-output-item">
                  <div
                    className="check-button check-button--finished"
                    onClick={e => markAsUnfinished(e, index)}
                  >
                    <span class="checkmark">
                      <div class="checkmark_stem"></div>
                      <div class="checkmark_kick"></div>
                    </span>
                  </div>
                  <p key={index}>{todo}</p>
                  {/* <button className="button-delete" onClick={ e => markAsUnfinished(e, index)}>
                    Undone
                  </button> */}
                </div>
              )}
            </>
          ))}
        </div>
      )}
      {unfinishedList.length > 0 && (
        <div className="todo-output-wrapper">
          {unfinishedList.map((todo, index) => (
            <>
              {todo && (
                <div className="todo-output-item">
                  <div
                    className="check-button check-button--unfinished"
                    onClick={e => markAsFinished(e, index)}
                  ></div>
                  <p key={index}>{todo}</p>
                  {/* <button className="button-delete" onClick={e => markAsFinished(e, index)}>
                    Done
                  </button> */}
                </div>
              )}
            </>
          ))}
        </div>
      )}
      <form className="todo-input-wrapper">
        <div
          className="check-button check-button--unfinished"
          onClick={updateList}
        ></div>
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          <input type="text" onChange={handleTodoInputChange} value={todoInput} autoFocus/>
          <button className="button-update" onClick={updateList}>
            → Return/Enter to add
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
