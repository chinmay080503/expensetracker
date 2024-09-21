import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
Chart.register(...registerables);

const BarGraph = ({ transactions = [] }) => {
  console.log('Transactions:', transactions); // Log transactions to debug

  // Check if transactions is valid and has the expected structure
  if (!Array.isArray(transactions)) {
    console.error('Invalid transactions data:', transactions);
    return <p>Error: Invalid transactions data.</p>;
  }

  // Calculate total income and total expenses
  const totalIncome = transactions
    .filter(transaction => typeof transaction.amount === 'number' && transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpense = transactions
    .filter(transaction => typeof transaction.amount === 'number' && transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0) * -1;

  // Prepare data for the chart
  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: 'Amount',
        data: [totalIncome, totalExpense],
        backgroundColor: ['#4CAF50', '#F44336'], // Professional color scheme
        borderColor: ['#388E3C', '#D32F2F'], // Darker shades for borders
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          color: '#333', // Dark gray color for y-axis text
          font: {
            size: 14, // Increase font size for readability
          },
        },
        grid: {
          color: '#ddd', // Subtle grid lines
          borderColor: '#ccc', // Light border color
        },
      },
      x: {
        ticks: {
          color: '#333', // Dark gray color for x-axis text
          font: {
            size: 14, // Increase font size for readability
          },
        },
        grid: {
          color: '#ddd', // Subtle grid lines
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#333', // Dark gray color for legend text
          font: {
            size: 16, // Increase font size for readability
          },
        },
      },
      tooltip: {
        backgroundColor: '#333', // Dark background for tooltips
        titleColor: '#fff', // White color for tooltip title
        bodyColor: '#fff', // White color for tooltip body
        borderColor: '#555', // Dark border color for tooltips
        borderWidth: 1,
      },
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div style={{ width: '80%', maxWidth: '800px', height: '400px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', color: '#333' }}>
          Income and Expense Bar Graph
        </h1>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;

