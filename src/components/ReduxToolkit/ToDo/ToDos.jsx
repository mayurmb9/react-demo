import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./toDoSlice";

export default function ToDos() {
  const todos = useSelector((state) => state.todos); // ✅ fixed selector
  const dispatch = useDispatch();

  return (
    <div className="todo-container">
      <h2 className="todo-title">My To-Do List</h2>
       <ul className="todo-list">
        {todos.length ? (
          todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span className="todo-text">{todo.text}</span>
              <button
                className="todo-remove"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                ✖
              </button>
            </li>
          ))
        ) : (
          <li className="todo-empty">No ToDos yet. Add one above 👆</li>
        )}
      </ul>

    </div>
  )
}
