import { useState } from "react";
import style from "./style.module.scss";
const TodoList = ({ todo, setTodo }) => {
  const [completedTodos, setCompletedTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);
  const [showTodos, setShowTodos] = useState("All");

  const deleteHandler = (id) => {
    const newTodo = [...todo];
    newTodo.splice(id, 1);
    setTodo(newTodo);
  };
  const doneHandler = (id) => {
    // setIsDone(!isDone);
    const newTodo = [...todo];
    // console.log(todo[id].checked);
    // const doneTodo = todo[id]
    // id si şu olanların checked değerini true yap
    // todo.filter((todo)=>todo[id].cehecked == true)
    // const doneTodo = todo.filter((todo) => todo[id].done == true);
    // if (newTodo[id].done) {
    //   newTodo[id].done = false;
    // } else {
    //   newTodo[id].done = true;
    // }

    newTodo[id].done ? (newTodo[id].done = false) : (newTodo[id].done = true);
    // console.log(todo[id].done);
    // todo[id].done = true;
    setTodo(newTodo);
  };
  const allTodoClear = () => {
    setTodo([]);
  };
  // [{todo:asdsad,checked:false}, {todo:asamet, checked:true}]
  // const todo2 = [...todo]
  //todo.filter((todo) =>{todo.checked ===true })

  const completedTodo = () => {
    // done değeri true olanları filtrele
    const newTodo = todo.filter((todo) => todo.done === true);
    setCompletedTodos(newTodo);
    setShowTodos("completed");
  };
  const notCompletedTodo = () => {
    const newTodo = todo.filter((todo) => todo.done === false);
    setActiveTodos(newTodo);
    setShowTodos("active");
  };

  const allTodo = () => {
    setShowTodos("All");
  };
  //todos   left  bottom side
  return (
    <div className={style.container}>
      <div className={style.todos}>
        <ol>
          {showTodos === "All" &&
            todo.map((t, id) => (
              <li
                style={{ textDecoration: t.done ? "line-through" : "none" }}
                key={id}
              >
                {t.todo}
                <button
                  className={style.todosButton}
                  onClick={() => deleteHandler(id)}
                >
                  Delete
                </button>
                <button
                  className={style.todosButton}
                  onClick={() => doneHandler(id)}
                >
                  Done
                </button>
              </li>
            ))}
          {showTodos === "completed" &&
            completedTodos.map((t, id) => (
              <li
                style={{ textDecoration: t.done ? "line-through" : "none" }}
                key={id}
              >
                {t.todo}
                <button
                  className={style.todosButton}
                  onClick={() => deleteHandler(id)}
                >
                  Delete
                </button>
                <button
                  className={style.todosButton}
                  onClick={() => doneHandler(id)}
                >
                  Done
                </button>
              </li>
            ))}
          {showTodos === "active" &&
            activeTodos.map((t, id) => (
              <li
                style={{ textDecoration: t.done ? "line-through" : "none" }}
                key={id}
              >
                {t.todo}
                <button
                  className={style.todosButton}
                  onClick={() => deleteHandler(id)}
                >
                  Delete
                </button>
                <button
                  className={style.todosButton}
                  onClick={() => doneHandler(id)}
                >
                  Done
                </button>
              </li>
            ))}
        </ol>
      </div>
      <div className={style.bottomSide}>
        <button className={style.button} onClick={() => allTodo()}>
          All
        </button>
        <button className={style.button} onClick={() => allTodoClear()}>
          Clear All
        </button>
        <button className={style.button} onClick={() => completedTodo()}>
          Completed
        </button>
        <button className={style.button} onClick={() => notCompletedTodo()}>
          Active
        </button>
      </div>
      <div className={style.left}>
        <h2> {todo.length} left</h2>
      </div>
    </div>
  );
};

export default TodoList;
