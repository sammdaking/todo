import { useState } from "react";
import style from "./style.module.scss";

const TodoInput = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Ekle</button>
      <ul>
        {todos.map((todo, id) => (
          <li key={id}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoInput;
