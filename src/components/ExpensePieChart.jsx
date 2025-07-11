// src/components/ExpensePieChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = ({ transactions }) => {
  const expenseData = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, curr) => {
      const category = curr.category || 'Other';
      acc[category] = (acc[category] || 0) + Math.abs(curr.amount);
      return acc;
    }, {});

  const data = {
    labels: Object.keys(expenseData),
    datasets: [
      {
        label: 'Expenses',
        data: Object.values(expenseData),
        backgroundColor: [
          '#f39c12', '#c0392b', '#27ae60', '#2980b9', '#8e44ad', '#7f8c8d'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h3 style={{ textAlign: 'center' }}>Expenses by Category</h3>
      <Pie data={data} />
    </div>
  );
};

export default ExpensePieChart;
