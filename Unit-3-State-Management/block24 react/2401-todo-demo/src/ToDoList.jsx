import { useState } from "react";
import "./App.css";

function ToDoList() {
  const [todos, setTodos] = useState([
    "Teach React",
    "React Demo",
    "Celebrate!",
  ]);

  const addNewItem = (event) => {
    event.preventDefault();
    const input = document.querySelector("input");
    const newToDo = input.value.split(",");

    // todos.push(NewToDo) // DO NOT DO THIS ! ! ! We don't want to modify state directly
    // it messes with React's re-rendering cycle
    // instead...
    //if newToDo is not an array, putting it in brackets turns it into one [newToDo] but, split turns it into one

    setTodos(todos.concat(newToDo));
    input.value = ' '
  };

  const removeToDoItem = (itemToRemove) => {
    // find the item to be removed (identify the index in the array)
      const indexOfItem = todos.findIndex(todo => todo === itemToRemove)
    // make a copy of the array with the item removed -- use .toSpliced()
      const updatedArray = todos.toSplice(indexOfItem, 1);
    // update the state with the new list
    setTodos(updatedArray)

  };

  return (
    <>
      <h2>My To Do List</h2>
      <form>
        <input type="text" name="todo" />
        <button onClick={addNewItem}>Add</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (<li>
            <button onClick={removeToDoItem}>x</button>
            {todo}
            </li>)
        })}
      </ul>
    </>
  );
}

export default ToDoList;