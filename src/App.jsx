import style from "./style.module.scss";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoLıst/TodoList";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [DarkThema, setDarkThema] = useState(false);

  return (
    <div className={style.container}>
      <div
        className={
          DarkThema ? style.darkBackImageSide : style.lightBackImageSide
        }
      >
        <h2 className={style.header}>Todo App</h2>
      </div>
      <div className={DarkThema ? style.darkBottomColor : style.bottomColor}>
        <div className={DarkThema ? style.darkContent : style.content}>
          <div className={style.contentInput}>
            <TodoInput
              todo={todo}
              setTodo={setTodo}
              dark={DarkThema}
              setDark={setDarkThema}
            />
          </div>
        </div>
        <div className={DarkThema ? style.darkContent2 : style.content2}>
          <div className={style.contentList}>
            <TodoList todo={todo} setTodo={setTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
