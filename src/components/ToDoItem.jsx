import React, { useState }from "react";

function ToDoItem(props) {

  const [isDone, setIsDone] = useState(false);

  return (
    <li
      onClick={() => {setIsDone(!isDone)}} 
      style={{textDecoration: isDone ? "line-through" : null}}
    >{props.text}</li>
  );
}

export default ToDoItem;