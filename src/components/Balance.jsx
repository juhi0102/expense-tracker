import React from 'react';

const Balance = ({ transactions }) => {
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>₹{parseFloat(total).toLocaleString()}</h1>
    </div>
  );
};

export default Balance;
