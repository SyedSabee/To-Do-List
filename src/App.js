import React, { useState, useEffect } from "react";

import "./App.css";
import { FaCheck, FaPlusCircle, FaTrash } from "react-icons/fa";

function App() {
  const [todos, setTodos] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
    };
    setTodos([todo, ...todos]);
  };
  const addToProgress = (id) => {
    const item = todos.find((x) => x.id === id);
    setInprogress([item, ...inprogress]);
    const filterarray = todos.filter((x) => x.id !== id);
    setTodos(filterarray);
  };
  const deleteTodo = (id) => {
    const filterarray = todos.filter((x) => x.id !== id);
    setTodos(filterarray);
  };
  const addtoCompleted = (id) => {
    const item = inprogress.find((x) => x.id === id);
    setCompleted([item, ...completed]);
    const filterarray = inprogress.filter((x) => x.id !== id);
    setInprogress(filterarray);
  };

  useEffect(() => {}, [todos, inprogress]);

  return (
    <div className="App">
      <div className="container">
        <h3 className="title">List</h3>
        <form className="form_list">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Your List"
            name="text"
          />
          <button type="button" className="btn" onClick={() => addTodo()}>
            <FaPlusCircle className="icon" />
          </button>
        </form>
        <div className="list_wrapper">
          <div className="todos_list">
            <h3 className="todo_title">Pending</h3>
            {todos.map((item, index) => (
              <div className="list_card" key={item.id}>
                <p className="card_text">{item.text}</p>
                <FaCheck
                  onClick={() => addToProgress(item.id)}
                  className="icon-check"
                />
                <FaTrash
                  onClick={() => deleteTodo(item.id)}
                  className="icon-trash"
                />
              </div>
            ))}
          </div>
          <div className="todos_list">
            <h3 className="todo_title">InProgress</h3>
            {inprogress.map((item, index) => (
              <div className="progress_card" key={item.key}>
                <p className="card_text">{item.text}</p>
                <FaCheck
                  onClick={() => addtoCompleted(item.id)}
                  className="icon-progress"
                />
              </div>
            ))}
          </div>
          <div className="todos_list">
            <h3 className="todo_title">Completed</h3>
            {completed.map((item, index) => (
              <div className="completed_card" key={item.id}>
                <p className="card_text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
