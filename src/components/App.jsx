import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [todo, setTodo] = useState(""); // what the user types in the input
  const [todoItems, setTodoItems] = useState([]); // the todos in the list

  // What happens on the Add btn click
  function handleClick() {

    // append todo to todos array
    setTodoItems((prevItems) => {
      return [...prevItems, todo];
    }); 

    setTodo(""); // reset input
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
            setTodo(value); // update the todo as the user types it
          }}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
            // Display the todos from the array in a list
            todoItems.map((todoItem, index) => {
              return <ToDoItem key={index} text={todoItem}/>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
