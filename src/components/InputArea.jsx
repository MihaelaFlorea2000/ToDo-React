import React, { useState } from "react";

// The text input and Add btn form
function InputArea(props) {
  const [todo, setTodo] = useState(""); // what the user types in the input

  // Dynamically update the todo as the user types
  function handleChange(event) {
    const value = event.target.value;
    setTodo(value);
  }

  return (
    <div className="form">
      <input 
        type="text" 
        value={todo} 
        onChange={handleChange}
      />
      <button onClick = {() => {
          props.onAdd(todo); 
          setTodo(""); 
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;