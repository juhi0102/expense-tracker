import React from 'react';

const Transaction = ({ transaction, onDelete }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const amountStyle = transaction.amount < 0 ? 'minus' : 'plus';

  return (
    <li className={amountStyle}>
      {transaction.text}
      <span>
        {sign}₹{Math.abs(transaction.amount).toLocaleString()}
      </span>
      <button
        className="delete-btn"
        onClick={() => onDelete(transaction.id)}
      >
        ❌
      </button>
    </li>
  );
};

export default Transaction;
