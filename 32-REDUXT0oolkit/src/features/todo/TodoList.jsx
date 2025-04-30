import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, deleteAllTodos } from "./todoSlice";
import TodoModal from "./TodoModal";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
  <h2 style={{ marginBottom: "20px" }}>Todo List</h2>
  <div style={{ marginBottom: "10px" }}>
    <input
      style={{ padding: "8px", width: "60%", marginRight: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
      placeholder="enter todos"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      style={{ padding: "8px 12px", marginRight: "5px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
      onClick={handleAdd}
    >
      add
    </button>
    <button
      style={{ padding: "8px 12px", backgroundColor: "#f44336", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
      onClick={() => dispatch(deleteAllTodos())}
    >
      delete all
    </button>
  </div>

  <ul style={{ listStyle: "none", padding: 0 }}>
    {todos.map((todo) => (
      <li
        key={todo.id}
        style={{ marginBottom: "8px", background: "#f0f0f0", padding: "10px", borderRadius: "4px" }}
      >
        {todo.text}
        <button
          style={{ marginLeft: "10px", padding: "5px 10px", backgroundColor: "#2196F3", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
          onClick={() => setEditingTodo(todo)}
        >
          edit
        </button>
        <button
          style={{ marginLeft: "5px", padding: "5px 10px", backgroundColor: "#e91e63", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          delete
        </button>
      </li>
    ))}
  </ul>

  <TodoModal
    show={!!editingTodo}
    todo={editingTodo || {}}
    onClose={() => setEditingTodo(null)}
  />
</div>

  );
};

export default TodoList;
