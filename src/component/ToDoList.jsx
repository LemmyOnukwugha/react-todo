import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css";

function ToDoList({ todoList, setTodos, removeTodos, toggleTodo }) {
  return (
    <ul className="ToDoList">
      {todoList.map((todo, idx) => (
        <ToDoListItem
          todo={todo}
          setTodos={setTodos}
          removeTodos={removeTodos}
          toggleTodo={toggleTodo}
          idx={idx}
          key={idx}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
