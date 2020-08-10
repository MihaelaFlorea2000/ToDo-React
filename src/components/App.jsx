import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(["An item"]);

  function handleClick() {
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          type="text" 
          value={todo} 
          onChange={(event) => {
            const value = event.target.value;
            setTodo(value);
          }}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
            todos.map((todoItem, index) => {
              return <li key={index}>{todoItem}</li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
