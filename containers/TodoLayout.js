import React from "react";
// import Button from "../components/Button";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField  from "@mui/material/TextField";

function TodoLayout() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleClick = () => {
    //Appending new todo to previous array of todos
    setTodoList([...todoList, todoText]);
    setTodoText("");
    };
    
    const handleDelete = (todo) => {
        setTodoList(todoList.filter((listtodo) => listtodo !== todo))
    }

  const handleInput = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div>
      {/* <input type="text" value={todoText} onChange={handleInput} /> */}
      <TextField id='standard-basic' label="type here" variant="standard" value={todoText} onChange={handleInput}/>
      {/* <Button label="Add Todo" clickHandler={handleClick} /> */}
      <Button variant="contained" onClick={handleClick}>Todo</Button>

      <ol>
        {todoList.map((todo, index) => {
            return (
                <li key={index}>{todo} <Button  variant="contained"  onclick={() => handleDelete(todo)} >Delete</Button></li>
            );
        })}
      </ol>
    </div>
  );
}

export default TodoLayout;
