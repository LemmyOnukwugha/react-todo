import "./ToDoListItem.css";
import { useRef } from "react";

function ToDoListItem({ todo, idx, removeTodos, toggleTodo }) {
  const ref = useRef(null);

  return (
    <>
      <li
        className="ToDoListItem"
        style={{ backgroundColor: idx % 2 ? "lavender" : "plum" }}
      >
        <div className="ListItemIndex">{idx + 1}</div>
        <div>
          <span
            ref={ref}
            id="toDotext{idx}"
            style={!todo.completed ? { textDecoration: "line-through" } : {}}
          >
            {todo.text}
          </span>
        </div>

        <div className="ListItemAction">
          {todo.completed ? (
            <span ref={ref} id="check{idx}" onClick={(e) => toggleTodo(idx)}>
              {" "}
              ✅{" "}
            </span>
          ) : (
            <span onClick={() => removeTodos(idx)}> ❎ </span>
          )}
        </div>
      </li>
    </>
  );
}

export default ToDoListItem;
