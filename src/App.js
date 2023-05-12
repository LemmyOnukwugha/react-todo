import TodoList from "./component/ToDoList";
import NewTodoForm from "./component/NewToDoForm";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Have Fun", completed: true },
    { text: "Learn React", completed: false },
    { text: "Learn the MERN-Stack", completed: false },
  ]);

  const [showTodos, setShowTodos] = useState([true]);

  function removeTodos(idx) {
    const newToDolist = todos.filter((todo, i) => i != idx);
    setTodos(newToDolist);
  }

  function toggleTodo(idx) {
    const el = document.getElementById(`toDotext{idx}`);
    const elCk = document.getElementById(`check{idx}`);
    console.log(elCk);

    el.style.textDecoration == "line-through"
      ? (el.style.textDecoration = "none")
      : (el.style.textDecoration = "line-through");
    elCk.src == "✅" ? (elCk.src = "❎") : (elCk.src = "✅");
  }

  return (
    <div className="App">
      <h1>React To-Do</h1>

      <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "HIDE" : "SHOW"}
      </button>

      {showTodos && (
        <TodoList
          todoList={todos}
          setTodos={setTodos}
          toggleTodo={toggleTodo}
          removeTodos={removeTodos}
        />
      )}

      <hr />
      <NewTodoForm todos={todos} setTodos={setTodos} />
    </div>
  );
}
