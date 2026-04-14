import React from "react";

function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mb-2 shadow-sm">
      <span>{todo.text}</span>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;