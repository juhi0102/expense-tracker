import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import ExpensePieChart from './components/ExpensePieChart';
import ExportCSV from './components/ExportCSV';

function App() {
  // Load from localStorage
  const initialTransactions = JSON.parse(localStorage.getItem('transactions')) || [];

  const [transactions, setTransactions] = useState(initialTransactions);

  // Save to localStorage when transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <Balance transactions={transactions} />
      <IncomeExpenses transactions={transactions} />
      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
      />
      <AddTransaction onAdd={addTransaction} />
      <ExpensePieChart transactions={transactions} />
      
      <ExportCSV transactions={transactions} />
    </div>
  );
}
export default App;

//localStorage.clear(); // Run this in browser console to wipe storage//