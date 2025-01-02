import { useState } from "react";
import style from "./style.module.scss";

const TodoInput = ({ todo, setTodo, dark, setDark }) => {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = () => {
    setTodo([...todo, { todo: newTodo, checked: false, done: false }]);
    setNewTodo("");
  };
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const changeThema = () => {
    setDark(!dark);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div className={style.container}>
      <input
        className={dark ? style.darkInput : style.input}
        placeholder="Enter a Todo ..."
        value={newTodo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <span className={style.themeIcon}></span>
      <button className={style.addButton} onClick={addTodo}>
        Add
      </button>
      <button className={style.darkThema} onClick={changeThema}></button>
    </div>
  );
};

export default TodoInput;
