import React from 'react';
import { CSVLink } from 'react-csv';

const ExportCSV = ({ transactions }) => {
  // Optional: format data for CSV
  const headers = [
    { label: "ID", key: "id" },
    { label: "Description", key: "text" },
    { label: "Amount", key: "amount" },
    { label: "Category", key: "category" },
  ];

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <CSVLink
        data={transactions}
        headers={headers}
        filename="expense-tracker.csv"
        className="btn"
      >
        ⬇ Export to CSV
      </CSVLink>
    </div>
  );
};

export default ExportCSV;
