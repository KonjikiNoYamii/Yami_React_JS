import { useState, useReducer } from "react";
import "./todoReducers.css"

const todoReducers = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.text }];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "reset":
      return [];
    default:
      return state;
  }
};

export default function TodoReducers() {
  const [todos, dispatch] = useReducer(todoReducers, []);
  const [input, setInput] = useState("");

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List menggunakan useReducer</h2>

      <div className="todo-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tambah kegiatan..."
          className="todo-input"
        />
        <button
          className="todo-add-btn"
          onClick={() => {
            if (input.trim() === "") return;
            dispatch({ type: "add", text: input });
            setInput("");
          }}
        >
          Tambah
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <button
              className="todo-remove-btn"
              onClick={() => dispatch({ type: "remove", id: todo.id })}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button
          className="todo-reset-btn"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset Semua
        </button>
      )}
    </div>
  );
}
