# 💸 React Expense Tracker

A modern and minimal **Expense Tracker** built with React.  
Track your income, expenses, and spending habits visually with a pie chart and CSV export.

> 🚀 **Live Demo:** [Click Here](https://juhi0102.github.io/expense-tracker)

---

## ✨ Features

- ✅ Add and delete transactions
- 📊 Real-time balance, income & expense summary
- 🥧 Pie Chart showing category-wise expenses
- 📤 Export transaction data to CSV
- 💾 Persists data using LocalStorage
- ⚡ Instant updates without reloading

---

## 🖥️ Tech Stack

- React
- Chart.js (via react-chartjs-2)
- LocalStorage API
- React CSV Export (`react-csv`)
- GitHub Pages for deployment

---

## 📦 Getting Started (Local Setup)

1. **Clone this repo:**

```bash
git clone https://github.com/juhi0102/expense-tracker.git
cd expense-tracker

Install dependencies:
npm install

Start the development server:
npm start

🚀 Deploy Instructions (GitHub Pages)
Add this to your package.json:
"homepage": "https://juhi0102.github.io/expense-tracker",
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

Install the deploy tool:
npm install --save gh-pages

Deploy it:
npm run deploy

