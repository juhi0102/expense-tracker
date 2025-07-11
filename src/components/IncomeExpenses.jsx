import React from 'react';
import './IncomeExpenses.css';

const IncomeExpenses = ({ transactions }) => {
  const amounts = transactions.map(t => t.amount);

  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);

  const expense = amounts
    .filter(amount => amount < 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+₹{parseFloat(income).toLocaleString()}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-₹{Math.abs(expense).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
