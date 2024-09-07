import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState({
    name: '',
    amount: '',
  });
  const [expenses, setExpense] = useState([]);

  function addExpense() {
    if (!input.name || !input.amount) return;
    const newExpense = {
      id: expenses.length + 1,
      title: input.name,
      amount: input.amount,
    };
    setExpense([...expenses, newExpense]);
    setInput({
      name: '',
      amount: '',
    });
  }

  function deleteExpense(id) {
    setExpense(expenses.filter((expense) => expense.id !== id));
  }

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <div className="input-section">
        <input
          type="text"
          name="name"
          placeholder="Expense"
          value={input.name}
          onChange={(e) => {
            const { name, value } = e.target;
            setInput({
              ...input,
              [name]: value,
            });
          }}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={input.amount}
          onChange={(e) => {
            const { name, value } = e.target;
            setInput({
              ...input,
              [name]: value,
            });
          }}
        />
        <button onClick={addExpense} className="addBtn">
          Add Expense
        </button>
      </div>
      <ul className="expense-list">
        {expenses.map((expense) => {
          return (
            <li key={expense.id} className="expense">
              <span>{expense.title}</span>
              <span> Rs.{expense.amount}</span>
              <button
                onClick={() => deleteExpense(expense.id)}
                className="deleteBtn"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
