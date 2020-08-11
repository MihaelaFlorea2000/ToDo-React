import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [todoItems, setTodoItems] = useState([]); // the todos in the list

  // What happens on the Add btn click
  function addItem(todo) {

    // append todo to todos array
    setTodoItems((prevItems) => {
      return [...prevItems, todo];
    }); 
  }

  // What happens when you click on an item
  function deleteItem(id) {

    // remove item from the array
    setTodoItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={addItem} // when the Add btn is pressed
      />
      <div>
        <ul>
          {
            // Display the todos from the array in a list
            todoItems.map((todoItem, index) => {
              return <ToDoItem 
                key={index} 
                id={index}
                text={todoItem}
                onChecked={deleteItem}
              />
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
