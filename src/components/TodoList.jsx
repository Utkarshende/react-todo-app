import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;