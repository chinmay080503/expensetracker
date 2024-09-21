import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import BarGraph from './components/BarGraph';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import Transactions from './components/Transactions';
import NewTransaction from './components/NewTransaction';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

const Component = styled(Box)`
  background: #FFF;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  width: 70%; /* Adjusted width */
  height: 78vh;
  margin: 20px auto; /* Center the component and provide some vertical gap */
  gap: 20px; /* Create gap between the child components */
`;


const StyledButton = styled(Button)`
  background: #445A6F;
  color: #fff;
  margin: 40px auto 0;
  display: block;
  &:hover {
    background: #3a4e5a; /* Slightly darker color on hover */
  }
`;

const Header = styled(Typography)`
  margin: 10px 0;
  color: white;
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const App = () => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [
      { id: 1, text: 'Momos', amount: -20 },
      { id: 2, text: 'Salary', amount: 3000 },
      { id: 3, text: 'Book', amount: -100 },
      { id: 4, text: 'Bonus', amount: 1500 },
    ];
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
  }

  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Header>Expense Tracker </Header>
          <Link to="/">Summary</Link>
          <Link to="/add-transaction">Add New Transaction</Link>
          <Link to="/transactions">View Transaction History</Link>
        </div>
        <div className="main-content">
          <Component>
            <Box style={{ width: '100%' }}>
              <Routes>
                <Route path="/" element={
                  <>
                    <Balance transactions={transactions} />
                    <ExpenseCard transactions={transactions} />
                    <Link to="/bar-graph">
                      <StyledButton variant="contained">Bar Graph</StyledButton>
                    </Link>
                  </>
                } />
                <Route path="/add-transaction" element={<NewTransaction addTransaction={addTransaction} />} />
                <Route path="/transactions" element={<Transactions transactions={transactions} deleteTransaction={deleteTransaction} />} />
                <Route path="/bar-graph" element={<BarGraph transactions={transactions} />} />
              </Routes>
            </Box>
          </Component>
        </div>
      </div>
    </Router>
  );
}

export default App;
