import React from "react";
import { useState } from "react";
import { addTodo, removeTodo } from "./Slice/todoSlice";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const onClickHandle = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const todos = useSelector((state) => state.todos);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={onClickHandle}> Add Task</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
