import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');

  function addTodo() {
    if (input.trim() !== '') {
      const newTodo = {
        id: new Date().getTime(),
        text: input,
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  }

  function deleteTodo(id) {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
  }

  function editTodo(id, text) {
    setEditValue(text);
    setEditId(id);
    setEditMode(true);
  }

  function updateTodo() {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editId) {
        return { ...todo, text: editValue };
      }
      return todo;
    });

    setTodos(updatedTodos);
    setEditId(null);
    setEditValue('');
    setEditMode(false);
  }

  return (
    <div className="todo-container">
      <h2>ToDo App</h2>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      {editMode ? (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => {
              const { value } = e.target;
              setEditValue(value);
            }}
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      ) : (
        <button className="addBtn" onClick={addTodo}>
          Add
        </button>
      )}

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button className="controls" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
              <button
                className="controls"
                onClick={() => editTodo(todo.id, todo.text)}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
