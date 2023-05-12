import { useState } from "react";

export default function NewToDoForm({ setTodos }) {
  const [newTodo, setNewTodo] = useState("");

  function handleAddTodo(evt) {
    evt.preventDefault();
    setTodos((todos) => {
      return [...todos, newTodo];
    });
    setNewTodo("");
  }

  return (
    <>
      <h2>New To-Do</h2>
      <form onSubmit={handleAddTodo}>
        <input
          onChange={(evt) => setNewTodo(evt.target.value)}
          value={newTodo}
          placeholder="New To-Do"
          required
          pattern=".{4,}"
        />
        <button type="submit">ADD TO-DO</button>
      </form>
      <h2>{newTodo}</h2>
    </>
  );
}
