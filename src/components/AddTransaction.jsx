import React, { useState } from 'react';

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Other');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) {
      alert('Please fill all fields');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
      category,
    };

    onAdd(newTransaction);
    setText('');
    setAmount('');
    setCategory('Other');
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g. Grocery, Freelancing"
          />
        </div>
        <div className="form-control">
          <label>Amount (− = Expense, + = Income)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Shopping">Shopping</option>
            <option value="Salary">Salary</option>
            <option value="Travel">Travel</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
